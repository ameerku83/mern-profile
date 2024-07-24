import React from 'react'
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css"
import { useAuthStore } from '../store/authstore';



function NavContact() {
  const navigate =useNavigate()
   const {logoutAuth}=useAuthStore()
   const logout= ()=>{
    
    navigate('/login')
    logoutAuth()
   } 


    return (
      <>
      
        <Navbar expand="lg" className="  fixed-top ">
        <Container >
          <Navbar.Brand style={{fontSize:25,cursor:'pointer' }} as={Link} to={'/'} >HAMEER KU</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             

            
              
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link className=' active nav-link' onClick={logout}>Logout</Nav.Link>
              <Nav.Link className=' active nav-link' as={Link} to={'/message'} >Contact me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
       </Navbar>

    
    
      
     
      </>
    );
  }
  
  export default NavContact;