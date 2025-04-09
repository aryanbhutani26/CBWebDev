require("dotenv").config();
const users = require("../users");
const JWT = require("jsonwebtoken");

const login = router.post("/login", async (requestAnimationFrame, res) => {
  try {
    const { email, password } = request.body;
    const user = {
      email,
      password,
    };
    const isuser = users.find((usr) => usr.email === email);
    
    if (!isuser) {
      res.status(404).json({ message: "User Not Found" });
    }
    const isMatched = password === isuser.password;
    if (!isMatched) {
      res.status(400).json({ message: "Invalid Credentials" });
    }
    const userpayload = {
      email,
      name: isuser.name,
    };

    const token = JWT.sign(user, process.env.JWT_SECRET, { expiresIn: "1m" });
    res.status(200).json({
      userpayload,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
});

module.exports = { login };
