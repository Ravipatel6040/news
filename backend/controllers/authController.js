


import User from "../models/User.js";
import jwt from "jsonwebtoken";

/**
 * User Signup
 */
export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: "Name, email, and password are required" });

    // Check if user already exists
    const userExists = await User.findOne({ email: email.toLowerCase().trim() });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    // Create user (password will be hashed automatically by pre-save hook)
    const user = await User.create({ name, email, password, role });

    res.status(201).json({ message: "User registered successfully", user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    console.error("signup error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * User Login
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required" });

    const user = await User.findOne({ email: email.toLowerCase().trim() }).select("+password");
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    // Check if user is blocked
    if (user.isBlocked) return res.status(403).json({ message: "Your account has been blocked by admin" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      token,
      role: user.role,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error("login error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Get User Profile (protected route)
 */
export const getProfile = async (req, res) => {
  try {
    // req.user set by auth middleware
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ user });
  } catch (error) {
    console.error("getProfile error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
