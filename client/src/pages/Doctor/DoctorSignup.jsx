import React, { useState } from "react";
import "../css/doctorsignup.css";

const DoctorSignup = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        registrationId: "",
        specialization: "",
        experience: "",
        hospitalPeriod: "",
        workField: "",
        signature: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Doctor Signup Data:", formData);
    };

    return (

        <>
            
                <div className="doctor-signup-container">
                    <h2>Doctor Signup</h2>
                    <form className="doctor-form mx-auto" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
                        <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
                        <select name="gender" onChange={handleChange} required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <input type="text" name="registrationId" placeholder="Doctor Registration ID" onChange={handleChange} required />
                        <input type="text" name="specialization" placeholder="Specialization" onChange={handleChange} required />
                        <input type="number" name="experience" placeholder="Years of Experience" onChange={handleChange} required />
                        <textarea name="hospitalPeriod" placeholder="Hospital Name & Period & worked specialization" onChange={handleChange} required></textarea>
                        <input type="text" name="workField" placeholder="Field of Work" onChange={handleChange} required />
                        <label>Upload Digital Signature:</label>
                        <input type="file" name="signature" accept="image/*" onChange={handleChange} required />
                        <button type="submit">Signup</button>
                    </form>
                </div>
            
        </>
    );
};

export default DoctorSignup;
