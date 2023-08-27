const express=require("express");
const router = express.Router();
const passport =require('passport')//authentication middleeware for nodejs
const Admin=require('../models/adminmodel')

router.get('/',(req,res)=>{
    res.render('login page');
});

router.post('/login',passport.authenticate('local',{
successRedirect:'/admin',
failureRedirect:'/login',
failureFlash:true
}));

export default router;