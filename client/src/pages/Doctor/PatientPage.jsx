import { useState } from "react";
import '../css/patientpage.css'

const PatientPage = () => {
  // Mock patient data
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", issue: "Flu & Fever", date: "2025-02-15" },
    { id: 2, name: "Jane Smith", issue: "Migraine", date: "2025-02-10" },
    { id: 3, name: "Mark Johnson", issue: "Hypertension", date: "2025-02-12" },
    { id: 4, name: "Lisa Brown", issue: "Diabetes", date: "2025-02-08" },
  ]);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Filter patients based on search term
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container  bg-danger patient-page">
      <h2 className="mb-4">Patients Encountered</h2>

      {/* Search Bar */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by patient name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Patients Table */}
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="bg-primary text-white">
            <tr>
              <th>ID</th>
              <th>Patient Name</th>
              <th>Medical Issue</th>
              <th>Date of Consultation</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.issue}</td>
                  <td>{patient.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No patients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientPage;
