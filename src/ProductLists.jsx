import { useState } from "react"
import { ProductCard } from "./ProductCard";
import { products } from "./components/common/Products";

export const ProductLists = ()=> {
  
  //  const fetchJson  = async ()=> {
  //   const res  = await fetch('./components/common/ProductJson.json')
  //   console.log(res.json())
  //  }

  const [jsonArray,setJsonArray] = useState([])
  const [page,setPage] = useState(0)

 const fetchJson =  async() => {
  try {
    const res =  await fetch('/ProductJson.json');  // 👈 no ./src path

    console.log(res)
    const data =  await res.json();
    setJsonArray(data.data)
    setPage(data.currentPage)
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

console.log(jsonArray)
const [selectedCategory,setSelectedCategory] = useState("all")
const filteredProducts = selectedCategory === "all" ? products : products.filter((item,index)=> (
   item.category === selectedCategory
))
    return(

        <>
        <button onClick={fetchJson}>fetch values</button>
        <div className="flex gap-8 items-center mb-4">
            <button onClick={()=>setSelectedCategory("all")}  className="p-4  bg-gray-300 ">All</button>
            <button onClick={()=>setSelectedCategory("mobile")} className="p-4  bg-gray-300 ">Mobile</button>
            <button  onClick={()=>setSelectedCategory("laptop")}  className="p-4  bg-gray-300 ">Laptop</button>
            <button  onClick={()=>setSelectedCategory("electronics")}  className="p-4  bg-gray-300 ">Electronics</button>
        </div>
        <div className=" grid grid-cols-3  gap-8" >
        {jsonArray.map((item,index)=> (
         <ProductCard item={item}/>
        ))}
       
        </div>
        </>

    )
}