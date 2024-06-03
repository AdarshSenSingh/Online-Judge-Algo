import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import './components/Signup.jsx'
import Compiler from "./components/compiler.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/login.jsx"
import Home from "./components/home.jsx"

function App(){
    return(
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/compiler" element={<Compiler />}></Route>
       </Routes>
       </BrowserRouter>
    )
};
export default App;