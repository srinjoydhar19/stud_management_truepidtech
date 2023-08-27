import attendanceModel from '../models/attendanceModel';

function markPresent(req,res){
    const studentName=req.body.name;//extract name from the body
    attendanceModel.markStudentPresent(studentName);
    res.json({message:`${studentName} is marked as present`});
}

function markAbsent(req,res){
    const studentName=req.body.name;
    attendanceModel.markStudentAbsent(studentName);
    res.json({message:`${studentName} is marked absent`});
}

module.exports={
markPresent,
markAbsent,
}