import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import doctorlogo from '../../assets/images/doctor-logo.jfif'
import '../css/doctordashboard.css'


const DoctorDashboard = () => {
  return (
    <>


      <div>
        <nav className="navbar navbar-dark bg-info p-3">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Doctor Dashboard</span>
            <img src={doctorlogo} width={30} alt="" />
            <span className="text-white">Dr. John Doe | Reg No: 123456</span>
          </div>
        </nav>
      </div>

      <div className="dashboard-content ">
        <div className="row">
        <div className="d-flex ">
          <Sidebar />

        </div>

        <div className="flex-grow-1 p-4">
          <Outlet /> {/* This will load the active route */}
        </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
