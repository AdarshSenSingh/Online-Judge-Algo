import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const dbConnections= async () =>{
  const MONGO_URL= process.env.MONGODB_URI;
  try{
     await mongoose.connect(MONGO_URL);
     console.log("User DB connection established");
  }
  catch(error){
     console.log("Error while making DB connection, ", error);
  }
};
export default dbConnections;
