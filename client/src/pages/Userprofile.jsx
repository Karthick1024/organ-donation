import React, { useState } from "react";
import { 
  FaUser, FaTint, FaVenusMars, FaPhone, FaHome, 
  FaCalendarAlt, FaEnvelope, FaClipboardList 
} from "react-icons/fa";
import "./css/userprofile.css"; // Import custom CSS for styling

const Userprofile = () => {
  // User data state
  const [user, setUser] = useState({
    name: "Karthick",
    bloodGroup: "B+",
    age: 23,
    gender: "Male",
    phone: "+91 98765 43210",
    email: "karthick@example.com",
    address: "Chennai, India",
    
    donationHistory: "2 donations completed",
    profilePic: "https://via.placeholder.com/150",
  });

  // Handle profile picture change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, profilePic: imageUrl });
    }
  };

  return (
    <div className="container mt-4">
      <div className="profile-card mx-auto shadow-lg p-4 bg-white rounded">
        <div className="row">
          {/* Profile Image Section */}
          <div className="col-md-4 text-center d-flex flex-column align-items-center">
            <img src={user.profilePic} alt="Profile" className="profile-img rounded-circle mb-3" />
            <input type="file" id="fileUpload" hidden onChange={handleImageChange} />
            <label htmlFor="fileUpload" className="btn btn-outline-primary">Change Photo</label>
          </div>

          {/* User Details Section */}
          <div className="col-md-8">
            <h2 className="text-center mb-4">{user.name}</h2>
            <ul className="list-group">
              <li className="list-group-item"><FaTint className="icon" /> <strong>Blood Group:</strong> {user.bloodGroup}</li>
              <li className="list-group-item"><FaCalendarAlt className="icon" /> <strong>Age:</strong> {user.age}</li>
              <li className="list-group-item"><FaVenusMars className="icon" /> <strong>Gender:</strong> {user.gender}</li>
              <li className="list-group-item"><FaPhone className="icon" /> <strong>Phone:</strong> {user.phone}</li>
              <li className="list-group-item"><FaEnvelope className="icon" /> <strong>Email:</strong> {user.email}</li>
              <li className="list-group-item"><FaHome className="icon" /> <strong>Address:</strong> {user.address}</li>
              <li className="list-group-item"><FaClipboardList className="icon" /> <strong>Donation History:</strong> {user.donationHistory}</li>
            </ul>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Userprofile;
