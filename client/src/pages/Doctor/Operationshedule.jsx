import React, { useState } from "react";
import { motion } from "framer-motion";
import '../css/operationschedule.css'

const Operationshedule = () => {
  const [schedule, setSchedule] = useState([
    { date: "2025-02-20", time: "10:00 AM", patient: "John Doe", procedure: "Knee Surgery" },
    { date: "2025-02-21", time: "1:00 PM", patient: "Jane Smith", procedure: "Heart Bypass" },
  ]);

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    patient: "",
    procedure: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSchedule([...schedule, formData]);
    setFormData({ date: "", time: "", patient: "", procedure: "" });
  };

  return (
    <div className="container  operationschedule">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4"
      >
        Doctor's Operation Schedule
      </motion.h2>
      
      <motion.table
        className="table table-bordered table-hover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <thead className="table-dark">
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Patient</th>
            <th>Procedure</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.patient}</td>
              <td>{item.procedure}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
      
      <motion.form 
        onSubmit={handleSubmit}
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="row">
          <div className="col-md-3">
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control" required />
          </div>
          <div className="col-md-2">
            <input type="time" name="time" value={formData.time} onChange={handleChange} className="form-control" required />
          </div>
          <div className="col-md-3">
            <input type="text" name="patient" value={formData.patient} onChange={handleChange} className="form-control" placeholder="Patient Name" required />
          </div>
          <div className="col-md-3">
            <input type="text" name="procedure" value={formData.procedure} onChange={handleChange} className="form-control" placeholder="Procedure" required />
          </div>
          <div className="col-md-1">
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </div>
      </motion.form>
    </div>
  );
};

export default Operationshedule;
