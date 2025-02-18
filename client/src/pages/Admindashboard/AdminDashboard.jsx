import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaUser, FaHeartbeat, FaChartBar, FaCog } from "react-icons/fa";
import "./css/admindashboard.css";
import { Link, Outlet } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <motion.div
      className={`sidebar-admin ${isOpen ? "open" : "closed"}`}
      initial={{ width: isOpen ? 250 : 60 }}
      animate={{ width: isOpen ? 250 : 60 }}
      transition={{ duration: 0.3 }}
    >
      {/* Sidebar Toggle Button */}
      <div className="sidebar-admin-header">
        <FaBars className="menu-icon" onClick={toggleSidebar} />
      </div>

      {/* Navigation Links */}
      <ul className="admin-nav nav-links mt-5 ms-lg-5">
        <li>
          <Link to="/admindashboard/donors-table">
            <FaUser /> <span className={isOpen ? "show" : "hide"}>Donors</span>
          </Link>
        </li>
        <li>
          <Link to="/admindashboard/doctorstable">
            <FaHeartbeat /> <span className={isOpen ? "show" : "hide"}>Doctors</span>
          </Link>
        </li>
        <li>
          <Link to="/admindashboard/account-request">
            <FaChartBar /> <span className={isOpen ? "show" : "hide"}>Account requests</span>
          </Link>
        </li>
        <li>
          <Link to="/admindashboard/user-accounts">
            <FaCog /> <span className={isOpen ? "show" : "hide"}>User Accounts</span>
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="admindashboard-container">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <h2>Admin Dashboard</h2>
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
