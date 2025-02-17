import React, { useState } from "react";
import "./css/doctorstable.css";

const doctorsData = [
  { id: 1, name: "Dr. John Smith", specialization: "Cardiologist", operations: 150, experience: "15 years", contact: "987-654-3210", hospital: "New York General Hospital" },
  { id: 2, name: "Dr. Emily Johnson", specialization: "Neurologist", operations: 200, experience: "18 years", contact: "789-123-4560", hospital: "Los Angeles Medical Center" },
  { id: 3, name: "Dr. Robert Brown", specialization: "Orthopedic Surgeon", operations: 120, experience: "12 years", contact: "456-789-1230", hospital: "Chicago Health Institute" },
  { id: 4, name: "Dr. Olivia Davis", specialization: "Pediatrician", operations: 80, experience: "10 years", contact: "147-258-3690", hospital: "Houston Children's Hospital" },
  { id: 5, name: "Dr. William Anderson", specialization: "Dermatologist", operations: 90, experience: "14 years", contact: "963-852-7410", hospital: "San Francisco Skin Clinic" }
];

const DoctorsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("name");

  const filteredDoctors = doctorsData.filter(doctor =>
    doctor[filterBy].toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="doctors-table-container">
      <h2>Doctors List</h2>
      <div className="search-bar">
        <select onChange={(e) => setFilterBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="specialization">Specialization</option>
          <option value="hospital">Hospital</option>
        </select>
        <input
          type="text"
          placeholder={`Search by ${filterBy}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Doctor Name</th>
            <th>Specialization</th>
            <th>Operations</th>
            <th>Experience</th>
            <th>Contact</th>
            <th>Hospital</th>
          </tr>
        </thead>
        <tbody>
          {filteredDoctors.map((doctor, index) => (
            <tr key={doctor.id}>
              <td>{index + 1}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.operations}</td>
              <td>{doctor.experience}</td>
              <td>{doctor.contact}</td>
              <td>{doctor.hospital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsTable;
