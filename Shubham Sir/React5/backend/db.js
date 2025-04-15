
const mongoose = require("mongoose");
require("dotenv").config();
function connection(){
    console.log(process.env.MONGO_DB_URL)
    mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log('Connected!'));
}
module.exports = {connection}