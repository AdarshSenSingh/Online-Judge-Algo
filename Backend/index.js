import express from 'express';
const app = express();
// get is type of request (sending)
app.get("/",(req,res) => {
    res.send("Hello World");
});
app.get("/anything",(req,res) => {
    res.send("Not get anything Hello World");
});
app.listen(5000,() => {
console.log("Server is listening on port 5000!");
});