import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: {
      en: { type: String, default: "" },
      hi: { type: String, default: "" },
    },
    description: {
      en: { type: String, default: "" },
      hi: { type: String, default: "" },
    },
    image: { type: String, default: "" },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    rejectionReason: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("News", newsSchema);
