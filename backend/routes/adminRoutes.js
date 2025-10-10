

import express from "express";
import { 
  registerAdmin, 
  loginAdmin, 
  getAdminProfile, 
  getAllUsers, 
  blockUser, 
  unblockUser, 
  deleteUser 
} from "../controllers/adminController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin registration: ONLY allowed if no admin exists
router.post("/register", registerAdmin);

// Admin login
router.post("/login", loginAdmin);

// -----------------------------
// Protected routes (require admin JWT)
// -----------------------------
router.use(authMiddleware(["admin"])); // ✅ Only admin can access below routes

// Admin profile
router.get("/profile", getAdminProfile);

// User management routes
router.get("/users", getAllUsers);           // Get all users
router.patch("/users/:id/block", blockUser); // Block a user
router.patch("/users/:id/unblock", unblockUser); // Unblock a user
router.delete("/users/:id", deleteUser);     // Delete a user

export default router;
