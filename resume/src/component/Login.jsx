import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Row,Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {FaEye, FaEyeSlash} from "react-icons/fa"
import { useAuthStore } from '../store/authstore'
const Login = () => {
    const navigate=useNavigate()
    const {loginAuth}=useAuthStore()
    let[show,setShow]=useState(false)
    
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
 let   handleSubmit= async(e)=>{
    e.preventDefault()
    try {
        let response= await axios.post('https://mern-profile-backend.onrender.com/login', {email,password})
        console.log(response.data);
        loginAuth(response.data.token)
       alert("Login successs")
       navigate("/")
      } catch (error) {
  alert( error.response.data+"      invalid email or password");
      console.log(error); 
      
      }


 }
  return (
    <div>
    <Container>
   
    <Row className='justify-content-center'>
      <Col md={6} >
      <div className='shadow bg-white p-4 m-4' style={{borderRadius:10}}>
        <h3 className='text-center' >Log in</h3>
        
        <Form className='form-container my-3' onSubmit={handleSubmit}>
        
          Email
          < Form.Control required value={email} type="email" name="email" placeholder='please enter your email' onChange={(e)=>setEmail(e.target.value)} />
          Password
          <div className=' d-flex position-relative' >
          < Form.Control required className=' '  type={show?'text':"password"} value={password} name='password' placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)}/>
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