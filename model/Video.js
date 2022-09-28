import mongoose from "mongoose";


//defining Schema
const videoSchema=new mongoose.Schema({
    course_id:{type:String,required:true,trim:true},
    title:{type:String,required:true,trim:true},
    info:{type:String,required:true,trim:true},
    image_url:{type:String,trim:true},
    video_url:{type:String,trim:true},
    pdf_url:{type:String,trim:true},
    text_url:{type:String,trim:true},
    doc_url:{type:String,trim:true}
})

//Model
const VideoModel=mongoose.model("video",videoSchema);
export default VideoModel;