import dbConnections from './Database/db.js';
import express from 'express';
import dotenv from 'dotenv';
import User from './modals/user.js';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
dotenv.config(); // Load environment variables early
const app = express();
dbConnections();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// get is type of request (sending)
app.get("/", (req, res) => {
    res.send("Hello World");
});
// send the data;

app.post("/register", async (req, res) => {
    try {
        // get the data from the user(frontend)
        const { user_name, email, password, conf_password } = req.body;
        // check that all the data must be in correct fromat and valid
        if (!(user_name && email && password && conf_password)) {
            return res.status(400).send("Please enter all the details!");
        }
        // more validation
        if (password.length < 8) {
            return res.status(400).send({ error: 'Password must contain at least 8 characters' });
        }
        // check id password and conf_password is correct or not
        if (password !== conf_password) {
            return res.status(400).send("Password do not match");
        }
        //check if the user already exits
        const userExit = await User.findOne({ email });
        if (userExit) {
            return res.status(400).send("User Already Exits");
        }

        // hashing / encrypt the password
        const hashedpassword = await bcrypt.hash(password, 10);
        // save the user in DB
        const user = await User.create({
            user_name,
            email,
            password: hashedpassword,
        });
        // generate a token for it and send it to the user
        const token = jwt.sign({ id: user._id, email }, process.env.SECRET_KEY, {
            expiresIn: '6hr'
        });
        user.token = token;
        user.password = undefined;
        res.status(200).json({ message: `You have sucessfully registered!`, user });
    }



    catch (error) {
        console.log(error);
    }
});





// login portion starts

app.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Ensure both email and password are provided
      if (!(email && password)) {
        return res.status(400).send("Please enter both email and password");
      }
  
      // Check for the existence of the user
      const user = await User.findOne({ email }); // Added 'await' here
      if (!user) {
        return res.status(404).send("This email doesn't exist");
      }
  
      // Check whether the password is correct
      const enteredPassword = await bcrypt.compare(password, user.password);
      if (!enteredPassword) {
        return res.status(400).send("Incorrect password");
      }
  
      // Generate a token and send it to the user
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: '6hr'
      });
      user.token = token;
      user.password = undefined;
  
      // Define options for the cookie
      const options = {
        expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day
        httpOnly: true // Only accessible by the server
      };
  
      // Send the token as a cookie and JSON response
      res.status(200).cookie("token", token, options).json({
        message: "You have successfully logged in",
        success: true,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  });
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}!`);
});
// to run this file
// node index.js on terminal;
