import { Router } from "express";
import {
  addDoctor,
  deleteDoctor,
  getAllDoctors,
  getOneDoctor,
  updateDoctor,
  viewAllUsers,
} from "../contollers/adminController.js";
import { authenticateUser, isAdmin } from "../middlewares/authMiddleware.js";
import { validIDparams } from "../middlewares/validIDparams.js";

const router = Router();

router.get("/add-doctor", authenticateUser, isAdmin, addDoctor);
router.get("/get-all-users", viewAllUsers);
router.get("/getall-doctor", authenticateUser, isAdmin, getAllDoctors);
router.get(
  "/getone-doctor/:id",
  authenticateUser,
  isAdmin,
  validIDparams,
  getOneDoctor
);
router.get(
  "/delete-doctor/:id",
  authenticateUser,
  isAdmin,
  validIDparams,
  deleteDoctor
);
router.get("/update-doctor/:id", authenticateUser, validIDparams, updateDoctor);

export default router;
