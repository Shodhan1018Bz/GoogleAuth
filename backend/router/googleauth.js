const express= require('express');
const cors = require('cors');
const User=require("../model/user")
const SECRET_KEY="MyKey";
const CLIENT_ID = "497231389779-dlf46tk6chkjll1h239hr60sq71vqbcf.apps.googleusercontent.com";


const {OAuth2Client, UserRefreshClient} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);
const jwt = require('jsonwebtoken')


const { verify } = require('jsonwebtoken');

async function verifyGoogleId(credential,callback){
    const ticket= await client.verifyIdToken({
        idToken:credential,
        audience:CLIENT_ID
    });
    const payload = ticket.getPayload()
    callback(null,payload);
}

async function login(req,res){
    verifyGoogleId(req.body.credential,async (err,data)=>{
        if(err){
            return res.status(401).json({message:"Unauthorized Access"});
        }
        else{
            // console.log(data);   
            let existing;
            try{
                existing=await User.findOne({email:data.email});
            } 
            catch(err){
                return new Error(err);
            }
            if(!existing){
                const user=new User({
                    name:data.name,
                    email:data.email
                })
                existing=user;
                user.save();
                console.log(user);
            }
            const token=jwt.sign({id:existing._id},SECRET_KEY,{
                expiresIn:"500s"
            })
            // console.log(typeof(token))
            res.json({message:"User Successfully logged in",token:token});
        }
    })
    
}
module.exports={login};
