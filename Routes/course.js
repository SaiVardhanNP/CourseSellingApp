const {Router}=require("express");
const {CourseModel,PurchaseModel}=require("../db");
const { userAuth } = require("../middlewares/usermiddleware");

const courseRouter=Router();
    
    courseRouter.get("/preview",async(req,res)=>{
        courses=await CourseModel.find({});
        res.json({
            courses
        })
})

courseRouter.post("/purchase",userAuth,async (req,res)=>{
    const userid=req.userid;
    const courseid=req.body.courseid;
    courses=await CourseModel.create({
        courseid,
        userid
    })
    res.json({
        msg:"you bought this course!"
    })
})

module.exports={
    courseRouter:courseRouter
}