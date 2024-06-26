// models/user.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  conf_password:{
    type: String,
    required: true
  }
});


const User = mongoose.model('User', userSchema);
export default User;
