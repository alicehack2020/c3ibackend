import express from "express"
const router=express.Router();

import UserController from "../controllers/userController.js"


//public routes
router.post('/register',UserController.userRegistration);
router.post('/login',UserController.userLogin);


//load list
router.get('/studentlist',UserController.studentList);
router.get('/teacherlist',UserController.teacherList);


export default router;