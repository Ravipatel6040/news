import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * Register admin
 * NOTE: This route will only allow creating admin if there is no admin record already.
 */
export const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required" });

    // If any admin already exists, block further registration
    const adminCount = await Admin.countDocuments();
    if (adminCount > 0) {
      return res.status(403).json({ message: "Admin already exists. Registration disabled." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({ email, password: hashedPassword });
    // Do not return password
    const safeAdmin = { id: admin._id, email: admin.email, createdAt: admin.createdAt };
    return res.status(201).json({ message: "Admin registered successfully", admin: safeAdmin });
  } catch (error) {
    console.error("registerAdmin error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * Login admin: returns JWT token
 */
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required" });

    const admin = await Admin.findOne({ email: email.toLowerCase().trim() });
    if (!admin) return res.status(404).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const payload = { id: admin._id, email: admin.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("loginAdmin error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * Example protected route: Get admin profile
 */
export const getAdminProfile = async (req, res) => {
  try {
    // req.admin set by auth middleware
    const admin = await Admin.findById(req.admin.id).select("-password");
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    return res.status(200).json({ admin });
  } catch (error) {
    console.error("getAdminProfile error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
