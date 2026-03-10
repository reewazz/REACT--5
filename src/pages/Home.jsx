import React, { useEffect, useState } from 'react'

const Home = () => {
    // const {id} = useParams()


    const [category,setCategory] = useState([])
    const fetchcategory  = async()=> {
      const res = await fetch("http://localhost:5000/category/getAll")
      const datafromapi = await res.json()
      console.log(datafromapi)
      setCategory(datafromapi)
    }
  

  return (
    <div>
        
  <div className="flex flex-col gap-y-4">

    {category.map((item,index)=> (
      <div key={index}>
        {item.title}
        </div>
    ))}

    <input type="text"  placeholder='category title'/>
    <input type="description"  placeholder='category description'/>
    <input type="checkbox"  />
    <button className='bg-blue-400' onClick={fetchcategory}> submit</button>

   
  </div>
    </div>
  )
}

export default Home