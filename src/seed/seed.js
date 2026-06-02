import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Food from "../models/Food.js";
import User from "../models/User.js";
import Category from "../models/Category.js";
import { foodSeed, categorySeed } from "./seedData.js";

dotenv.config();

const runSeed = async () => {
  try {
    await connectDB();
    
    // Clean existing data
    await Food.deleteMany();
    await Category.deleteMany();
    await User.deleteMany({ role: "admin" });

    // Seed Categories first
    const createdCategories = await Category.insertMany(categorySeed);
    console.log(`${createdCategories.length} categories seeded.`);

    // Map categories to foods
    const foodsWithIds = foodSeed.map(food => ({
      ...food,
      category: createdCategories[food.categoryIndex]._id
    }));

    // Seed Foods
    await Food.insertMany(foodsWithIds);
    console.log(`${foodsWithIds.length} food items seeded.`);

    // Seed Admin
    await User.create({
      name: "Hyathh Admin",
      email: "admin@hayaath.com",
      password: "admin123",
      role: "admin",
    });
    console.log("Admin user created.");

    console.log("Database sealing complete.");
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error.message);
    process.exit(1);
  }
};

runSeed();
