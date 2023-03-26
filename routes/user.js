import express from "express";
import {
  getMyDetail,
  login,
  logout,
  register,
} from "../controllers/user.js";
// import { User } from "../models/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// router.get("/all", getAllUsers);

router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthenticated , getMyDetail);

export default router;
