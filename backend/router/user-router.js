
const express=require("express");
const {login}=require("./googleauth");
const {verifyToken}=require("../controller/user-controller")
const router =express.Router();

router.post("/login",login);
router.get("/",verifyToken);
module.exports=router;