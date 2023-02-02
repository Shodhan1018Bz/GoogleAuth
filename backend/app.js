const express= require('express');
const cors = require('cors');
const mongoose=require("mongoose");
const cookie=require("cookie-parser");




const router=require("./router/user-router");

const app= express();



const User=require("./model/user");
const cookieParser = require('cookie-parser');

app.use(express.json())
app.use(cors());
app.use("/",router);
app.use(cookieParser());


mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://admin:Zls0dhhHB8Y7IjAL@cluster0.yb19ex4.mongodb.net/?retryWrites=true&w=majority").then(()=> {
    
console.log("Database is connected...");
app.listen(3000,()=>console.log("Server is created..."))

    
}).catch((err)=>console.error(err))
