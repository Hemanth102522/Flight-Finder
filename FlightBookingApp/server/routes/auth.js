import express from "express";
import bcrypt from "bcrypt";
import { User } from "../schemas.js";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {

const { username,email,password,usertype } = req.body;

const hashedPassword = await bcrypt.hash(password,10);

const newUser = new User({
username,
email,
password:hashedPassword,
usertype
});

await newUser.save();

res.json({message:"User registered successfully"});
});

// LOGIN
router.post("/login", async (req,res)=>{

const {email,password} = req.body;

const user = await User.findOne({email});

if(!user){
return res.json({message:"User not found"});
}

const validPassword = await bcrypt.compare(password,user.password);

if(!validPassword){
return res.json({message:"Invalid password"});
}

res.json(user);

});

export default router;