const UserModel = require("../models/UserModel");
const genToken = require("../utils/genToken");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
    try {
        console.log("📩 Signup request received:", req.body); // 👈 Log incoming request

        const { name, email, password } = req.body;
        let user = await UserModel.findOne({ email });
        if (user) {
            console.log("⚠️ User already exists:", email); // 👈 Log duplicate
            return res.status(409).json({ message: "User already exists!", success: false });
        }

        const newUser = new UserModel({ name, email, password });
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();

        console.log("✅ User saved:", newUser.email); // 👈 Log success

        genToken(res, newUser._id);
        res.status(201).json({
            message: "User registered successfully!",
            success: true,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.error("❌ Signup error:", error); // 👈 Log server error
        res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

const login = async (req, res) => {
    try {
        console.log("📩 Login request received:", req.body); // 👈 Log incoming request

        const { email, password } = req.body;
        let user = await UserModel.findOne({ email });
        if (!user) {
            console.log("⚠️ User not found:", email); // 👈 Log missing user
            return res.status(403).json({ message: "User does not exist", success: false });
        }

        let isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            console.log("⚠️ Invalid password for:", email); // 👈 Log invalid password
            return res.status(403).json({ message: "Invalid email or password", success: false });
        }

        console.log("✅ User logged in:", email); // 👈 Log success
        genToken(res, user._id);
        res.status(201).json({
            message: "User logged in successfully!",
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("❌ Login error:", error); // 👈 Log server error
        res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

const logout = async (req, res) => {
    if (req.cookies.jwt) {
        res.clearCookie("jwt", {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: process.env.NODE_ENV !== "development" ? "None" : "Lax",
        });
        console.log("👋 User logged out"); // 👈 Log logout
        return res.status(200).json({ status: true, message: "User logged out successfully!" });
    }
    res.status(200).json({ status: true, message: "No session found, but logged out anyway." });
};

module.exports = { signup, login, logout };
