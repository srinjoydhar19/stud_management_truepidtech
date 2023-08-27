import express from 'express';
//import path from 'path';
//import session from 'express-session';
//import passport from 'passport';
//import mongoose from 'mongoose';
//import bcrypt from 'bcrypt';
//import AdminModel from './models/adminmodel.js';

//import './config/db.js';
import './config/passportconfig.js';

import adminRoutes from './routes/adminroutes.js';
import authRoutes from './routes/authroutes.js';

const app = express();

// Load environment variables from a .env file if needed
// import 'dotenv/config.js';

app.set('views', path.join(process.cwd(), 'app/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(process.cwd(), 'public')));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));
//session and passport
app.use(passport.initialize());
app.use(passport.session());
//routes
app.use('/', indexRoutes);
app.use('/admin', adminRoutes);
app.use('/', authRoutes);
app.use('/', studentRoutes);//student route
app.use('/', teacherRoutes);
// Create a predefined admin user (this should be more secure in a real scenario)
import User from './models/user.js';
//add admin routes
app.use('/admin',adminRoutes);    
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
