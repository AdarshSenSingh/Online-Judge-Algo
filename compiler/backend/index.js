const generateFile = require('./generateFile')
const express= require('express');
const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send("Hello world");
});
app.post("/run",(req,res)=>{
    const {language="cpp",code}= req.body;
    if(code===undefined){
        return res.status(500).json({sucess:false,error:"The code is empty"});
    }
    res.json({language,code});


try {
    const filepath = generateFile(language, code );
    
} catch (error) {
    res.status(500).json({sucess:false, error: error.message});
}

});
app.listen(8000,()=>{
    console.log("server is listening on port 8000");
});