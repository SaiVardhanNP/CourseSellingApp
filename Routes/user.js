const {Router}=require("express");

const userRouter=Router();

    userRouter.post("/signup",(req,res)=>{
    res.json({
        msg:"Sign up end-point!"
    })

})

userRouter.post("/signin",(req,res)=>{
    res.json({
        msg:"Sign in end point!"
    })

})


userRouter.get("/purchases",(req,res)=>{
    res.json({
        msg:"user purchase end point!"
    })
})

module.exports={
    userRouter:userRouter
}