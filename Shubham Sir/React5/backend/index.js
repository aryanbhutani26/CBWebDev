const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoute = require("./routes/authroute");
const { connection } = require("./db");

app.get("/", (req, res) => {	
    res.status(200).json({ message: "You have the access" });
    res.send("Hello from server");
});
app.use("/v1", authRoute);

app.listen(PORT, () => {
    connection();
    console.log("Mongo Db Connevted on port " + PORT)});

app.listen(PORT, () => console.log("Server running on port " + PORT));