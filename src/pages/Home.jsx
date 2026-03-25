import { Carousel } from '@mantine/carousel';
import { Burger, Button, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GetRequest from '../helpers/http';

const Home = ({children}) => {
    // const {id} = useParams()
    const [opened, { toggle }] = useDisclosure();


    // const [category,setCategory] = useState([])
    // const fetchcategory  = async()=> {
    //   const res = await fetch("http://localhost:5000/category/getAll")
    //   const datafromapi = await res.json()
    //   console.log(datafromapi)
    //   setCategory(datafromapi)
    // }

  

    useEffect(()=>{

      fetchBlogs()

     
    },[])

     const fetchBlogs = async()=>{
      const res = await GetRequest('blog/get')
    }
  return (
    <div>
    {children}

    </div>
  )
}

export default Home