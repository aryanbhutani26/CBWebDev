const Users = require("../models/user.schema");

const getUser = async (req, res) => {
try {
    const id=req.user.id;
    const user = await Users.findById(id);
    res.status(200).json({message : "User Found" , user})

} catch (error) {
    res.status(400).json({message : error.message})
    console.log(error)
}
}
const updateUser = async (req, res) => {
    try {
    const id=req.user.id;
    const user = await Users.findByIdAndUpdate(id, req.body)
    res.status(200).json({message : "User Updated" , user})
    console.log(user)
    } catch (error) {
        res.status(400).json({message : error.message})
        console.log(error)
    }
}

module.exports = {
    getUser,
    updateUser
}