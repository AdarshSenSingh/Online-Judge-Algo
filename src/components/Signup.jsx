import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import user_icon from './asserts/user.png'
import email_icon from './asserts/mail.png';
import password_icon from './asserts/hide.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup(){
  const [user_name,setName]= useState();
  const [email,setEmail]= useState();
  const [password,setPassword]= useState();
  const [conf_password,setConfpassword]=useState();

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/register',{user_name,email,password,conf_password})
    .then(result => console.log(result))
    .catch(err => console.log(err));
  };
  return (
    <div className='container'>
      {/* Header Start */}
      <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>
      {/* Header End */}

      {/* Form Start */}
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className='input'>
            <img src={user_icon} alt="user_name" className='icon' />
            <input
              type="text"
              name="user_name"
              placeholder='Name'
              onChange= {(e)=>setName(e.target.value)}
              required
            />
          </div>
          <div className='input'>
            <img src={email_icon} alt="gmail" className='icon' />
            <input
              type="email"
              name="email"
              placeholder='Email'
              onChange= {(e)=>setEmail(e.target.value)}
              required
            />
          </div>
          <div className='input'>
            <img src={password_icon} alt="password" className='icon' />
            <input
              type="password"
              name="password"
              placeholder='Password'
              onChange= {(e)=>setPassword(e.target.value)}
              required
            />
          </div>
          <div className='input'>
            <img src={password_icon} alt="password" className='icon' />
            <input
              type="password"
              name="conf_password"
              placeholder='Confirm Password'
              onChange= {(e)=>setConfpassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="submit_container">
          <Link to="/login" >Sign Up</Link>
        </div>
      </form>
      
      {/* Form End */}

      <div className='already'>
        Already Registered?
        <Link className='login_here' to="/login"> Login here </Link>
      </div>
    </div>
  );
}

export default Signup;







