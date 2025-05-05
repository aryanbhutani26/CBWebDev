const JWT = require("jsonwebtoken");
require("dotenv").config();

const isLoggedIn = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization header missing or invalid" });
    }

    const token = header.split(" ")[1];
    const isVerified = JWT.verify(token, process.env.JWT_SECRET);

    if (!isVerified) {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    req.user = isVerified;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token", error: error.message });
  }
};

const isAdmin = (req, res, next) => {
  try {
    const role = req.user.role;
    if (role !== "admin") {
      return res.status(403).json({ message: "Admin access only" });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { isLoggedIn, isAdmin };
