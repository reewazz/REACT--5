import { Carousel } from '@mantine/carousel';
import { Burger, Button, Pagination, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GetRequest from '../helpers/http';
import CustomImage from '../helpers/CustomImage';

const Home = () => {
    // const {id} = useParams()
    const [opened, { toggle }] = useDisclosure();


    // const [category,setCategory] = useState([])
    // const fetchcategory  = async()=> {
    //   const res = await fetch("http://localhost:5000/category/getAll")
    //   const datafromapi = await res.json()
    //   console.log(datafromapi)
    //   setCategory(datafromapi)
    // }

  

    const [blogs,setBlogs] = useState([])
    const [page,setPage] = useState(1)
    const [totalPages,setTotalPages] = useState(0)

    useEffect(()=>{

      fetchBlogs()

     
    },[page])

     const fetchBlogs = async()=>{
      const res = await GetRequest(`blog/get?page=${page}`)
      setBlogs(res.data.data)
      setTotalPages(res.data.totalPages)
      
    }
  return (
    <>
    <div className='grid grid-cols-3'>
  {blogs?.map((item,index)=>(
    <div key={index}>
      <CustomImage imageUrl={item.image} alt="" />
      <h1>{item.title}</h1>
      <p> {item.description} </p>
      </div>
  ))}



    </div>
<div className='flex justify-center'>
    <Pagination  value={page} onChange={setPage}  total={totalPages} />
  </div>    </>
  )
}

export default Home