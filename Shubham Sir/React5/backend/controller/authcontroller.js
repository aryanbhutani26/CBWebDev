require("dotenv").config();
const users = require("../users");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt"); 
const Users = require("../models/user.schema");
const router = require("express").Router();

// const login = router.post("/login", async (requestAnimationFrame, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = {
//       email,
//       password,
//     };
//     const isuser = await users.find((usr) => usr.email === email);
    
//     if (!isuser) {
//       res.status(404).json({ message: "User Not Found" });
//     }
//     const isMatched = password === isuser.password;
//     if (!isMatched) {
//       res.status(400).json({ message: "Invalid Credentials" });
//     }
//     const userpayload = {
//       email,
//       name: isuser.name,
//     };

//     const token = JWT.sign(user, process.env.JWT_SECRET, { expiresIn: "7d" });
//     res.status(200).json({
//       userpayload,
//     });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//     console.log(error);
//   }
// });


const login = async(req,res)=>{
  try{
    const {email , password} = req.body;
    const user = await Users.findOne({email});
    if(!user){
      return res.status(404).json({message : "User Not Found"})
    }
    const isMatched = await bcrypt.compare(password , user.password);
    if(!isMatched){
      return res.status(400).json({message : "Invalid Credentials"})
    }
    const token = JWT.sign({name:user.name , email:user.email , role:user.role , id:user._id}, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.status(200).json({message : "User LoggedIn Successfully" , user , token} )
  }catch(error){
    res.status(400).json({message : error.message})
    console.log(error)
  }
}
const signup = async(req,res)=>{
  try{
    const {name , email , password , role} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Users.create({name , email  , password : hashedPassword , role}) 

    const token = JWT.sign({name:user.name , email:user.email , role:user.role , id:user._id}, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.status(200).json({message : "User Created Successfully" , user , token} )
}
  catch(error){
    res.status(400).json({message : error.message})
    console.log(error)
  } 
}
module.exports = { login  , signup};
