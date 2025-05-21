const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://saivardhannp:saivardhan11@mydatabase.vzet070.mongodb.net/coursera")
console.log("CONNECTED")

const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

const User=new Schema({
    email:String,
    password:String,
    firstname:String,
    lastname:String
})

const Admin=new Schema({
    email:String,
    password:String,
    firstname:String,
    lastname:String
})

const Course=new Schema({
    title:String,
    description:String,
    price:Number,
    imageurl:String,
    createrId:ObjectId

})
const Purchase=new Schema({
    courseid:ObjectId,
    userid:ObjectId
})

const UserModel=mongoose.model("users",User);
const AdminModel=mongoose.model("admins",Admin);
const CourseModel=mongoose.model("courses",Course)
const PurchaseModel=mongoose.model("purchases",Purchase)

module.exports={
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}