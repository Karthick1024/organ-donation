import mongoose from "mongoose";

const organRequestSchema = new mongoose.Schema(
  {
    organId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    organType: { type: String, required: true }, // Example: "Kidney", "Liver", etc.
    status: {
      type: String,
      enum: ["Pending", "Assigned", "Completed"],
      default: "Pending",
    },
    assignedDoctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    requestDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("OrganRequest", organRequestSchema);
