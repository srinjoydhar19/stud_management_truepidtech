//admin handle logic of assigning student to classes
import classModel from "../models/attendanceModel";
import studentmodel from"../models/studentmodel";

function assignStudentToClass(req,res){
    const className=req.params.className;
    const studentName=req.body.studentName;

    if (!classModel.getClass(className) || !studentName) {
        res.status(400).json({ message: 'Invalid input.' });
        return;
      }
    
      classModel.addStudentToClass(className, studentName);
      res.json({ message: `${studentName} assigned to ${className}.` });
    }
    
    module.exports = {
      assignStudentToClass
    };
//logic of assign teaachers to subjects
