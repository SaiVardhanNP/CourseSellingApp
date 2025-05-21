const express=require("express")
const jwt=require("jsonwebtoken")
const {courseRouter}=require("./course.js")
const {userRouter}=require("./user.js")

const app=express();

app.use("/user",userRouter);
app.use("/courses",courseRouter);



app.listen(3000);