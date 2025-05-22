const {Router}=require("express");
const {AdminModel}=require("../db");
const {z}=require("zod");
const {adminAuth}=require("../middlewares/adminmiddleware")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const JWT_ADMIN_PASSWORD=process.env.JWT_ADMIN_PASSWORD;


const adminRouter=Router();


adminRouter.post("/signup",async(req,res)=>{
    const schema=z.object({
        email:z.string(),
        password:z.string(),
        fistname:z.string(),
        lastname:z.string()
    })

    const requiredBody=schema.safeParse(req.body);
        if(!requiredBody.message){
            res.json({
                msg:"Invalid format"
            })
            return;
        }
         const {email,password,firstname,lastname}=req.body;


    try{

        

        const hashed= await bcrypt.hash(password,5);

        const response= await AdminModel.create({
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

adminRouter.post("/signin",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    const response=await AdminModel.findOne({
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
        },JWT_ADMIN_PASSWORD)
        res.json({
            token:token
        })

    }
})
adminRouter.post("/course",adminAuth,(req,res)=>{
    res.json({
        msg:"create course endpoint!"
    })
})
adminRouter.get("/course/preview",adminAuth,(req,res)=>{
    res.json({
        msg:" course endpoint!"
    })
})
adminRouter.put("/course",adminAuth,(req,res)=>{
    res.json({
        msg:"add content endpoint!"
    })
})

module.exports={
    adminRouter:adminRouter
}