import React from 'react';
import { Navigate, createBrowserRouter} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';




import Home from './pages/Home';
import LatestProjects from './component/LatestProjects';
import Signup from './component/Signup';
import Login from './component/Login';
import { useAuthStore } from './store/authstore';
import Message from './component/Message';
import ErrorPage from './component/ErrorPage';
import Root from './component/Root';



  const PrivetRoute =({children}) => {
    const {isAuth}=useAuthStore()
return isAuth ? children : <Navigate to="/login" />;
};

const router= createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<PrivetRoute><Home/></PrivetRoute>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
        {
          path:'/message',
          element:<PrivetRoute><Message/></PrivetRoute>
        },
        

    ]
  }
 
])

export default router;
