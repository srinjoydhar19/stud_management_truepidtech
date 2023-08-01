import mongoose from 'mongoose'
const teacherSalarySchema = mongoose.Schema(
  {
    admin: {
      type: String,
      required: true,
    },
    teacher_name: {
      type: String,
      required: true,
    },
    teacherId: {
      type: String,
      required: true,
      unique:true,
    },
    salaryForYear: {
      type: String,
      required: true,
    },
    salaryForMonth: {
      type: String,
      required: true,
    },
    salaryAmount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const TeacherSalary = mongoose.model('TeacherSalary', teacherSalarySchema)
export default TeacherSalary