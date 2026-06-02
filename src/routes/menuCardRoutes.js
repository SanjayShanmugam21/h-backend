import express from "express";
import {
    createMenuCard,
    deleteMenuCard,
    getMenuCards,
    updateMenuCard,
} from "../controllers/menuCardController.js";
import { authorize, protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/", getMenuCards);
router.post("/", protect, authorize("admin"), upload.single("image"), createMenuCard);
router.put("/:id", protect, authorize("admin"), upload.single("image"), updateMenuCard);
router.delete("/:id", protect, authorize("admin"), deleteMenuCard);

export default router;
