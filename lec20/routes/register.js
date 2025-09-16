const express = require("express");
const router = express.Router();
let UserModel=require("../model/user")

router.post("/",async(req,res)=>{
    console.log("running login")
    let username=req.body.username
    let password=req.body.password
    let user={
        email:email,
        password:password
    }
    let newUser= new UserModel(user)
    await newUser.save()
})