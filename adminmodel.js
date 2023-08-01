import mongoose from "mongoose";
import bcrypt from "bcrypt";
 const adminSchema=mongoose.Schema(
    {
       name:{
         type:String,
         required:true,
        },
        email:{
            type:String,
            required:true,
        },
        image:{
            type:String,
            required:true,
        },
        isAdmin:{
            type:boolean,
            required:true,
            default:false,
        }


 }
 )