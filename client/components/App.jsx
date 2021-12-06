import React from 'react'
import { Route } from 'react-router-dom'


// Components
import Landing from './Landing'
import Login from './Login'

function App () {

  return (
    <>
      <div className='app'>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
      </div>
    </>
  )
}

export default App
