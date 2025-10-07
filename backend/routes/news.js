import express from "express";
import multer from "multer";
import News from "../models/News.js";
import path from "path";

const router = express.Router();

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Upload news
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body;
    const news = new News({
      title,
      description,
      image: req.file ? `/uploads/${req.file.filename}` : null
    });
    await news.save();
    res.status(201).json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all news
router.get("/", async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
