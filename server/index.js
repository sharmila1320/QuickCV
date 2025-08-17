const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
require("./models/db");

const authRouter = require("./routes/authRouter");
const resumeRouter = require("./routes/resumeRouter");

const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL, // http://localhost:5173
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/resume", resumeRouter);

// test route
app.get("/ping", (req, res) => {
    res.json({ message: "pong" });
});

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});
