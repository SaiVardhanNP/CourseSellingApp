const jwt=require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD}=require("../config");

function adminAuth(req,res,next){
    const token=req.headers.token;
    
    try{
        const decoded=jwt.verify(token,JWT_ADMIN_PASSWORD);

    if(decoded){
        req.adminId=decoded.id;
        next();
    }
    }
    catch(err){
    res.json({
        msg:err.message
    })
    }
}

module.exports={
    adminAuth
}

