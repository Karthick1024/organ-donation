

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import formlogo from "../assets/images/form-logo.png";
import "./css/register.css";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      gender: "",
      dob: "",
      phone: "",
      email: "",
      address: "",
      height: "",
      weight: "",
      bloodGroup: "",
      allergies: "",
      medications: "",
      medicalCondition: "",
      hospitalization: "",
      donationDate: "",
      organ: "",
      purpose: "",
      confirmInfo: false,
      allowDonation: false,
      informFamily: false,
      keepCard: false,
      submitRegistry: false,
      donorSignature: null,
      witnessSignature: null,
      donorDateSigned: "",
      witnessDateSigned: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      age: Yup.number().min(18, "Must be 18 or older").max(60, "Max age is 60").required("Age is required"),
      gender: Yup.string().required("Gender is required"),
      dob: Yup.date().required("Date of Birth is required"),
      phone: Yup.string().matches(/^\d{10}$/, "Invalid phone number").required("Phone is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      address: Yup.string().required("Address is required"),
      height: Yup.number().required("Height is required"),
      weight: Yup.number().required("Weight is required"),
      bloodGroup: Yup.string().required("Blood group is required"),
      donationDate: Yup.date().required("Registration date is required"),
      organ: Yup.string().required("Organ selection is required"),
      purpose: Yup.string().required("Purpose selection is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data", values);
      alert("Form submitted successfully!");
    },
  });

  return (
    <div className="container registraion-container bg-info">
      <img src={formlogo} alt="" className="organ-logo mx-auto mt-5" />
      <div className="container register-form mt-5 text-dark">
        <h2 className="bg-danger p-3 text-light">Personal Info</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="name-field">
            <label>Name:</label>
            <input type="text" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
          </div>

          <div className="age">
            <label>Age:</label>
            <input type="number" min={18} max={60} {...formik.getFieldProps("age")} />
            {formik.touched.age && formik.errors.age ? <div className="error">{formik.errors.age}</div> : null}
          </div>

          <div className="gender mb-3">
            <p>Gender:</p>
            <select {...formik.getFieldProps("gender")}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {formik.touched.gender && formik.errors.gender ? <div className="error">{formik.errors.gender}</div> : null}
          </div>

          <div className="dob">
            <label>DOB:</label>
            <input type="date" {...formik.getFieldProps("dob")} />
          </div>

          <div className="phonenumber">
            <label>Phone:</label>
            <input type="tel" {...formik.getFieldProps("phone")} />
          </div>

          <div className="email">
            <label>Email:</label>
            <input type="email" {...formik.getFieldProps("email")} />
          </div>

          <div className="address">
            <label>Address:</label>
            <textarea {...formik.getFieldProps("address")} />
          </div>

          <h2 className="bg-danger p-3 text-light">Medical Data</h2>

          <div className="height">
            <label>Height (cm):</label>
            <input type="text" {...formik.getFieldProps("height")} />
          </div>

          <div className="weight">
            <label>Weight (Kg):</label>
            <input type="text" {...formik.getFieldProps("weight")} />
          </div>

          <div className="blood-group">
            <label>Blood Group:</label>
            <select {...formik.getFieldProps("bloodGroup")}>
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
              <option value="O+">O+</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="AB-">AB-</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <h2 className="bg-danger p-3 text-light">Organ Donation Details</h2>

          <div className="donation-date">
            <label>Date of Registration:</label>
            <input type="date" {...formik.getFieldProps("donationDate")} />
          </div>

          <div className="organ">
            <h5 className="mb-4">Organ to be donated:</h5>
            {["Kidney", "Liver", "Pancreas", "Heart", "Cornea", "Lungs", "Bone Marrow"].map((organ) => (
              <label key={organ}>
                <input type="radio" value={organ} {...formik.getFieldProps("organ")} />
                {organ}
              </label>
            ))}
          </div>

          <h2 className="bg-danger p-3 text-light text-center">Acknowledgment and Terms</h2>

          <div className="mb-4">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="confirmInfo" {...formik.getFieldProps("confirmInfo")} />
              <label className="form-check-label" htmlFor="confirmInfo">
                I confirm that the information provided is accurate.
              </label>
            </div>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="allowDonation" {...formik.getFieldProps("allowDonation")} />
              <label className="form-check-label" htmlFor="allowDonation">
                I allow my organs to be donated for transplant or research.
              </label>
            </div>
          </div>

          <div className="signature mb-4">
            <div className="donar-sign">
              <p>Donor Signature:</p>
              <input type="file" className="form-control mb-3" onChange={(e) => formik.setFieldValue("donorSignature", e.target.files[0])} />

              <p>Date Signed:</p>
              <input type="date" className="form-control" {...formik.getFieldProps("donorDateSigned")} />
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary px-5 py-2">
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Register;
