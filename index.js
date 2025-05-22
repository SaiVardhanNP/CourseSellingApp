require('dotenv').config();


const express=require("express")
const jwt=require("jsonwebtoken")
const mongoose=require("mongoose")
const {courseRouter}=require("./Routes/course.js")
const {userRouter}=require("./Routes/user.js")
const {adminRouter}=require("./Routes/admin.js")


const app=express();


app.use(express.json());

const PORT=process.env.PORT || 3000;
const MONGODB_URL=process.env.MONGODB_URL;


app.use("/user",userRouter);
app.use("/courses",courseRouter);
app.use("/admin",adminRouter)

async function run(){
await mongoose.connect(MONGODB_URL)
app.listen(PORT,()=>{
    console.log("listening on port 3000");
});
}

run();