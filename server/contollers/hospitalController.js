import Hospital from "../models/HospitalModel.js";

// Create a new hospital
export const createHospital = async (req, res) => {
  const { name, location, contactNumber } = req.body;

  try {
    const newHospital = new Hospital({
      name,
      location,
      contactNumber,
    });

    await newHospital.save();
    res.status(201).json({
      message: "Hospital created successfully",
      hospital: newHospital,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create hospital", error });
  }
};

// Get all hospitals
export const getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json(hospitals);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch hospitals", error });
  }
};

// Get a specific hospital by ID
export const getHospitalById = async (req, res) => {
  const { id } = req.params;

  try {
    const hospital = await Hospital.findById(id);

    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    res.status(200).json(hospital);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch hospital", error });
  }
};

// Update a hospital
export const updateHospital = async (req, res) => {
  const { id } = req.params;
  const { name, location, contactNumber } = req.body;

  try {
    const updatedHospital = await Hospital.findByIdAndUpdate(
      id,
      { name, location, contactNumber },
      { new: true, runValidators: true }
    );

    if (!updatedHospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    res.status(200).json({
      message: "Hospital updated successfully",
      hospital: updatedHospital,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update hospital", error });
  }
};

// Delete a hospital
export const deleteHospital = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedHospital = await Hospital.findByIdAndDelete(id);

    if (!deletedHospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    res.status(200).json({ message: "Hospital deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete hospital", error });
  }
};
