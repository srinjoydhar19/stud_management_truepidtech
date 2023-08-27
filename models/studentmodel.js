import { Schema, model } from "mongoose";
const studentSchema = Schema(
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
const student = model('Student',studentSchema) 
export default student
// export student

//module.export = mongoose.model("Student",StudentSchema);

const studentmodel=[];
function createStudent(name){
    student.push({name});
}

function getStudents(){
    return studentSchema;
}
module.exports={
    createClass,
  getClass,
};