import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters"],
      maxlength: [50, "Name must be at most 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
      validate: {
        validator: function (v) {
          return /[A-Z]/.test(v) &&
            /[a-z]/.test(v) &&
            /[0-9]/.test(v) &&
            /[!@#$%^&*]/.test(v);
        },
        message:
          "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character",
      },
    },
    role: {
      type: String,
      enum: ["reader", "reporter", "media"],
      default: "reader",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
