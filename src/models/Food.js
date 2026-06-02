import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    rating: { type: Number, default: 4.5, min: 0, max: 5 },
    description: { type: String, required: true, trim: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", foodSchema);
export default Food;
