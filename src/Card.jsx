export const Card = ({item})=> {
    return (
         <div style={{border: "1px solid red", padding: "8px", borderRadius: "16px"}} >
       <img src={item.image} alt="" />
       <h1>{item.name}</h1> 
       <h2>{item.skills}</h2>

    </div>
    )
}