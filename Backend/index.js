import express from 'express';
const app = express();
// get is type of request (sending)
app.get("/",(req,res) => {
    res.send("Hello World");
});
// send the data;
app.post("/register",(req,res) => {
    // get the data from the user(frontend)
    const {user_name,email,passward,conf_passward}=req.body;
    // check that all the data must be in correct fromat and valid
    if(!(user_name && email && passward && conf_passward)){
        return res.status(400).send("Please enter all the details!");
    }
    //check if the user already exits
    
    // hashing / encrypt the passward
    // save the user in DB
    // generate a token for it and send it to the user
    

});
app.listen(5000,() => {
console.log("Server is listening on port 5000!");
});
// to run this file 
// node index.js on terminal;