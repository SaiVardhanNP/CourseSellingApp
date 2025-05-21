const {Router}=require("express");

const courseRouter=Router();
    
    courseRouter.get("/preview",(req,res)=>{
    res.json({
        msg:"courses end point!"
    })
})

courseRouter.post("/purchase",(req,res)=>{
    res.json({
        msg:"purchase a course end point!"
    })
})

module.exports={
    courseRouter:courseRouter
}