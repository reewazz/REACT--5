import React from 'react'
import Navbar from '../../../Navbar'
import Footer from '../../../Footer'
import { Link, Navigate, Outlet } from 'react-router-dom'

const AdminLayout = () => {
    const token = localStorage.getItem("token")
if(!token){
  alert("Login first")
}
  return (
    <div>
{token ? (
    <div className='flex w-full'>
      <div className='h-screen w-1/4 bg-black text-white font-semibold p-8 flex flex-col'>
        <div>
            Home
        </div>
        <Link to ="category">
            Category
        </Link>
        <div>
            Products
        </div>

      </div>
      <div className='w-3/4 p-8'>

       <Outlet/>
      </div>
      </div>
) : (
    <Navigate to= "/login"/>
)}
        
   
      
    </div>
  )
}

export default AdminLayout