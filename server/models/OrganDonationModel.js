import mongoose from "mongoose";

const organDonationSchema = new mongoose.Schema(
  {
    organId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    organType: { type: String, required: true }, // Example: "Heart", "Kidney", etc.
    collectionDate: { type: Date, required: true },
    status: {
      type: String,
      enum: ["Pending", "Collected"],
      default: "Pending",
    },
    assignedDoctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("OrganDonation", organDonationSchema);
