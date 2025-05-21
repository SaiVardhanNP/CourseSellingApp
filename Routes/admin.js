const {Router}=require("express");
const {AdminModel}=require("../db");

const adminRouter=Router();


adminRouter.post("/signup",(req,res)=>{
    res.json({
        msg:"Admin Sign-up endpoint!"
    })
})

adminRouter.post("/signin",(req,res)=>{
    res.json({
        msg:"Admin sign-in endpoint!"
    })
})
adminRouter.post("/courses/create",(req,res)=>{
    res.json({
        msg:"create course endpoint!"
    })
})
adminRouter.delete("/courses/delete",(req,res)=>{
    res.json({
        msg:"delete course endpoint!"
    })
})
adminRouter.post("/courses/content",(req,res)=>{
    res.json({
        msg:"add content endpoint!"
    })
})

module.exports={
    adminRouter:adminRouter
}