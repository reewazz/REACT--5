import { useEffect, useRef, useState } from "react"

export const UserLists = ()=> {
const [users,setUsers] = useState([])
const [count,setCount] = useState(0)
const inputRef = useRef(null)
const [query,setQuery] = useState("nepal")


const handleFocus = ()=> {
    inputRef.current.style.backgroundColor = "black"
}
  
  const fetchUsers = async()=> {
        console.log("function is calling")
        try{
            const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2026-02-16&to=2026-02-16&sortBy=popularity&apiKey=68bdb3d4642e467db3702c03e1a1a53b`)
    //   https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=68bdb3d4642e467db3702c03e1a1a53b
        const finalResult = await response.json()
      setUsers(finalResult.articles)
        }
        catch(error){
            console.log(error)
        }
    }

   

    console.log(users)

    return (
        <>
        {/* <button  className="bg-blue-400 rounded-sm p-4 ">Fetch user</button>
             <button className="bg-blue-400 rounded-sm p-4 ">Fetch uededbeukdjb3ser</button>
        <h1>Thjis is user page</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
      <h1>{count}</h1>

        {users?.map((it
        
        
        burem,index)=> (
<div key={index}>
<h3>{item?.name}</h3>
</div>
        ))} */}
        <button onClick={fetchUsers}>fetchh news</button>

        <input type="text" className="border-red-400 outline-2"  value={query} onChange={(e)=>setQuery(e.target.value)} />
        <div className="grid grid-cols-3 gap-4">
{users?.map((item,index)=> (
    <div key={index}>
<img src={item.urlToImage} alt="" />
<h1>{item.title}</h1>
    </div>
))}
        </div>

        

        {/* <input ref={inputRef} type="text" className="" />
        <button onClick={handleFocus} className="bg-blue-100  ml-4 p-2">focus</button> */}
        </>
    )
}