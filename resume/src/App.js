import React from 'react';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';




import Home from './pages/Home';
import LatestProjects from './component/LatestProjects';
import Signup from './component/Signup';
import Login from './component/Login';
import { useAuthStore } from './store/authstore';
import Message from './component/Message';


function App() {
  const PrivetRoute =({children}) => {
    const {isAuth}=useAuthStore()
return isAuth ? children : <Navigate to="/login" />;
};
  return (

    <BrowserRouter>
    
   
   
    <Routes>
      
      <Route path='/' element={ <PrivetRoute><Home/></PrivetRoute>  } />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/message' element={<PrivetRoute><Message/></PrivetRoute>} />

    </Routes>
   
    </BrowserRouter>

  );
}

export default App;
