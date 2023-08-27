import express from 'express';
import passport from 'passport';
import bcrypt from 'bcrypt';
import User from '../models/user.js';
import passportConfig from "../config/passportconfig.js";
import adminController from '../controller/admincontroller.js';
const router = express.Router();

const predefinedAdminUsername='admin';
const predefinedAdminPasssword='adminpassword';

router.get('/login',(req,res)=>{
res.render('adminlogin');
});

router.post('/login',passport.Authenticator('local',{
    successRedirect:'/admin/dashboad',
    failureRedirect:'/admin/login',
    failureFlash:'true',
}));

router.get('/dashboard',isAdmin,(req,res)=>{
    res.render('adminDashboard',{user:req.user});
});
 
router.get('/logout',(req,res)=>{
req.logout();//by passport.js to terminate user session 
res.redirect('/admin')
})
//assign students to class
router.post('/:className/assign',adminController,assignStudentToClass);





export default router;


