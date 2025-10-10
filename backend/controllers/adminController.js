
import Admin from "../models/Admin.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * Register admin
 * Only allowed if no admin exists
 */
export const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required" });

    const adminCount = await Admin.countDocuments();
    if (adminCount > 0) {
      return res.status(403).json({ message: "Admin already exists. Registration disabled." });
    }

    const admin = await Admin.create({ email, password });
    const safeAdmin = { id: admin._id, email: admin.email, createdAt: admin.createdAt };
    return res.status(201).json({ message: "Admin registered successfully", admin: safeAdmin });
  } catch (error) {
    console.error("registerAdmin error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};


/**
 * Admin login
 */

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required" });

    const admin = await Admin.findOne({ email: email.toLowerCase().trim() }).select("+password");
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // adminController.js -> loginAdmin
const token = jwt.sign(
  { id: admin._id, email: admin.email, role: "admin" }, 
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
  
);


    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("loginAdmin error:", error.message);
    res.status(500).json({ message: "Server error" });
    
  }
};



export const getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user._id).select("-password");
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    res.status(200).json({ admin });
  } catch (error) {
    console.error("getAdminProfile error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};


/**
 * Get all users
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({ users });
  } catch (error) {
    console.error("getAllUsers error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Block a user
 */
export const blockUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User blocked", user });
  } catch (error) {
    console.error("blockUser error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Unblock a user
 */
export const unblockUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, { isBlocked: false }, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User unblocked", user });
  } catch (error) {
    console.error("unblockUser error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Delete a user
 */
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.error("deleteUser error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};


