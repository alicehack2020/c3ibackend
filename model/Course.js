import mongoose from "mongoose";


//defining Schema
const courseSchema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    description:{type:String,required:true,trim:true}
})

//Model
const CourseModel=mongoose.model("course",courseSchema);
export default CourseModel;