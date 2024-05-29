import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import user_icon from './asserts/user.png'
import email_icon from './asserts/mail.png';
import password_icon from './asserts/hide.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    password: '',
    conf_password: ''
  });

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user_name, email, password, conf_password } = formData;

    // Validate form data here if needed

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_name, email, password, conf_password })
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        navigate('/login'); // Use navigate to redirect
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration');
    }
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
              value={formData.user_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input'>
            <img src={email_icon} alt="gmail" className='icon' />
            <input
              type="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input'>
            <img src={password_icon} alt="password" className='icon' />
            <input
              type="password"
              name="password"
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input'>
            <img src={password_icon} alt="password" className='icon' />
            <input
              type="password"
              name="conf_password"
              placeholder='Confirm Password'
              value={formData.conf_password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="submit_container">
          <button type="submit" className='submit'>Sign Up</button>
        </div>
      </form>
      {/* Form End */}

      <div className='already'>
        Already Registered?
        <div className='login_here' onClick={() => navigate('/login')}> Login here </div>
      </div>
    </div>
  );
}

export default Signup;
