import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import email_icon from './asserts/mail.png'
import password_icon from './asserts/hide.png'

const login = () => {
  return (
    <div className='container' >
        {/* header strat */}
      <div className='header'>
        <div className='text'>Login </div>
        <div className='underline'></div>
        </div>      
        {/* header portion ends */}
        <div className="inputs">
       
        <div className='input'>
            <img src={email_icon} alt="gmail" className='icon'/>
             <input type="email" placeholder='Email'/>
        </div>
        <div className='input'>
            <img src={password_icon} alt="password" className='icon'/>
            <input type="password" placeholder='Passward'/>
        </div>
        </div>
        <div className="submit_container">
           <Link to="/compiler">login</Link>
        </div>
        <div className='forgot'>
        Forgot Passward <span className="fog"> Click here</span>
        </div>
        <br />
        <div className='already'>
        New User!
        <Link className="login_here" to="/register">Sign up now</Link>
        </div>
    </div>
  )
}

export default login