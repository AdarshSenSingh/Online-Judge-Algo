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
  }
});

// Virtual field for `conf_password`
userSchema.virtual('conf_password').get(function() {
  return this._conf_password;
}).set(function(value) {
  this._conf_password = value;
});

const User = mongoose.model('User', userSchema);
export default User;
