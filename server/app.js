import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import userRouter from "./routes/userRouter.js";
import organRequestRouter from "./routes/organRequestRouter.js";
import organDonationRouter from "./routes/organDonationRouter.js";
import hospitalRouter from "./routes/hospitalRouter.js";
import authRouter from "./routes/authRouter.js";
import adminRouter from "./routes/adminRouter.js";

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/organ-requests", organRequestRouter);
app.use("/api/v1/organ-donations", organDonationRouter);
app.use("/api/v1/hospitals", hospitalRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/admin", adminRouter);

const port = process.env.PORT || 7777;
const db = process.env.MONGO_URI;

try {
  await mongoose.connect(db);
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
