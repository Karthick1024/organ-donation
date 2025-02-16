import '../css/appointments.css'

const Appointments = () => {
  const appointments = [
    { id: 1, patient: "John Doe", date: "2025-02-15", time: "10:00 AM", status: "Confirmed" },
    { id: 2, patient: "Jane Smith", date: "2025-02-16", time: "11:30 AM", status: "Pending" },
    { id: 3, patient: "Alice Johnson", date: "2025-02-17", time: "02:00 PM", status: "Cancelled" },
    { id: 1, patient: "John Doe", date: "2025-02-15", time: "10:00 AM", status: "Confirmed" },
    { id: 2, patient: "Jane Smith", date: "2025-02-16", time: "11:30 AM", status: "Pending" },
    { id: 3, patient: "Alice Johnson", date: "2025-02-17", time: "02:00 PM", status: "Cancelled" },
    { id: 1, patient: "John Doe", date: "2025-02-15", time: "10:00 AM", status: "Confirmed" },
    { id: 2, patient: "Jane Smith", date: "2025-02-16", time: "11:30 AM", status: "Pending" },
    { id: 3, patient: "Alice Johnson", date: "2025-02-17", time: "02:00 PM", status: "Cancelled" },
  ];

  return (
    <div className="container appointment ">
      <h2 className="mb-4 ">Appointments</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
           
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.patient}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>
                <span className={`badge ${appointment.status === "Confirmed" ? "bg-success" : appointment.status === "Pending" ? "bg-warning" : "bg-danger"}`}>
                  {appointment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
