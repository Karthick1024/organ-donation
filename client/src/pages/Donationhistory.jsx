import React from "react";
import "./css/donationhistory.css"; // Importing custom CSS

const DonationHistory = () => {
  const donations = [
    { organ: "Heart", date: "2023-12-15", status: "Completed" },
    // { organ: "Kidney", date: "2024-01-10", status: "Pending" },
    // { organ: "Liver", date: "2024-02-01", status: "Completed" },
    // { organ: "Lungs", date: "2024-01-20", status: "In Progress" },
  ];

  return (
    <div className="container-history container mt-4">
      <h2 className="text-center">Donation History</h2>
      <p className="text-center text-muted mb-4">
        Here is the list of your past donations.
      </p>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Organ</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation, index) => (
              <tr key={index}>
                <td>{donation.organ}</td>
                <td>{donation.date}</td>
                <td>
                  <span
                    className={`badge ${donation.status === "Completed" ? "bg-success" : donation.status === "Pending" ? "bg-warning" : "bg-info"}`}
                  >
                    {donation.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationHistory;
