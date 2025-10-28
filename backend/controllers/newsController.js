import News from "../models/News.js";

// 📰 Add News (Pending by default)
export const addNews = async (req, res) => {
  try {
    const { title, description } = req.body; // now plain strings
    const image = req.file ? req.file.path : "";

    const news = new News({
      title: title || "",
      description: description || "",
      image,
      createdBy: req.user?._id || null, // optional user
      status: "pending",
    });

    await news.save();

    res.status(201).json({
      success: true,
      message: "News submitted successfully and waiting for admin approval.",
      news,
    });
  } catch (error) {
    console.error("Add News Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ Get approved news (Public)
export const getApprovedNews = async (req, res) => {
  try {
    const news = await News.find({ status: "approved" })
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, news });
  } catch (error) {
    console.error("Get Approved News Error:", error);
    res.status(500).json({ success: false, message: "Error fetching approved news" });
  }
};

// 🔒 Get pending news (Admin)
export const getPendingNews = async (req, res) => {
  try {
    const news = await News.find({ status: "pending" })
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, news });
  } catch (error) {
    console.error("Get Pending News Error:", error);
    res.status(500).json({ success: false, message: "Error fetching pending news" });
  }
};

// 🧾 Approve or reject news (Admin)
export const approveNews = async (req, res) => {
  try {
    const { newsId } = req.params;
    const { action, rejectionReason } = req.body; // approved / rejected

    if (!["approved", "rejected"].includes(action)) {
      return res.status(400).json({ success: false, message: "Invalid action value" });
    }

    const news = await News.findById(newsId);
    if (!news) {
      return res.status(404).json({ success: false, message: "News not found" });
    }

    news.status = action;
    if (action === "rejected" && rejectionReason) {
      news.rejectionReason = rejectionReason;
    }

    news.reviewedBy = req.admin?._id || null; // optional
    await news.save();

    res.status(200).json({
      success: true,
      message:
        action === "approved"
          ? "News approved successfully"
          : "News rejected successfully",
      news,
    });
  } catch (error) {
    console.error("Approve/Reject News Error:", error);
    res.status(500).json({ success: false, message: "Error updating news status" });
  }
};



export const getSingleNews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findById(id);

    if (!news) {
      return res.status(404).json({ success: false, message: "News not found" });
    }

    res.json({ success: true, news });
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
