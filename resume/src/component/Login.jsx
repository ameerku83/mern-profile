import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row,Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {FaEye, FaEyeSlash} from "react-icons/fa"
import { useAuthStore } from '../store/authstore'
import "./Login.css"
import { useForm } from 'react-hook-form'
const Login = () => {
 
 
  window.location.replace(" https://mern-profile-app.onrender.com/")

 
 
    const navigate=useNavigate()
    const {loginAuth}=useAuthStore()
    let[show,setShow]=useState(false)
    
   const {register,handleSubmit,}=useForm()

   const toLogin = async(data) => {
    await axios.post('https://mern-profile-backend.onrender.com/login', data)
       .then(response => {
         console.log(response.data);
         navigate("/")
         loginAuth(response.data.token)
         alert("login success")
       })
       .catch(error => {
         console.log('There was an error signing up!', error);
         alert(error.response.data)
       });
   };

    return (
      <div>
      <Container>
     
      <Row className='justify-content-center'>
        <Col md={6} >
        <div className='shadow bg-white p-4 m-4' style={{borderRadius:10}}>
          <h3 className='text-center' >Log in</h3>
          
          <Form className='form-container my-3' onSubmit={handleSubmit(toLogin)}>
          
            Email
            < Form.Control required  type="email" name="email" placeholder='please enter your email' {...register("email")}  />
            Password
            <div className=' d-flex position-relative' >
            < Form.Control required className=' '  type={show?'text':"password"} name='password' placeholder='enter your password' {...register("password")}  />
             <label className='position-absolute end-0 mt-1 mx-1' style={{fontSize:17 ,cursor:"pointer"}} onClick={()=>setShow(!show)}>{show? < FaEye/> : <FaEyeSlash/>}</label> 
            </div>
             
              <button type='submit' className='btn btn-warning'> Log in</button>
              <label className='text-center'>Don't have an account?<Link to={'/signup'} >Signup now</Link></label>
  
          </Form>
        </div>
  
        </Col>
      </Row>
    </Container>
      </div>
    )
 }
 


export default Login