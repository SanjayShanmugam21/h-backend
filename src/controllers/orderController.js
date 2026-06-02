import Food from "../models/Food.js";
import Order from "../models/Order.js";

export const createOrder = async (req, res, next) => {
  try {
    const { items } = req.body;
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Order items are required." });
    }

    const itemDocs = await Promise.all(
      items.map(async (item) => {
        const food = await Food.findById(item.foodId);
        if (!food) {
          throw new Error(`Food item not found: ${item.foodId}`);
        }

        const quantity = Number(item.quantity || 1);
        return {
          foodId: food._id,
          name: food.name,
          image: food.image,
          price: food.price,
          quantity,
        };
      })
    );

    const totalPrice = itemDocs.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const order = await Order.create({
      userId: req.user._id,
      items: itemDocs,
      totalPrice,
      status: "Pending",
    });

    res.status(201).json(order);
  } catch (error) {
    if (error.message.includes("Food item not found")) {
      return res.status(404).json({ message: error.message });
    }
    next(error);
  }
};

export const getUserOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find()
      .populate("userId", "name email")
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

export const updateOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!["Pending", "Completed"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value." });
    }

    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found." });

    order.status = status;
    const updated = await order.save();
    res.json(updated);
  } catch (error) {
    next(error);
  }
};
