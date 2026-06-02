import mongoose from "mongoose";

const menuCardSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

const MenuCard = mongoose.model("MenuCard", menuCardSchema);
export default MenuCard;
