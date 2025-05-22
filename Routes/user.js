const {Router}=require("express");
const bcrypt=require("bcrypt");
const {z}=require("zod");
const {UserModel}=require("../db");
const {userAuth}=require("../middlewares/usermiddleware")
const jwt= require("jsonwebtoken");
const userRouter=Router();
const JWT_USER_PASSWORD=process.env.JWT_USER_PASSWORD;


    userRouter.post("/signup",async(req,res)=>{

        const schema=z.object({
            email:z.string(),
            password:z.string(),
            firstname:z.string(),
            lastname:z.string()

        })
         const requiredBody=schema.safeParse(req.body);

        if(!requiredBody.success){
            res.json({
                msg:"Invalid format"
            })
            return;
        }
        const {email,password,firstname,lastname}=req.body;

        try{
       

        const hashed= await bcrypt.hash(password,5);
        console.log(hashed);
        const response= await UserModel.create({
            email:email,
            password:hashed,
            firstname:firstname,
            lastname:lastname
        })
        }
        catch(e){
            res.json({
                msg:e.message
            })
        }

        res.json({
            msg:"Signed in successfully!"
        })


})

userRouter.post("/signin",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    const response=await UserModel.findOne({
        email:email
    })
    if(response){
        const comparePassword=bcrypt.compare(password,response.password);
        if(!comparePassword){
            res.json({
                msg:"Invalid password!"
            })
            return
        }
        const token=jwt.sign({
            id:response._id.toString()
        },JWT_USER_PASSWORD)
        res.json({
            token:token
        })

    }
    res.json({
        msg:"User not found!"
    })
    

})


userRouter.get("/purchases",userAuth,(req,res)=>{
    res.json({
        msg:"user purchase end point!"
    })
})

module.exports={
    userRouter:userRouter
}