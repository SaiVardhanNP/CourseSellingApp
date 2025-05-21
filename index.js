const express=require("express")
const jwt=require("jsonwebtoken")
const {courseRouter}=require("./Routes/course.js")
const {userRouter}=require("./Routes/user.js")
const {adminRouter}=require("./Routes/admin.js")
const app=express();

app.use("/user",userRouter);
app.use("/courses",courseRouter);
app.use("/admin",adminRouter)



app.listen(3000);