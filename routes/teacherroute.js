import express from "express";
import bcrypt from 'bcrypt'; // Import the bcrypt library for password hashing

const session = require('express-session');
const router = express.Router();

// Route for teacher login
router.get('/teacher/login', (req, res) => {
  res.render('teacher_login');
});

router.post('/teacher/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Retrieve teacher data from the database (simulated with an array for now)
    const teacher = await teacher.findOne({ username: username });

    if (!teacher || !bcrypt.compareSync(password, teacher.password)) {
      res.redirect('/teacher/login');
    } else {
      req.session.teacher = teacher; // Store teacher object in session
      res.redirect('/teacher/dashboard');
    }
  } catch (error) {
    console.error(error);
    res.redirect('/teacher/login');
  }
});

// Authentication middleware for teacher dashboard
const requireTeacherAuth = (req, res, next) => {
  if (!req.session.teacher) {
    res.redirect('/teacher/login');
  } else {
    next();
  }
};

// Teacher dashboard route
router.get('/teacher/dashboard', requireTeacherAuth, async (req, res) => {
  try {
    const teacherId = req.session.teacher._id; // Assuming teacher has an "_id" field in your schema
    const teacher = await teacher.findById(teacherId); // Retrieve the teacher object from the database

    if (teacher) {
      res.render('teacher-dashboard', { teacher });
    } else {
      res.redirect('/teacher/login'); // Redirect to login if teacher not found
    }
  } catch (error) {
    console.error(error);
    res.redirect('/teacher/login');
  }
});
//mark present 
router.post('/mark-present',attendenceController.markPresent);
//mark absent
router.post('/student-absent',attendenceController.markAbsent);
export default router;
