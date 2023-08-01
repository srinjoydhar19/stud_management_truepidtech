const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT5000;
const studentControls  = require("./routes/studentroutes.js");
const randomstring = require("randomstring"); 
const app = express();

//import the student route
const studentRoutes=require("./routes/registration.js")


app.use(cors());
//app.use(bodyParser.json());


app.use('/student',studentRoutes);


app.listen(port,()=>{
    console.log("app running");
})