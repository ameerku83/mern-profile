import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
const Signup = () => {
  const { register, handleSubmit, watch,formState:{errors} } = useForm();
    const navigate=useNavigate()
  const onSubmit = async(data) => {
   await axios.post('http://localhost:3400/signup', data)
      .then(response => {
        console.log(response.data);
        navigate("/login")
        alert("signup success")
      })
      .catch(error => {
        console.log('There was an error signing up!', error);
        alert('There was an error signing up!')
      });
  };

  return (
    // <Container >
    //  <Row className=' justify-content-center'>
    //   <Col lg={6} className='shadow bg-white p-4 m-4' >
     
    // <Form onSubmit={handleSubmit(onSubmit)}>
    //   <Form.Group controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control
    //       type="email"
          
    //       {...register("email",{ required: "enter your email" })}
    //     />
    //     <span className='text-danger' >{errors.email?.message}</span>
    //   </Form.Group>

    //   <Form.Group controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control
    //       type="password"
          
    //       {...register("password",{ required: true , pattern:{ value:/^(?=.*[A-Z])(?=.*[a-z])[a-zA-Z]{5,}/, message:"minimum 5 and one upper case "}})}
    //     />
    //     <span className='text-danger' >{errors.password?.message}</span>
        
    //   </Form.Group>

    //   <Form.Group controlId="formBasicPasswordConfirm">
    //     <Form.Label>Confirm Password</Form.Label>
    //     <Form.Control
    //       type="password"
          
    //       {...register("confirmPassword",{
    //         validate: value => value === watch('password')||"password does not match"
    //       })}
    //     />
    //     <span className='text-danger'  >{errors.confirmPassword?.message}</span>
    //   </Form.Group>
  
    //   <button className='btn btn-warning' type="submit">
    //     Signup
    //   </button>
    //   <label className='text-center'>Alread have an account?<Link to={'/login'} >Login now</Link></label>
    // </Form>
    // </Col>
    // </Row>
    // </Container>

    <div>
      <Container>
     
      <Row className='justify-content-center'>
        <Col md={6} >
        <div className='shadow bg-white p-4 m-4' style={{borderRadius:10}}>
          <h3 className='text-center' >Sign up</h3>
          
          <Form className='form-container my-3' onSubmit={handleSubmit(onSubmit)} >
            Full Name
          < Form.Control   type="text" name="name" placeholder='please enter your name' {...register("fullname",{required:"enter your name",minLength:{value:3,message:"minimum 3 characters"}})}  />
          <label className='text-danger' >{errors.fullname?.message }</label>
            Email
            < Form.Control   type="email" name="email" placeholder='please enter your email' {...register("email",{required:"enter your email",pattern:{value:/\S+@\S+\.\S+/,message:"enter valid email"}})}  />
            Password
            <Form.Control
           type="password"
          
          {...register("password",{ required: true , pattern:{ value:/^(?=.*[A-Z])(?=.*[a-z])[a-zA-Z]{5,}/, message:"minimum 5 and one upper case "}})}
        />
        <label className='text-danger' >{errors.password?.message }</label>
        Confirm Password
        <Form.Control
          type="password"
          
          {...register("confirmPassword",{
            validate: value => value === watch('password')||"password does not match"
          })}
        />
        <span className='text-danger'  >{errors.confirmPassword?.message}</span>

           
             
              <button type='submit' className='btn btn-warning'> Log in</button>
              <label className='text-center'>Don't have an account?<Link to={'/login'} >Login now</Link></label>
  
          </Form>
        </div>
  
        </Col>
      </Row>
    </Container>
      </div>
  );
};

export default Signup;



 // 
//  
  // /^\d{10}$/