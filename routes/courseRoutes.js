import express from "express"
const router=express.Router();

import CourseController from "../controllers/courseController.js"
//public routes
router.post('/add',CourseController.addCourse);
  

export default router;