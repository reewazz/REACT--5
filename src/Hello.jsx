// function Hello(){
//     return(
//         <>
//         </>
//     )
// }

import { useState } from "react"
import Footer from "./Footer"
import { Card } from "./Card"

// export default Hello

 export  const Hello =({count,name,setCount})=>{

    const [users,setUsers] = useState([
        {
            id:1,
            name: "Asal",
            skills: "react",
            image: "data:image/jpeg;base64,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"
        },
          {
            id:2,
            name: "Anuj",
            skills: "html css"
        },
         {
            id:3,
            name: "Akash",
            skills: "dom js"
        },
         {
            id:4,
            name: "Akash",
            skills: "dom js"
        },
    ])
   

    const [mero,setMero] = useState({
        name: "riwaj",
        skills: "full srtack"

    })
    return(
        <>
        <div style={{display:"flex", justifyContent: "space-between"}} className="userkodiv">

      
{users.map((item,index)=>(

    // <div key={index} style={{border: "1px solid red", padding: "8px", borderRadius: "16px"}} >
    //    <img src={item.image} alt="" />
    //    <h1>{item.name}</h1> 
    //    <h2>{item.skills}</h2>

    // </div>
    <Card key={index} item= {item}/>
))}
  </div>

{/* <button>login</button> */}

  <Card item = {mero}/>
        
        </>
    )
}


