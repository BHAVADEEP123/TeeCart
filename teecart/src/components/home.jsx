import React from 'react'
import { useAuth } from '../utils/AuthContext'

const Home = () => {
  const {user,handleUserLogin,handleUserLogout} = useAuth();
  return (
    <>
    home <br />
    <button onClick={handleUserLogout}>logout</button>
    </>
    
  )
}

export default Home