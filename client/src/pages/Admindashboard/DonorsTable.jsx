import React, { useState } from "react";
import "./css/donorsTable.css";

const donorsData = [
  
    { id: 1, name: "Michael Johnson", gender: "Male", organ: "Lung", date: "2024-04-12", address: "Houston, USA", mobile: "321-654-0987" },
    { id: 2, name: "Emily Davis", gender: "Female", organ: "Kidney", date: "2024-05-18", address: "San Francisco, USA", mobile: "789-321-6540" },
    { id: 3, name: "Robert Wilson", gender: "Male", organ: "Heart", date: "2024-06-25", address: "Seattle, USA", mobile: "456-789-1230" },
    { id: 4, name: "Olivia Martinez", gender: "Female", organ: "Liver", date: "2024-07-08", address: "Miami, USA", mobile: "147-258-3690" },
    { id: 5, name: "David Anderson", gender: "Male", organ: "Pancreas", date: "2024-08-14", address: "Denver, USA", mobile: "963-852-7410" },
    { id: 6, name: "Sophia Thomas", gender: "Female", organ: "Lung", date: "2024-09-30", address: "Boston, USA", mobile: "852-741-3690" },
    { id: 7, name: "James White", gender: "Male", organ: "Kidney", date: "2024-10-21", address: "Phoenix, USA", mobile: "951-753-8420" },
    { id: 8, name: "Isabella Harris", gender: "Female", organ: "Heart", date: "2024-11-19", address: "Las Vegas, USA", mobile: "753-951-4268" },
    { id: 9, name: "William Clark", gender: "Male", organ: "Liver", date: "2024-12-02", address: "Austin, USA", mobile: "369-147-8520" },
    { id: 10, name: "Charlotte Lewis", gender: "Female", organ: "Pancreas", date: "2025-01-05", address: "San Diego, USA", mobile: "284-639-1750" },
    { id: 11, name: "Daniel Hall", gender: "Male", organ: "Lung", date: "2025-02-14", address: "Chicago, USA", mobile: "472-638-9510" },
    { id: 12, name: "Amelia Scott", gender: "Female", organ: "Kidney", date: "2025-03-29", address: "New York, USA", mobile: "735-892-1456" },
    { id: 13, name: "Benjamin Adams", gender: "Male", organ: "Heart", date: "2025-04-11", address: "Dallas, USA", mobile: "632-758-4219" },
    { id: 14, name: "Mia Rodriguez", gender: "Female", organ: "Liver", date: "2025-05-24", address: "Orlando, USA", mobile: "984-215-7843" },
    { id: 15, name: "Matthew King", gender: "Male", organ: "Pancreas", date: "2025-06-18", address: "Philadelphia, USA", mobile: "521-369-8427" },
    { id: 16, name: "Harper Walker", gender: "Female", organ: "Lung", date: "2025-07-02", address: "Charlotte, USA", mobile: "632-147-2589" },
    { id: 17, name: "Christopher Young", gender: "Male", organ: "Kidney", date: "2025-08-27", address: "San Antonio, USA", mobile: "789-423-1452" },
    { id: 18, name: "Evelyn Turner", gender: "Female", organ: "Heart", date: "2025-09-15", address: "Portland, USA", mobile: "256-789-6354" },
    { id: 19, name: "Alexander Carter", gender: "Male", organ: "Liver", date: "2025-10-09", address: "Indianapolis, USA", mobile: "741-852-9630" },
    { id: 20, name: "Abigail Parker", gender: "Female", organ: "Pancreas", date: "2025-11-22", address: "Nashville, USA", mobile: "398-124-7593" },
    { id: 21, name: "Logan Mitchell", gender: "Male", organ: "Lung", date: "2025-12-05", address: "Columbus, USA", mobile: "745-963-2184" },
    { id: 22, name: "Avery Campbell", gender: "Female", organ: "Kidney", date: "2026-01-30", address: "Louisville, USA", mobile: "239-845-7632" },
    { id: 23, name: "Ethan Perez", gender: "Male", organ: "Heart", date: "2026-02-18", address: "Detroit, USA", mobile: "854-369-7412" },
    { id: 24, name: "Scarlett Evans", gender: "Female", organ: "Liver", date: "2026-03-14", address: "Baltimore, USA", mobile: "421-658-9371" },
    { id: 25, name: "Henry Morris", gender: "Male", organ: "Pancreas", date: "2026-04-07", address: "Milwaukee, USA", mobile: "789-254-6391" },
    { id: 26, name: "Ella Cooper", gender: "Female", organ: "Lung", date: "2026-05-23", address: "Jacksonville, USA", mobile: "632-987-4152" },
    { id: 27, name: "Mason Reed", gender: "Male", organ: "Kidney", date: "2026-06-19", address: "Kansas City, USA", mobile: "258-964-1273" },
    { id: 28, name: "Lily Bailey", gender: "Female", organ: "Heart", date: "2026-07-12", address: "Oklahoma City, USA", mobile: "357-149-6821" },
    { id: 29, name: "Jack Nelson", gender: "Male", organ: "Liver", date: "2026-08-05", address: "Minneapolis, USA", mobile: "741-365-9821" },
    { id: 30, name: "Grace Allen", gender: "Female", organ: "Pancreas", date: "2026-09-28", address: "Sacramento, USA", mobile: "963-258-4710" }
  ];
  



const DonorsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("name");

  const filteredDonors = donorsData.filter(donor =>
    donor[filterBy].toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="donors-table-container">
      <h2>Donors List</h2>
      <div className="search-bar">
        <select onChange={(e) => setFilterBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="organ">Organ</option>
          <option value="date">Date</option>
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
            <th>Donor Name</th>
            <th>Gender</th>
            <th>Donated Organ</th>
            <th>Donated Date</th>
            <th>Address</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredDonors.map((donor, index) => (
            <tr key={donor.id}>
              <td>{index + 1}</td>
              <td>{donor.name}</td>
              <td>{donor.gender}</td>
              <td>{donor.organ}</td>
              <td>{donor.date}</td>
              <td>{donor.address}</td>
              <td>{donor.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonorsTable;
