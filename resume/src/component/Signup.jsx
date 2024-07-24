


import React, { useState } from 'react'
import { Col, Container, Row,Form } from 'react-bootstrap'
import axios from "axios"
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'


function Signup() {
  let navigate=useNavigate()

const [contactFormData,setContactFormData]=useState({
  fullname:"",
  email:"",
  phone:"",
  password:"",
  passwordmatch:""
})
const [errors,seterror]=useState({
  fullname:"",
  email:"",
  phone:"",
  password:"",
  passwordmatch:""
})

 function validateForm (){



  let valid=true
  let newError={
    fullname:"",
  email:"",
  phone:"",
  password:"",
  passwordmatch:""
  }
  if(!contactFormData.fullname.trim()){
    newError.fullname="please enter your name!"
    valid=false
  }
  if(!contactFormData.email.trim()){
    newError.email="email reaquired"
    valid=false
  }else if(!/\S+@\S+\.\S+/.test(contactFormData.email)){
    newError.email="enter valid email"
    valid=false

  }
  if(!contactFormData.phone.trim()){
    newError.phone="enter phone "
    valid=false
  }else if(!/^\d{10}$/.test(contactFormData.phone)){
    newError.phone="phone number must be 10 digit"
    valid=false

  }
  if( !/^(?=.*[A-Z])(?=.*[a-z])[a-zA-Z]{5,}/.test(contactFormData.password) ){
    newError.password="password must be 5 character and 1 capital letter "
    valid=false
  }
  if(contactFormData.passwordmatch!==contactFormData.password){
    newError.passwordmatch=" enter the same password "
    valid=false

  }
  seterror(newError)

 
  return valid
}

const handleSubmit= async(e)=>{
  e.preventDefault()
  if(validateForm()){
    try {
      let response= await axios.post('https://mern-profile-backend.onrender.com/signup', contactFormData)
      console.log(response.data);
      navigate('/')
     alert("successs")
    } catch (error) {
      console.log('There was an error signing up!', error);
      
    }
  }

 

}
const onChangeHandler = (e)=>{

  const {name,value}= e.target
  setContactFormData({...contactFormData,[name]:value})
}




  return (
  
  <Container>
    
    <Row className='justify-content-center'>
      <Col md={6} >
      <div className='shadow bg-white p-3 m-4' style={{borderRadius:10}}>
        <h3 className='text-center' >Sign up</h3>
       
        <Form className='form-container my-3' onSubmit={handleSubmit}>
        
        Full Name
          <Form.Control type="text" name="fullname" placeholder='please enter your fullname' onChange={onChangeHandler}/>
          <span> {errors?.fullname } </span>
          Email
          <Form.Control type="email" name="email" placeholder='please enter your email' onChange={onChangeHandler}/>
          <span> {errors?.email ?? ''} </span>
          Password
          <Form.Control type="password" name='password' placeholder='enter your password' onChange={onChangeHandler}/>  
            <span> {errors?.password ?? ''} </span>
           
              Confirm Password
            <Form.Control type="password" name='passwordmatch' placeholder='confirm your password' onChange={onChangeHandler}/>
            <span> {errors?.passwordmatch ?? ''} </span>
            <button type='submit'  className='btn btn-warning'>Sign up</button>
            <label className='text-center'>Already have an account?<Link to={'/Login'} >Login now</Link></label>
        </Form>
      </div>
      </Col>
    </Row>
  </Container>
    
    
   

  )
}

export default Signup