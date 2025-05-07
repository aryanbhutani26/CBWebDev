const express = require("express");
const app = express();
const PORT = 5000;

const cors = require("cors");
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const ProductRoute = require("./routes/productroute")
const authRoute = require("./routes/authroute");
const { connection } = require("./db");
const userRoute = require("./routes/userroute");
const { isLoggedIn  } = require("./middleware");
app.get("/", (req, res) => {	
    res.status(200).json({ message: "You have the access" });
    res.send("Hello from server");
});
app.use("/auth", authRoute);
app.use("/user", isLoggedIn, userRoute);
app.use("/product", ProductRoute);

app.listen(PORT, () => {
    connection();
    console.log("Mongo Db Connevted on port " + PORT)});

app.listen(PORT, () => console.log("Server running on port " + PORT));