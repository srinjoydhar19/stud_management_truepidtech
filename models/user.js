import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String // 'admin', 'teacher', 'student'
});

const User = mongoose.model('User', userSchema);

export default User;
