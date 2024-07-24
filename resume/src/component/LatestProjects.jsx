
import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import todoapp from './Images/Screenshot 2024-07-18 192148.png'
import project2 from './Images/project2.png'
import project3 from "./Images/project3.png"
import project4 from "./Images/project4.png"
const LatestProjects = () => {
  return (
    <>
    <Container className=' text-center' id='project'>
        <Row>
            <Col >
            <h1 style={{marginTop:80}} >Latest projects </h1>
            </Col>
        </Row>

    </Container>
   
        <Container>
        <Row className=' mt-3 text-center justify-content-center gap-3 mx-2' >
            <Col lg={4}  className='shadow'  >
             <img style={{borderRadius:20}} className=' ' width={260}  src={todoapp} alt="project1" /> <br/>
             <h5 className='mt-2'>MERN To Do app by using react-bootstrap,MongoDB,ExpressJs</h5>
             <button style={{borderRadius:30,backgroundColor:'black'}} className=' my-3'><a style={{textDecoration:'none',color:'white'}} href="https://mern-todo-app-4mk2.onrender.com/">click here </a></button>
        
            </Col>
            <Col lg={4} className='shadow' >
    <img style={{borderRadius:30}} className=' ' width={260}  src={project2} alt="project2" /> <br/>
    <h5 className='mt-2'>News web app frontend by html css</h5>
     <button style={{borderRadius:30,backgroundColor:'black'}} className=' my-3' ><a style={{textDecoration:'none',color:'white'}} href="https://ameerku83.github.io/news/"> click here</a></button>
        
            </Col>
            </Row>
            <Row  className=' justify-content-center gap-3 mt-3 text-center mx-2'  >
            <Col lg={4} className='shadow'  >
             <img style={{borderRadius:30,objectFit:'contain'}} className=' ' width={260} height={120} src={project3} alt="project1" /> <br/>
             <h5 className='mt-2'>JavaScript calculator</h5>
             <button style={{borderRadius:30,backgroundColor:'black'}} className=' my-3'><a style={{textDecoration:'none',color:'white'}} href="https://ameerku83.github.io/project-calculator/">click here </a></button>
        
            </Col>
            <Col lg={4} className='shadow' >
    <img style={{borderRadius:30,objectFit:'contain'}} className=' ' width={260}  height={120}  src={project4} alt="project2" /> <br/>
    <h5 className='mt-2'>Analog clock created with html css JavaSript </h5>
    
     <button style={{borderRadius:30,backgroundColor:'black'}} className=' my-3' ><a style={{textDecoration:'none',color:'white'}} href="https://ameerku83.github.io/project-clock/"> click here</a></button>
        
            </Col>
            </Row>
       
        </Container>      
      
    </>
  


  )
}

export default LatestProjects
