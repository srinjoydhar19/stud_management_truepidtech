const mongoose = require("mongoose");
const studentSchema = mongoose.Schema(
    {
        registered_by:{
        type: String ,
        required:true,
        ref:'Admin',
        },
        student_name:{
            type: String,
            required:true,
        },
        class_name:{
            type:String,
            required:true,
        },
        roll_no:{
              type:Number,
        },
        parents_name:{
            type:String,
            required:true,
        },
        gender:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type :String,
            required:true,
        },
        otp:{
            type:String,
        },
        phone_no:{
            type:String,
            required:true,

        },
        registration_fees:{
            type:String,
            required:true,
        },
        image: {
            type:String,
            required:true,
        },
        isVerified:{
            type:boolean,
            default:false,
        }
    },
        {
        timestamps: true,
        }
)
//coverting the schema to the model
const student = mongoose.model('Student',studentSchema) 
module.exports = student
// export student

//module.export = mongoose.model("Student",StudentSchema);