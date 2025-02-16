import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./css/dashboard.css";
import { BiDonateBlood } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHistory, FaUser, FaPlusCircle, FaHeartbeat, FaHandsHelping } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Dashboard = () => {
  const [showLogout, setShowLogout] = useState(false);

  // const toggleLogout = () => setShowLogout((prev) => !prev);
  const handleLogout = () => {
    alert("Logged out successfully!");
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar navbar-dark bg-primary px-3 d-flex justify-content-between">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <BiDonateBlood className="me-2" size={30} /> Organ Donation
        </Link>
        <div className="position-relative">
          {/* User button to show dropdown on hover */}
          <button
            className="btn btn-light"
            onMouseEnter={() => setShowLogout(true)}
          >
            <FaUser className="me-2" /> Karthick
          </button>

          {/* Logout dropdown appears on hover */}
          {showLogout && (
            <div
              className="logout-dropdown"
              onMouseEnter={() => setShowLogout(true)}
              onMouseLeave={() => setShowLogout(false)}
            >
              <button className="btn btn-dark w-100" onClick={handleLogout}>
                <FiLogOut className="me-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      <div className="d-flex">
        <div className="sidebar p-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/dashboard/profile" className="nav-link">
                <CgProfile className="me-2" size={24} /> Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/history" className="nav-link">
                <FaHistory className="me-2" size={24} /> Donation History
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/register" className="nav-link">
                <FaPlusCircle className="me-2" size={24} />Donation register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/organrequest" className="nav-link">
                <FaHeartbeat className="me-2" size={24} /> Want an Organ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/faq" className="nav-link">
                <FaHandsHelping className="me-2" size={24} /> Any Needs
              </Link>
            </li>
          </ul>
        </div>

        <div className="vertical-line"></div>

        {/* Main Content Area */}
        <div className="main-content p-4  mt-5">
          <Outlet /> {/* Render child components here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
