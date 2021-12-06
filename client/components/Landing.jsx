import React from 'react'

const Landing = () => {
   return (
      <div className="landing-container">
         <h1>Landing page</h1>

         <form>
            <input 
               type="text"
               placeholder="Username..."
            />
            <input 
               type="password"
               placeholder="Password..."
            />

         </form>
      </div>
   )
}

export default Landing