import express from "express";
import {
  addDefaultCategories,
  getAllCategories,
  deleteCategory,
} from "../controllers/categoryController.js";
import { adminAuth } from "../middleware/Categoryauth.js";

const router = express.Router();

// ✅ Admin adds all default categories
router.post("/add-default", adminAuth, addDefaultCategories);

// ✅ Get all categories (public)
router.get("/all", getAllCategories);

// ✅ Delete category (admin)
router.delete("/:id", adminAuth, deleteCategory);

export default router;
