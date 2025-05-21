const express=require("express")
const jwt=require("jsonwebtoken")

const app=express();


app.use(express.json());


app.post("/user/signup",(req,res)=>{
    res.json({
        msg:"Sign up end-point!"
    })

})

app.post("user/signin",(req,res)=>{
    res.json({
        msg:"Sign in end point!"
    })

})

app.get("/courses",(req,res)=>{
    res.json({
        msg:"courses end point!"
    })
})
app.get("/user/purchases",(req,res)=>{
    res.json({
        msg:"user purchase end point!"
    })
})

app.post("/courses/purchase",(req,res)=>{
    res.json({
        msg:"purchase a course end point!"
    })
})



app.listen(3000);