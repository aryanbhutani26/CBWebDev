const JWT = require("jsonwebtoken");
require("dotenv").config();
const isLoggedIn = (req, res, next) => {
    try {
        const header = req.headers.authorization;
        const token = header.split(" ")[1];
        const isVerified = JWT.verify(token, process.env.JWT_SECRET);
        if (!isVerified) {
            return res.status(401).json({ message: "Unauthorized User" });
        }
        req.user = isVerified;
        next();

    } catch (error) {
        res.status(402).json({ message: error.message });
    }
};
module.exports = { isLoggedIn };