// import mongoose from "mongoose";
// import validator from "validator";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Name is required"],
//       trim: true,
//       minlength: [3, "Name must be at least 3 characters"],
//       maxlength: [50, "Name must be at most 50 characters"],
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//       lowercase: true,
//       validate: [validator.isEmail, "Please provide a valid email"],
//     },
//     password: {
//       type: String,
//       required: [true, "Password is required"],
//       minlength: [8, "Password must be at least 8 characters"],
//       validate: {
//         validator: function (v) {
//           return /[A-Z]/.test(v) &&
//             /[a-z]/.test(v) &&
//             /[0-9]/.test(v) &&
//             /[!@#$%^&*]/.test(v);
//         },
//         message:
//           "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character",
//       },
//     },
//     role: {
//       type: String,
//       enum: ["reader", "reporter", "media"],
//       default: "reader",
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("User", userSchema);



import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

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
          return (
            /[A-Z]/.test(v) &&
            /[a-z]/.test(v) &&
            /[0-9]/.test(v) &&
            /[!@#$%^&*]/.test(v)
          );
        },
        message:
          "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character",
      },
      select: false, // Hide password by default
    },
    role: {
      type: String,
      enum: ["reader", "reporter", "media"],
      default: "reader",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", userSchema);

