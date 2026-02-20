import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};


// ================= LOGIN =================
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "User not found" });

    // role check (important for your UI buttons)
    if (user.role !== role) {
      return res
        .status(403)
        .json({ message: `This account is not a ${role}` });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user._id, user.role);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.json({
      _id: user._id,
      name: user.name,
      role: user.role,
      email: user.email,
      token,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ================= REGISTER =================
export const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      phone,
      district,
      state,
      city,
    } = req.body;

    const exists = await User.findOne({ email });
    if (exists)
      return res.status(400).json({ message: "User already exists" });

    // 🔴 worker must have district
    if (role === "worker" && !district) {
      return res
        .status(400)
        .json({ message: "District required for worker" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashed,
      role,
      phone,
      location: {
        district,
        state,
        city,
      },
    });

    res.status(201).json({
      message: "User created",
      id: user._id,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ================= LOGOUT =================
export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};


// ================= GET CURRENT USER =================
export const getMe = async (req, res) => {
  res.json(req.user);
};