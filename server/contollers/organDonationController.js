import OrganDonation from "../models/OrganDonationModel.js";
import Doctor from "../models/DoctorModel.js";
import User from "../models/UserModel.js";

export const createDonation = async (req, res) => {
  const { userId } = req.params; // ID of the user creating the donation
  const { organType, collectionDate, location } = req.body;

  try {
    // Validate user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new organ donation record
    const newDonation = new OrganDonation({
      organId: userId,
      organType,
      collectionDate,
      location,
    });

    // Save the donation record
    const savedDonation = await newDonation.save();

    // Add the donation to the user's organDonations field
    user.organDonations.push(savedDonation._id);
    await user.save();

    res.status(201).json({
      message: "Donation created successfully",
      donation: savedDonation,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create donation",
      error: error.message,
    });
  }
};

export const updateDonationRequest = async (req, res) => {
  const { donationId } = req.params;
  const { organType, collectionDate, location, status, assignedDoctor } =
    req.body;

  try {
    const updatedDonation = await OrganDonation.findByIdAndUpdate(
      donationId,
      { organType, collectionDate, location, status, assignedDoctor },
      { new: true }
    );

    if (!updatedDonation) {
      return res.status(404).json({ message: "Donation request not found" });
    }

    res.status(200).json({
      message: "Donation request updated successfully",
      organDonation: updatedDonation,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update donation request", error });
  }
};

export const deleteDonationRequest = async (req, res) => {
  const { donationId } = req.params;

  try {
    const deletedDonation = await OrganDonation.findByIdAndDelete(donationId);

    if (!deletedDonation) {
      return res.status(404).json({ message: "Donation request not found" });
    }

    res.status(200).json({
      message: "Donation request deleted successfully",
      organDonation: deletedDonation,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete donation request", error });
  }
};

export const assignDoctorToOrganCollection = async (req, res) => {
  const { donationId, doctorId } = req.body;

  try {
    const organDonation = await OrganDonation.findById(donationId);
    const doctor = await Doctor.findById(doctorId);

    if (!organDonation || !doctor) {
      return res.status(404).json({ message: "Donation or Doctor not found" });
    }

    organDonation.assignedDoctor = doctorId;
    organDonation.status = "Collected";
    await organDonation.save();

    doctor.organCollections.push(donationId);
    await doctor.save();

    res
      .status(200)
      .json({ message: "Doctor assigned successfully", organDonation });
  } catch (error) {
    res.status(500).json({ message: "Failed to assign doctor", error });
  }
};

export const getAllOrganDonations = async (req, res) => {
  try {
    const organDonations = await OrganDonation.find()
      .populate("user")
      .populate("assignedDoctor");
    res.status(200).json(organDonations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch organ donations", error });
  }
};

export const getMyDonation = async (req, res) => {
  const { userId } = req.params; // User ID is passed in the route

  try {
    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find all donations for the user and populate the required fields
    const donations = await OrganDonation.find({ organId: userId })
      .populate("assignedDoctor")
      .populate("organId"); // Populate the organId field with user details

    if (donations.length === 0) {
      return res
        .status(404)
        .json({ message: "No donations found for this user" });
    }

    // Return the donations
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch donation details",
      error: error.message,
    });
  }
};
