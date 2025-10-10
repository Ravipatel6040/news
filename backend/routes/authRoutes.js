// import express from "express";
// import { signup, login, getProfile } from "../controllers/authController.js";
// import authMiddleware from "../middleware/authMiddleware.js";

// const router = express.Router();

// // Public routes
// router.post("/signup", signup);
// router.post("/login", login);

// // Protected route (requires valid JWT)
// router.get("/profile", authMiddleware(), getProfile);

// export default router;

import express from "express";
import { signup, login, getProfile } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/signup", signup);
router.post("/login", login);

// Protected route: accessible by any authenticated user
router.get("/profile", authMiddleware(), getProfile);

// Example: role-based route (optional)
// router.get("/reporter-dashboard", authMiddleware(['reporter']), reporterDashboard);

export default router;
