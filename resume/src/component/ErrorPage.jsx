

import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='text-center'>
        <h2>404 page not found</h2>
         <button><h3><Link to={"/"} >Go to home</Link> </h3></button>
    </div>
  )
}

export default Error