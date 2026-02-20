import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
      accuracy: { type: Number, required: true },
      district: String,
      state: String,
      city: String,
    },

    image: {
      type: String,
      required: true,
    },

    description: String,
    contactPhone: String,

    // AI analysis results
    aiProblem: String,
    aiCauses: String,
    aiPrecautions: String,
    aiPrevention: String,

    severity: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },

    status: {
      type: String,
      enum: [
        "submitted",
        "accepted",
        "assigned",
        "in_progress",
        "completed",
        "verified",
      ],
      default: "submitted",
    },

    // supervisor actions
    acceptedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    acceptedAt: Date,

    // worker assignment
    assignedWorker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    assignedAt: Date,

    // completion proof
    completionImage: String,
    completionLocation: {
      lat: Number,
      lng: Number,
      accuracy: Number,
    },
    completedAt: Date,

    // supervisor verification
    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    verifiedAt: Date,

    resolutionMessage: String,

    clusterId: String,
    qrPath: String,
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", reportSchema);
export default Report;