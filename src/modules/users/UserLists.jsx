import { useEffect, useState } from "react"

export const UserLists = ()=> {
const [users,setUsers] = useState([])
    const fetchUsers = async()=> {
        console.log("function is calling")
        try{
            const response = await fetch('https://fakestoreapiserver.reactbd.org/api/users?page=1&perPage=10')
      
        const finalResult = await response.json()
      setUsers(finalResult.data)
        }
        catch(error){
            console.log(error)
        }
    }
    

    useEffect(()=>{
fetchUsers()
    },[])

    return (
        <>
        <button onClick={fetchUsers} className="bg-blue-400 rounded-sm p-4 ">Fetch user</button>
             <button className="bg-blue-400 rounded-sm p-4 ">Fetch uededbeukdjb3ser</button>
        <h1>Thjis is user page</h1>

        {users?.map((item,index)=> (
<div key={index}>
<h3>{item?.name}</h3>
</div>
        ))}
        </>
    )
}