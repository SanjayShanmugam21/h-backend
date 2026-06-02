import Food from "../models/Food.js";

export const getFoods = async (req, res, next) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const foods = await Food.find(filter).sort({ createdAt: -1 });
    res.json(foods);
  } catch (error) {
    next(error);
  }
};

export const createFood = async (req, res, next) => {
  try {
    const { name, image, price, rating, description, category } = req.body;
    const food = await Food.create({ name, image, price, rating, description, category });
    res.status(201).json(food);
  } catch (error) {
    next(error);
  }
};

export const updateFood = async (req, res, next) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) return res.status(404).json({ message: "Food item not found." });

    Object.assign(food, req.body);
    const updated = await food.save();
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

export const deleteFood = async (req, res, next) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) return res.status(404).json({ message: "Food item not found." });

    await food.deleteOne();
    res.json({ message: "Food deleted successfully." });
  } catch (error) {
    next(error);
  }
};
