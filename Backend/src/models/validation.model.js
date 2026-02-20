import mongoose from "mongoose";

const validationSchema = new mongoose.Schema(
  {
    report: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Report",
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    vote: {
      type: Number, // 1 = valid, 0 = invalid
      required: true,
    },
  },
  { timestamps: true }
);

// prevent same user voting twice
validationSchema.index({ report: 1, user: 1 }, { unique: true });

const Validation = mongoose.model("Validation", validationSchema);
export default Validation;