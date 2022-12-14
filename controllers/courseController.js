 import VideoModel from "../model/Video.js";
 import CourseModel from "../model/Course.js"
 

class CourseController{

 static  LoadCourseList=async(req,res)=>{
   const data=await CourseModel.find() 
   res.send({"status":"success","data":data})
}

static addCourse=async(req,res)=>{

  const {name,description}=req.body;
  if(name&&description)
  {
    try {
         const doc=new CourseModel({
          name:name,
          description:description
           })

        await doc.save()
        res.send({"status":"success","message":"course added successfully"})
       } 
       catch (error) {

        res.send({"status":"failed","message":"something went wrong"})
       }

  }
  else{
    res.send({"status":"failed","message":"all field are required"})

  }
}


static addVideo=async(req,res)=>{

  const {course_id,title,info,image_url,video_url,pdf_url,text_url,doc_url}=req.body;
  if(title&&info)
  {
    try {
         const doc=new VideoModel({
          course_id:course_id,
          title:title,
          info:info,
          image_url:image_url,
          video_url:video_url,
          pdf_url:pdf_url,
          text_url:text_url,
          doc_url:doc_url
        })

        await doc.save()
        res.send({"status":"success","message":"video added successfully"})
       } 
       catch (error) {
        res.send({"status":"failed","message":"something went wrong","error":error})
       }

  }
  else{
    res.send({"status":"failed","message":"all field are required"})

  }
}


static videoList=async(req,res)=>{
  const {course_id}=req.body;
  const data=await VideoModel.find({course_id:course_id})
  res.send({"message":"success","data":data})
}

static deleteCourse=async(req,res)=>{
  const {course_Id}=req.body;
  const data=await CourseModel.deleteOne({_id:course_Id})
  if(data)
  {
    res.send({"status":"success","message":"deleted successfully","data":data})
  }
  else{
    res.send({"staus":"failed","message":"Not able to delete"})
  }

}
 


 }

 export default CourseController


