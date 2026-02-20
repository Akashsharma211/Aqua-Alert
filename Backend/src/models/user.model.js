import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["public", "worker", "supervisor"],
      required: true,
    },

    phone: String,

    location: {
      district: String,
      state: String,
      city: String,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    currentLocation: {
      lat: Number,
      lng: Number,
      accuracy: Number,
      updatedAt: Date,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;