import { useState } from "react";
import '../css/organrequest.css'


const OrganRequest = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    patientAge: "",
    organType: "",
    urgency: "Normal",
    reason: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Organ Request Submitted:", formData);
    alert("Organ request submitted successfully!");
    setFormData({  patientName: "",
      patientAge: "",
      organType: "",
      urgency: "Normal",
      reason: "",});
    // Here you can integrate API call to save request in the database
  };

  return (
    <div className="container  organ-request-doctor  bg-dark">
      <h2 className="mb-4 text-white">Organ Request Form</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        {/* Patient Name */}
        <div className="mb-3">
          <label className="form-label">Patient Name</label>
          <input
            type="text"
            className="form-control"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Patient Age */}
        <div className="mb-3">
          <label className="form-label">Patient Age</label>
          <input
            type="number"
            className="form-control"
            name="patientAge"
            value={formData.patientAge}
            onChange={handleChange}
            required
          />
        </div>

        {/* Organ Type */}
        <div className="mb-3">
          <label className="form-label">Select Organ</label>
          <select
            className="form-control"
            name="organType"
            value={formData.organType}
            onChange={handleChange}
            required
          >
            <option value="">Select an organ</option>
            <option value="Heart">Heart</option>
            <option value="Kidney">Kidney</option>
            <option value="Liver">Liver</option>
            <option value="Lungs">Lungs</option>
            <option value="Pancreas">Pancreas</option>
          </select>
        </div>

        {/* Urgency Level */}
        <div className="mb-3">
          <label className="form-label">Urgency Level</label>
          <select
            className="form-control"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
          >
            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
            <option value="Critical">Critical</option>
          </select>
        </div>

        {/* Reason for Request */}
        <div className="mb-3">
          <label className="form-label">Reason for Organ Request</label>
          <textarea
            className="form-control"
            rows="3"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default OrganRequest;
