const {Router}=require("express");
const {AdminModel}=require("../db");
const {CourseModel}=require("../db")
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
        firstname:z.string(),
        lastname:z.string()
    })

    const requiredBody=schema.safeParse(req.body);
    console.log(requiredBody);
        if(!requiredBody.success){
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
        const comparePassword= await bcrypt.compare(password,response.password);
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
    res.json({
        msg:"User not found!"
    })
})
adminRouter.post("/course",adminAuth,async(req,res)=>{
    const adminid=req.adminid;
    const {title,description,price,imageurl}=req.body;
    createrid=adminid;
    try{
    var scourse=await CourseModel.create({
        title:title,
        description:description,
        price:price,
        imageurl:imageurl,
        createrid:createrid
    })
    }
    catch(err){
        res.json({
            msg:err.message
        })
    }

    res.json({
        msg:"course added successfully!",
        courseid:course._id
    })



})
adminRouter.get("/course/preview",adminAuth,async(req,res)=>{
    const adminid=req.adminid;

    const courses=await CourseModel.find({
        createrid:adminid
    })

    res.json({
        courses
    })
})
adminRouter.put("/course",adminAuth,async(req,res)=>{
    const adminid=req.adminid;
   const {title,description,price,imageurl,courseid}=req.body;

   try{

   var course=await CourseModel.updateOne({
    createrid:adminid,
    _id:courseid
   },
   {
    title:title,
    description:description,
    price:price,
    imageurl:imageurl,
   }
)
}
catch(e){
    res.json({
        msg:'failed to update course!'
    })
}

res.json({
    msg:"updated course successfully!",
    courseid:course._id
})



})

module.exports={
    adminRouter:adminRouter
}