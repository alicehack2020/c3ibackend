import CourseModel from "../model/Course.js";
 

 class CourseController{


//  static  LoadCourseList=async(req,res)=>{
       
// }

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

// static deleteCourse=async(req,res)=>{

// }

 }

 export default CourseController


