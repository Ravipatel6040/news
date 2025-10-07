import express from "express";
import { registerAdmin, loginAdmin, getAdminProfile } from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Register: ONLY allowed if no admin exists
router.post("/register", registerAdmin);

// Login
router.post("/login", loginAdmin);

// Protected example: profile
router.get("/profile", protect, getAdminProfile);

export default router;
