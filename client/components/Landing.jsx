import React from 'react'
import '../styles/Landing.css'
import { Link } from 'react-router-dom'

// Components
import Login from './Login'

const Landing = () => {
   return (
      <div className="landing-container">
         <h1>Landing page</h1>

         <Link to='/login'>
            <button>Login</button>
         </Link>
         
      </div>
   )
}

export default Landing