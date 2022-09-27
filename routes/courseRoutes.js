import express from "express"
const router=express.Router();

import CourseController from "../controllers/courseController.js"
//public routes
router.post('/add',CourseController.addCourse);
router.get('/list',CourseController.LoadCourseList);


router.post('/addvideo',CourseController.addVideo);
router.post('/videolist',CourseController.videoList);
  

export default router;