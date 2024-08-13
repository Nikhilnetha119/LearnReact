import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

const Home = ({}) => {
  const {name} = useParams()

  const[auth, setauth] = useState(false)
  if(auth) {
    return <Navigate to='/dashboard' />
  }

  return (
    <div>
      <h2 style={{color:'white'}}>Welcome to Homepage: { name }</h2>
      <button onClick={() => setauth(true)} >Login</button>
    </div>
  )
}

export default Home
