import React, { useEffect, useState } from 'react'

export const BlogPage = () => {
    const [name,setName] = useState("")

    useEffect(()=>{
    localStorage.setItem("userdata",JSON.stringify({name:"riwaj",address : "laghanlhkncskjdbc"}))
  

    const valuefromlocal = localStorage.getItem("userdata")
    const newRamroValue  = JSON.parse(valuefromlocal)
    setName(newRamroValue)

    },[])

    console.log(name)
  return (
    <div>
       name is {name.address}
    </div>
  )
}
