import express from "express";
import {
  createOrder,
  getAllOrders,
  getUserOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";
import { authorize, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, authorize("user", "admin"), createOrder);
router.get("/user", protect, authorize("user", "admin"), getUserOrders);
router.get("/", protect, authorize("admin"), getAllOrders);
router.put("/:id", protect, authorize("admin"), updateOrderStatus);

export default router;
