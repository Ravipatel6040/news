// import mongoose from "mongoose";

// const newsSchema = new mongoose.Schema(
//   {
//     title: { type: String, default: "" },
//     description: { type: String, default: "" },
//     image: { type: String, default: "" },
//     status: {
//       type: String,
//       enum: ["pending", "approved", "rejected"],
//       default: "pending",
//     },
//     createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//     reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
//     rejectionReason: { type: String, default: "" },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("News", newsSchema);


import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      default: "",
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    image: {
      type: String,
      default: "", // will store uploaded image path like "uploads/news/xyz.jpg"
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: false,
    },
    rejectionReason: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("News", newsSchema);
