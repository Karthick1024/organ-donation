import React, { useState } from "react";
import "./css/accountrequest.css";

const dummyRequests = [
    { id: 1, name: "Dr. John Doe", age: 40, gender: "Male", regId: "DOC12345", specialization: "Cardiology", experience: "10 years", hospitalPeriod: "XYZ Hospital (2015-2025)", workField: "Heart Surgery", contact: "9876543210", signature: "Signature.png" },
    { id: 2, name: "Dr. Jane Smith", age: 35, gender: "Female", regId: "DOC67890", specialization: "Neurology", experience: "8 years", hospitalPeriod: "ABC Hospital (2017-2025)", workField: "Brain Surgery", contact: "8765432109", signature: "Signature2.png" }
];

const AccountRequest = () => {
    const [requests, setRequests] = useState(dummyRequests);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    const handleAccept = (id) => {
        setRequests(requests.filter(request => request.id !== id));
        alert("Doctor request accepted!");
    };

    const handleDecline = (id) => {
        setRequests(requests.filter(request => request.id !== id));
        alert("Doctor request declined!");
    };

    return (
        <div className="account-request-container table-responsive-sm">
            <h2 className="account-request-title">Doctor Signup Requests</h2>
          
            <table className="account-request-table ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Specialization</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request) => (
                        <tr key={request.id} className="account-request-row">
                            <td>{request.name}</td>
                            <td>{request.specialization}</td>
                            <td>
                                <button className="view-btn bg-dark me-3" onClick={() => setSelectedDoctor(request)}>View</button>
                                <button className="accept-btn bg-success me-3" onClick={() => handleAccept(request.id)}>Accept</button>
                                <button className="decline-btn bg-danger" onClick={() => handleDecline(request.id)}>Decline</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
            {selectedDoctor && (
                <div className="doctor-details-modal">
                    <div className="doctor-details-content">
                        <h3 className="doctor-details-title">Doctor Details</h3>
                        <p><strong>Name:</strong> {selectedDoctor.name}</p>
                        <p><strong>Age:</strong> {selectedDoctor.age}</p>
                        <p><strong>Gender:</strong> {selectedDoctor.gender}</p>
                        <p><strong>Registration ID:</strong> {selectedDoctor.regId}</p>
                        <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
                        <p><strong>Experience:</strong> {selectedDoctor.experience}</p>
                        <p><strong>Hospital Period:</strong> {selectedDoctor.hospitalPeriod}</p>
                        <p><strong>Field of Work:</strong> {selectedDoctor.workField}</p>
                        <p><strong>Contact:</strong> {selectedDoctor.contact}</p>
                        <p><strong>Signature:</strong> <img className="doctor-signature" src={selectedDoctor.signature} alt="Signature" /></p>
                        <button className="close-btn" onClick={() => setSelectedDoctor(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountRequest;
