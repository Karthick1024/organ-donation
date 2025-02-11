import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    specialization: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: String, required: true },
    timings: { type: String, required: true },
    assignedRequests: [
      { type: mongoose.Schema.Types.ObjectId, ref: "OrganRequest" },
    ],
    organCollections: [
      { type: mongoose.Schema.Types.ObjectId, ref: "OrganDonation" },
    ],
    role: {
      type: String,
      enum: ["Doctor"],
      default: "Doctor",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Doctor", doctorSchema);
