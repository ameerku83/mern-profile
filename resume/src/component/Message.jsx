import React from 'react'
import { useForm } from "react-hook-form"
import { Col, Container, Row,Form } from 'react-bootstrap'
import axios from 'axios'
import Footer from './Footer'
import NavContact from './NavContact'
const Message = () =>  {
    const { register,handleSubmit,formState:{errors},reset  }=useForm()
  
    const onSubmit = async(data)=>{
     try {
        
        let res= await axios.post('https://mern-profile-backend.onrender.com/message',data)
           console.log(res.data);
           alert("successfully sent message")
           reset()
          }
    
   catch (error) {
    console.log(error);
    alert("error sending message")
  }
}

  return (
    <div>
        <NavContact/>
          <Container>
   
   <Row className='justify-content-center mt-5'>
     <Col md={6} >
     <div className='shadow bg-white p-4 m-4' style={{borderRadius:10}}>
       <h3 className='text-center' >Contact me</h3>
       
       <Form className='form-container my-3' onSubmit={handleSubmit(onSubmit)}>
       
         Phone Number
         < Form.Control  type="text"  placeholder=' enter your mobile phone number' {...register("phone",{required:"please enter your mobile phone number", pattern:{ value:/^[0-9]{10}$/, message:"phone number must be 10 digit"}})} />
         <span>{errors.phone?.message }</span>
         < Form.Control as="textarea" rows={3}  type="text"  placeholder=' enter your message' {...register("message",{required:"please enter message",minLength:{value:5,message:"minimum 5 character"}})} />
         <span>{errors.message?.message }</span>
         
         
          
           <button type='submit' className='btn btn-warning'> Send</button>
       </Form>
     </div>

     </Col>
   </Row>
 </Container>


    </div>
  )
}

export default Message