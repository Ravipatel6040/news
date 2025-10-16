import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Admin from "../models/Admin.js";

const authMiddleware = (requiredRoles = []) => async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    let currentUser = null;
    if (decoded.role === "admin") {
      currentUser = await Admin.findById(decoded.id);
    } else {
      currentUser = await User.findById(decoded.id);
    }

    if (!currentUser) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    req.user = currentUser;

    // ✅ Check if user's role is allowed
    if (requiredRoles.length && !requiredRoles.includes(decoded.role)) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    next();
  } catch (err) {
    console.error("Auth Middleware Error:", err);
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default authMiddleware;

