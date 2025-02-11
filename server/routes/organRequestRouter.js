import express from "express";
import {
  updateOrganRequestStatus,
  createOrganRequest,
  deleteOrganRequest,
  getUsersAllOrganRequests,
  acceptOrganRequest,
  getAllOrganRequests,
  viewMyOrganRequestStatus,
} from "../contollers/organRequestController.js";
import { validIDparams } from "../middlewares/validIDparams.js";

const router = express.Router();

router.post("/create", createOrganRequest);
router.patch("/:id", validIDparams, updateOrganRequestStatus);
router.delete("/:id", validIDparams, deleteOrganRequest);
router.get(
  "/get-user-organ-requests/:userId",
  validIDparams,
  getUsersAllOrganRequests
);
router.post("accept-organ-request", acceptOrganRequest);
router.get("/:userId/organ-requests", validIDparams, viewMyOrganRequestStatus);
router.get("/get-all-organ-requests", getAllOrganRequests);

export default router;
