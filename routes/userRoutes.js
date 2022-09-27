import express from "express"
const router=express.Router();

import UserController from "../controllers/userController.js"


//public routes
router.post('/register',UserController.userRegistration);
router.post('/login',UserController.userLogin);
router.post('/details',UserController.userDetails);

//delete user
router.delete('/deleteUser',UserController.deleteUser);

//load list
router.get('/studentlist',UserController.studentList);
router.get('/teacherlist',UserController.teacherList);

//add course in user
router.post('/addcourseinuser',UserController.addCourseInUser);



export default router;