import express from "express";
import { login, register, logout } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { getMe } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/me", protect, getMe);
router.post("/login", login);
router.post("/register", register);   // optional
router.post("/logout", logout);

export default router;