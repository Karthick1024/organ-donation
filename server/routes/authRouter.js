import { Router } from "express";
import { register, login, logout } from "../contollers/authController.js";
import { getCurrentUser } from "../contollers/userController.js";
import { adminLogin } from "../contollers/adminController.js";
import { doctorLogin, registerDoctor } from "../contollers/doctorController.js";

const router = Router();

router.post("/register", register);
router.post("/doctor/register", registerDoctor);
router.post("/login", login);
router.post("/admin/login", adminLogin);
router.post("/doctor/login", doctorLogin);
router.get("/get-current-user", getCurrentUser);
router.post("/logout", logout);

export default router;
