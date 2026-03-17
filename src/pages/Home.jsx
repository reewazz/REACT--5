import { Carousel } from '@mantine/carousel';
import { Burger, Button, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GetRequest from '../helpers/http';

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

  

    useEffect(()=>{

      fetchBlogs()

     
    },[])

     const fetchBlogs = async()=>{
      const res = await GetRequest('blog/get')
    }
  return (
    <div>
        <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
        <Button variant="filled" color="pink">Button</Button>
          <Text onClick={fetchBlogs} c="dimmed">Dimmed text</Text>
          <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Default text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text fw={500}>Semibold</Text>
      <Text fw={700}>Bold</Text>
      <Text fs="italic">Italic</Text>
      <Text td="underline">Underlined</Text>
      <Text td="line-through">Strikethrough</Text>
      <Text c="dimmed">Dimmed text</Text>
      <Text c="blue">Blue text</Text>
      <Text c="teal.4">Teal 4 text</Text>
      <Text tt="uppercase">Uppercase</Text>
      <Text tt="capitalize">capitalized text</Text>
      <Text ta="center">Aligned to center</Text>
      <Text ta="right">Aligned to right</Text>
       <Carousel  withIndicators
      height={200}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      emblaOptions={{ loop: true, align: 'start' }} withIndicators height={200}>
      <Carousel.Slide>
        <div className='bg-blue-400 h-10 w-10 text-white'>
          1
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
         <div className='bg-blue-400 h-10 w-10 text-white'>
          2
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
         <div className='bg-blue-400 h-10 w-10 text-white'>
          3
        </div>
      </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  {/* <div className="flex flex-col gap-y-4">

    {category.map((item,index)=> (
      <div key={index}>
        {item.title}
        </div>
    ))}

    <input type="text"  placeholder='category title'/>
    <input type="description"  placeholder='category description'/>
    <input type="checkbox"  />
    <button className='bg-blue-400' onClick={fetchcategory}> submit</button>

   
  </div> */}
    </div>
  )
}

export default Home