import React from 'react'
import './home.css'
import code_icon from './asserts/web-development.png'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Signup from './Signup.jsx';
const home = () => {
  return (
       <div>
        
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <div>
            <img src={code_icon} alt='code_icon' className='icon'/>
        <Navbar.Brand href="#"> CodeKaro</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '80px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link1</Nav.Link>
            
            <Nav.Link href="#action3">
              Link2
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>


   
   
       
       <h1 className='front'>Welcome to CodeKaro.com!</h1>

       <br />
       <p className='front'>
       Programming isn’t about what you know; it’s about what you can figure out.
       </p>

       <h2>Are u a new user!</h2>
       <h1>Sign Up now!</h1>
       
       
       <Link to="/register"> signup</Link>

       <h2>Already Registered!</h2>
       <h1>Login here</h1>
       <Link to="/login">login</Link>    
       </div>
  )
}

export default home;