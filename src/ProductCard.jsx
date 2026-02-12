import { Link } from "react-router-dom"

export const ProductCard = ({item})=> {
    return(
        <>
        <Link to = {`${item._id}`}>
           <div className="border border-red-400 rounded-2xl p-4" >
            <img src={item.image} alt="" />
                <h2 className="text-2xl font-bold" > {item.title} </h2>
                <p>{item.description}</p>
                <h4> ${item.price} </h4>




            </div>
            </Link>
        </>
    )
}