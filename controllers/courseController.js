import CourseModel from "../model/Course.js";
 

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


static addContent=async(req,res)=>{

}


 }

 export default CourseController


