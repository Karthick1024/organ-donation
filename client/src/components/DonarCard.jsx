import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/donarcard.css"; // Import custom styles



  const donorsList = [
    { donor: "John Doe", organ: "Kidney", patients: ["Alice Smith", "David Johnson", "Emma Brown"] },
    { donor: "Emily Johnson", organ: "Liver", patients: ["Michael Brown", "Sophia Wilson", "James Anderson"] },
    { donor: "Robert Lee", organ: "Heart", patients: ["Daniel Martinez", "Olivia Garcia", "Henry Thomas"] },
    { donor: "Sarah Miller", organ: "Lung", patients: ["Ethan Clark", "Charlotte Lewis", "Lucas Harris"] },
    { donor: "William Davis", organ: "Pancreas", patients: ["Ava Walker", "Benjamin Hall", "Mason Allen"] },
    { donor: "Sophia Wilson", organ: "Cornea", patients: ["Ella Adams", "Liam Scott", "Chloe Green"] },
    { donor: "James Brown", organ: "Liver", patients: ["Noah Wright", "Isabella King", "Logan Turner"] },
    { donor: "Olivia Martinez", organ: "Kidney", patients: ["Grace Hill", "Sebastian Moore", "Zoe Robinson"] },
    { donor: "Daniel White", organ: "Bone Marrow", patients: ["Harper Cooper", "Jack Carter", "Emily Morgan"] }
  ];
  const DonarCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentDonor, setCurrentDonor] = useState(donorsList[currentIndex]);
  
    useEffect(() => {
      AOS.init({ duration: 1000 });
  
      // Change donor details every 4 seconds
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % donorsList.length);
        setCurrentDonor(donorsList[(currentIndex + 1) % donorsList.length]);
      }, 4000);
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, [currentIndex]);
  
    return (
      <motion.div
        className="donor-card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-aos="fade-up"
      >
        <div className="card-donar shadow-lg p-4">
          <motion.h3
            className="donor-name"
            key={currentDonor.donor}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            {currentDonor.donor}
          </motion.h3>
          <motion.p
            className="organ-name"
            key={currentDonor.organ}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            <strong>Donated Organ:</strong> {currentDonor.organ}
          </motion.p>
          <motion.p
            className="patient-name"
            key={currentDonor.patients[0]}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            <strong>Recipient:</strong> {currentDonor.patients[0]}
          </motion.p>
        </div>
      </motion.div>
    );
  };
  
  export default DonarCard;
