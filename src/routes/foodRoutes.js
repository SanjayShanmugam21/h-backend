import express from "express";
import {
  createFood,
  deleteFood,
  getFoods,
  updateFood,
} from "../controllers/foodController.js";
import { authorize, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getFoods);
router.post("/", protect, authorize("admin"), createFood);
router.put("/:id", protect, authorize("admin"), updateFood);
router.delete("/:id", protect, authorize("admin"), deleteFood);

export default router;
