import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: "Please provide all required fields",
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: "Email already registered",
      });
    }
    const hashedPassword = await hashPassword(password);

    const userData = { name, email, password: hashedPassword, phone };
    const user = await User.create(userData);
    res.status(StatusCodes.CREATED).json({ msg: "User created", user });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    console.log(error);
    
  }
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const validUser =
    user && (await comparePassword(req.body.password, user.password));

  if (!validUser) throw new UnauthenticatedError("invalid credentials");
  const token = createJWT({ userId: user._id, role: user.role });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    // secure: process.env.NODE_ENV === "production",
  });

  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};

export const logout = async (req, res) => {
  try {
    res
      .clearCookie("token", {
        httpOnly: true,
        sameSite: "Strict",
      })
      .status(StatusCodes.OK)
      .json({ msg: "Logout Sucessfull" });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went Wrong" });
  }
};
