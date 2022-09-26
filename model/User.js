import mongoose from "mongoose";


//defining Schema
const userSchema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true},
    password:{type:String,required:true,trim:true},
    isApprove:{type:Boolean,required:true,trim:true,default:false},
    role:{type:String,required:true,trim:true,default:"student"}
})

//Model
const UserModel=mongoose.model("user",userSchema);
export default UserModel;