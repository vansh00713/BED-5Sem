const express=require("express")

const router=express.Router()   

router.post("/",(req,res)=>{
    let email=req.body.email
    let password=req.body.password
})