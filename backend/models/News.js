import mongoose from "mongoose";

const newsSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("News", newsSchema);
