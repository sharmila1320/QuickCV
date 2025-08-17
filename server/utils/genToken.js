const jwt = require("jsonwebtoken");

function genToken(res, id) {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development", // ✅ fixed spelling
        sameSite: process.env.NODE_ENV !== "development" ? "None" : "Lax", // ✅ local dev fix
        maxAge: 30 * 24 * 60 * 60 * 1000,
    });
}

module.exports = genToken;
