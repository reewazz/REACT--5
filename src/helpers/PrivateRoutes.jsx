import React from 'react'
import { Navigate } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'

const PrivateRoutes = ({children}) => {

const token = localStorage.getItem("token")
if(!token){
  alert("Login first")
}


  return (
  <>
  {token ? children : <Navigate to = "/login"/>}
  </>
  )
}

export default PrivateRoutes