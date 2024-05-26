const mongoose =require('mongoose');
const userSchema= new mongoose.Schema({
 user_name:{
    type: String,
    default: null,
    require: true,
 },
 email:{
    type: String,
    default: null,
    require: true,
    unique: true,
 },
 passward:{
    type: String,
    require: true,
 },
 conf_passward:{
    type: String,
    require: true,
 },
});
module.exports= mongoose.model("user", userSchema);