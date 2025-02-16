
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { BsScissors } from "react-icons/bs"; // Scalpel (scissors) icon



const Sidebar = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 mt-5 bg-info position-fixed" style={{ width: "250px", height: "100vh" }}>

            <ul className="nav nav-pills mt-3 flex-column mb-auto">
                
                <li className="nav-item">
                    <Link to="/doctordashboard/appointments" className="mb-3 nav-link text-white ">📅 Appointments</Link>
                </li>
                <li className="nav-item">
                    <Link to="/doctordashboard/patients" className="mb-3 nav-link text-white">🩺 Patients</Link>
                </li>
                <li className="nav-item">
                    <Link to="/doctordashboard/organrequest" className="mb-3 nav-link text-white"><span><FaHeart /></span> Organ Request</Link>
                </li>
                <li className="nav-item">
                    <Link to="/doctordashboard/operationschedule" className="mb-3 nav-link text-white"><span ><BsScissors /></span> Operation schedule</Link>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;
