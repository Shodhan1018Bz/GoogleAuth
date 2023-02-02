const express=require("express");
const User=require("../model/user")
const SECRET_KEY="MyKey";
const jwt=require("jsonwebtoken")
async function verifyToken(req,res){
    const token=req.headers.token;
    jwt.verify(String(token),SECRET_KEY,async (err,data)=>{
        if(err){
            res.status(404).json({message:"Invalid Token"});
        }
        else{
             User.find({},(err,data)=>{
                if(err){
                    return res.status(404).json({message:"Error in fetcing Data base"})
                }
                else{
                    return res.status(201).json(data);
                }
            });
            // console.log(users);
        }
    })
    console.log(token)
    // res.json({meassage:"skjdbckh"});
}
module.exports={verifyToken};