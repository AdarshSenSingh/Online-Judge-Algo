import React from 'react'
import './Signup.css'
import user_icon from './asserts/user.png'
import email_icon from './asserts/mail.png'
import password_icon from './asserts/hide.png'
const Signup = () => {
  return (
    <div className='container' >
        {/* header strat */}
      <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
        </div>      
        {/* header portion ends */}
        <div className="inputs">

        <div className='input'>
            <img src={user_icon} alt="user_name" className='icon'/>
            <input type="text" placeholder='Name'/>
        </div>
        <div className='input'>
            <img src={email_icon} alt="gmail" className='icon'/>
             <input type="email" placeholder='Email'/>
        </div>
        <div className='input'>
            <img src={password_icon} alt="password" className='icon'/>
            <input type="password" placeholder='Passward'/>
        </div>
        <div className='input'>
            <img src={password_icon} alt="password" className='icon'/>
            <input type="password" placeholder='Confirm Passward'/>
        </div>
        </div>
        <div className="submit_container">
            <button className='submit'>Sign Up</button>
        </div>
        <div className='already'>
        Already Registered!
        <div className='Login_here'> login here  </div> 
        </div>
    </div>
  )
}

export default Signup