// models/subjectModel.js
const subjects = [];

function createSubject(name) {
  subjects.push({ name, assignedTeacher: null });
}

function getSubjects() {
  return subjects;
}

function assignTeacherToSubject(subjectName, teacherName) {
  const subject = subjects.find((subj) => subj.name === subjectName);
  const teacher = teacher.find((t)=>t.name===teacherName);
  if (subject && teacher) {
    subject.teacher = teacher;
  }
}

export default {
  createSubject,
  getSubjects,
  assignTeacherToSubject
};
