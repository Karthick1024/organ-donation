import express from "express";
import {
  updateUser,
  deleteUser,
} from "../contollers/userController.js";
import { validIDparams } from "../middlewares/validIDparams.js";

const router = express.Router();
router.put("/:id", validIDparams, updateUser);
router.delete("/:id", validIDparams, deleteUser);

export default router;
