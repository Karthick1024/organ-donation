import Doctor from "../models/DoctorModel.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";

export const registerDoctor = async (req, res) => {
  const {
    name,
    email,
    password,
    phone,
    address,
    specialization,
    experience,
    timings,
  } = req.body;

  try {
    // Validate the input
    if (
      !name ||
      !email ||
      !password ||
      !phone ||
      !address ||
      !specialization ||
      !experience ||
      !timings
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if a doctor with the same email already exists
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res
        .status(400)
        .json({ message: "Doctor already registered with this email" });
    }

    // Hash the password before saving
    const hashedPassword = await hashPassword(password);

    // Create a new doctor
    const doctor = new Doctor({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      specialization,
      experience,
      timings,
    });

    // Save the doctor to the database
    await doctor.save();

    // Return a success response
    res.status(201).json({
      message: "Doctor registered successfully",
      doctor: {
        id: doctor._id,
        name: doctor.name,
        email: doctor.email,
        phone: doctor.phone,
        specialization: doctor.specialization,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const doctorLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find doctor by email
    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Compare password
    const isMatch = await comparePassword(password, doctor.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Create JWT token
    const token = createJWT({ id: doctor._id, role: "Doctor" });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
