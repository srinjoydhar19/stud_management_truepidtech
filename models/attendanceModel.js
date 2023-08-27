// models/attendanceModel.js
const attendance = [];

function markStudentPresent(studentName) {
  attendance.push({ name: studentName, status: 'Present' });
}

function markStudentAbsent(studentName) {
  attendance.push({ name: studentName, status: 'Absent' });
}

export default {
  markStudentPresent,
  markStudentAbsent
};
