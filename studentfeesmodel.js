const mongoose=require ("mongoose")
const studentfeesschema=mongoose.Schema(
    {
       accountant:{
        type:String,
        required:true,
       },
       student_name:{
        type:String,
        required:true,
       },
       student_roll:{
        type:String,
        required:true,
        unique:true,
       },
       lab_fees:{
        type:Number,
       },
       terminal_fees:{
        type:Number,
       },
       computerlab_fees:{
       type:Number,
       },
       exam_fees:{
        type:Number,
       },
       miscellaneous:{
       type:Number,
       },
    },
  {
    timestamps:true,
  }
)

const studentfees=mongoose.model("studentfees",studentfeesschema)
export default studentfees




