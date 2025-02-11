import React from "react";
import { useFormik } from "formik";
// import "./css/request.css";

const OrganRequestForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      gender: "",
      medicalCondition: "",
      organNeeded: "",
      organNeededDate: "",
      doctorName: "",
      doctorSignature: null,
      doctorSignedDate: "",
    },
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      alert("Request Submitted Successfully!");
    },
  });

  return (
    <div className="container request-container bg-light p-4 mt-5 shadow">
      <h2 className="bg-danger p-3 text-light text-center">Organ Request Form</h2>

      <form onSubmit={formik.handleSubmit} className="mt-4">
        {/* Personal Info */}
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" {...formik.getFieldProps("name")} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input type="number" className="form-control" min="1" max="100" {...formik.getFieldProps("age")} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <select className="form-select" {...formik.getFieldProps("gender")} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Medical Condition */}
        <div className="mb-3">
          <label className="form-label">Medical Condition:</label>
          <textarea className="form-control" rows="3" {...formik.getFieldProps("medicalCondition")} required></textarea>
        </div>

        {/* Organ Needed */}
        <div className="mb-3">
          <label className="form-label">Organ Needed:</label>
          <select className="form-select" {...formik.getFieldProps("organNeeded")} required>
            <option value="">Select Organ</option>
            <option value="Kidney">Kidney</option>
            <option value="Liver">Liver</option>
            <option value="Heart">Heart</option>
            <option value="Lungs">Lungs</option>
            <option value="Cornea">Cornea</option>
            <option value="Bone Marrow">Bone Marrow</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Date Needed:</label>
          <input type="date" className="form-control" {...formik.getFieldProps("organNeededDate")} required />
        </div>

        {/* Doctor Details */}
        <h4 className="bg-danger p-2 text-light text-center mt-4">Doctor's Certification</h4>

        <div className="mb-3">
          <label className="form-label">Doctor's Name:</label>
          <input type="text" className="form-control" {...formik.getFieldProps("doctorName")} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Doctor's Signature:</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => formik.setFieldValue("doctorSignature", e.target.files[0])}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date Signed:</label>
          <input type="date" className="form-control" {...formik.getFieldProps("doctorSignedDate")} required />
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn-primary px-5 py-2">
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrganRequestForm;
