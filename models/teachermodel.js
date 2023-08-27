const mongoose=require ("mongoose");
const schema =mongoose.Schema(
    {
        registered_by:{
            type:String,
            required:true,
            ref:'Admin',
        },
        teacher_name:{
            type:String,
            required:true,
        },
    teacherId: {
      type: Number,
     
    },
    qualification: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    contact_no: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    estimated_salary: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    subjectToTeach: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const teacher=mongoose.model("Teacher",teacherSchema);
// models/teacherModel.js
const teachers = [];

function createTeacher(name) {
  teachers.push({ name, assignedSubjects: [] });
}

function getTeachers() {
  return teachers;
}

module.exports = {
  createTeacher,
  getTeachers
}
    