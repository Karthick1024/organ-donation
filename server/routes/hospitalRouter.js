import express from "express";
import {
  createHospital,
  getAllHospitals,
  getHospitalById,
  updateHospital,
  deleteHospital,
} from "../contollers/hospitalController.js";
import { authenticateUser, isAdmin } from "../middlewares/authMiddleware.js";
import { validIDparams } from "../middlewares/validIDparams.js";

const router = express.Router();

router.post("/", authenticateUser, isAdmin, createHospital);
router.get("/", authenticateUser, isAdmin, getAllHospitals);
router.get("/:id", authenticateUser, isAdmin, validIDparams, getHospitalById);
router.patch("/:id", authenticateUser, isAdmin, validIDparams, updateHospital);
router.delete("/:id", authenticateUser, isAdmin, validIDparams, deleteHospital);

export default router;
