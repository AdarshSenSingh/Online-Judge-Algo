const mongoose = require('mongoose');
const dotenv= require('dotenv');
dotenv.config();
const dbConnections= async () =>{
  const MONGO_URL= process.env.MONGODB_URL;
  try{
     await mongoose.connect(MONGO_URL,{useNewUrlParser:true});
     console.log("User DB connection established");
  }
  catch(error){
     console.log("Error while making DB connection, ", error);
  }
};
module.exports(dbConnections);