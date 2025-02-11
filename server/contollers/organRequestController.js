import OrganRequest from "../models/OrganRequestModel.js";
import User from "../models/UserModel.js";
export const createOrganRequest = async (req, res) => {
  const { organId, organType } = req.body;

  try {
    const newRequest = new OrganRequest({
      organId,
      organType,
      status: "Pending",
    });

    const savedRequest = await newRequest.save();
    res.status(201).json({
      message: "Organ request created successfully",
      organRequest: savedRequest,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create organ request", error });
  }
};

export const updateOrganRequestStatus = async (req, res) => {
  const { requestId } = req.params;
  const { status } = req.body;
  try {
    const organRequest = await OrganRequest.findByIdAndUpdate(
      requestId,
      { status },
      { new: true }
    );
    if (!organRequest) {
      return res.status(404).json({ message: "Organ request not found" });
    }
    res.status(200).json(organRequest);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update organ request status", error });
  }
};

export const deleteOrganRequest = async (req, res) => {
  const { requestId } = req.params;
  try {
    await OrganRequest.findByIdAndDelete(requestId);
    res.status(200).json({ message: "Organ request deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete organ request", error });
  }
};

export const getUsersAllOrganRequests = async (req, res) => {
  try {
    const organRequests = await OrganRequest.find({ user: req.user._id });
    res.status(200).json({ organRequests });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch organ requests", error });
  }
};

export const acceptOrganRequest = async (req, res) => {
  const { requestId } = req.params;

  try {
    const organRequest = await OrganRequest.findById(requestId);

    if (!organRequest) {
      return res.status(404).json({ message: "Organ request not found" });
    }

    if (organRequest.status !== "Pending") {
      return res
        .status(400)
        .json({ message: "Only pending requests can be accepted" });
    }

    organRequest.status = "Assigned";
    const updatedRequest = await organRequest.save();

    res.status(200).json({
      message: "Organ request accepted successfully",
      organRequest: updatedRequest,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to accept organ request", error });
  }
};

export const viewMyOrganRequestStatus = async (req, res) => {
  const { userId } = req.params; // User ID is passed in the route

  try {
    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find all organ requests associated with the user
    const organRequests = await OrganRequest.find({ organId: userId })
      .populate("assignedDoctor") // Populate assigned doctor details
      .populate("organId"); // Populate the organId field with user details

    if (organRequests.length === 0) {
      return res
        .status(404)
        .json({ message: "No organ requests found for this user" });
    }

    // Return the organ request details
    res.status(200).json(organRequests);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch organ request details",
      error: error.message,
    });
  }
};

export const getAllOrganRequests = async (req, res) => {
  try {
    const organRequests = await OrganRequest.find()
      .populate("user")
      .populate("assignedDoctor");
    res.status(200).json(organRequests);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch organ requests", error });
  }
};
