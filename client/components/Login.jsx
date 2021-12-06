import React from 'react'
import '../styles/Login.css'

const Login = () => {
   return (
      <div className='login-container'>
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