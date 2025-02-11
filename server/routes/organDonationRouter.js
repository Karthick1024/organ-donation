import express from "express";
import {
  getAllOrganDonations,
  updateDonationRequest,
  deleteDonationRequest,
  assignDoctorToOrganCollection,
  getMyDonation,
  createDonation,
} from "../contollers/organDonationController.js";
import { validIDparams } from "../middlewares/validIDparams.js";

const router = express.Router();
router.post("create-donation", createDonation);
router.get("/get-all-organ-donations", getAllOrganDonations);
router.patch("/:donationId", validIDparams, updateDonationRequest);
router.delete("/:donationId", validIDparams, deleteDonationRequest);
router.get("/:userId/donations", validIDparams, getMyDonation);
router.post("/assign-doctor", assignDoctorToOrganCollection);

export default router;
