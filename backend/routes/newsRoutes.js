import express from "express";
import {
  addNews,
  getApprovedNews,
  getPendingNews,
  approveNews
} from "../controllers/newsController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { uploadNewsImage } from "../middleware/multerMiddleware.js";

const router = express.Router();

/**
 * =====================
 * USER ROUTES
 * =====================
 */

// Add news (pending by default) - User must be logged in
router.post(
  "/add",
  authMiddleware(), // any logged-in user
  uploadNewsImage.single("image"),
  addNews
);

// Get approved news - Public
router.get("/approved", getApprovedNews);

/**
 * =====================
 * ADMIN ROUTES
 * =====================
 */

// Get pending news for approval - Admin only
router.get("/pending", authMiddleware("admin"), getPendingNews);

// Approve or reject news - Admin only
router.patch("/approve/:newsId", authMiddleware("admin"), approveNews);

export default router;



