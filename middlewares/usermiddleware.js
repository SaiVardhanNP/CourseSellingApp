const jwt=require("jsonwebtoken");
const {JWT_USER_PASSWORD}=require("../config");


function userAuth(req,res,next){
    const token=req.headers.token;
    
    try{
        const decoded=jwt.verify(token,JWT_USER_PASSWORD);

    if(decoded){
        req.userid=decoded.id;
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
    userAuth
}

