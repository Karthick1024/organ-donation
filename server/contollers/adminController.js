import DoctorModel from "../models/DoctorModel.js";
import Admin from "../models/AdminModel.js";

export const addDoctor = async (req, res) => {
  try {
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
      return res.status(400).json({
        msg: "Please provide all required fields",
      });
    }
    const existingDoctor = await DoctorModel.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ msg: "Doctor already exists" });
    }
    const doctorData = {
      name,
      email,
      password,
      phone,
      address,
      specialization,
      experience,

      timings,
    };
    const doctor = await DoctorModel.create(doctorData);
    res.status(201).json({ msg: "Doctor created", doctor });
  } catch (error) {}
};

export const getOneDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await DoctorModel.findById(id);
    if (!doctor) {
      return res.status(404).json({ msg: "Doctor not found" });
    }
    res.status(200).json({ doctor });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await DoctorModel.find();
    res.status(200).json({ doctors });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Compare password
    const isMatch = await comparePassword(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Create JWT token
    const token = createJWT({ id: admin._id, role: "Admin" });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await DoctorModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!doctor) {
      return res.status(404).json({ msg: "Doctor not found" });
    }
    res.status(200).json({ msg: "Doctor updated", doctor });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await DoctorModel.findByIdAndDelete(id);
    if (!doctor) {
      return res.status(404).json({ msg: "Doctor not found" });
    }
    res.status(200).json({ msg: "Doctor deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const viewUserDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const viewAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};
