import React from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
   return (
      <div className='login-container'>

         <Link to='/'>
            <button>Home</button>
         </Link>

          <form className="login-form">
            <input 
               type="text"
               placeholder="Username..."
            />
            <input 
               type="password"
               placeholder="Password..."
            />
            <button>Log in</button>
         </form>
      </div>
   )
}

export default Login