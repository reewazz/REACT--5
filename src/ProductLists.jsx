import { useState } from "react"
import { ProductCard } from "./ProductCard";

export const ProductLists = ()=> {
   const [products, setProducts] = useState([
  // 📱 Mobile
  {
    id: 1,
    name: "iPhone 17",
    description: "Latest Apple smartphone",
    category: "mobile",
    price: 3000,
    image: "https://via.placeholder.com/300x300?text=iPhone+17"
  },
  {
    id: 2,
    name: "Samsung Galaxy S25",
    description: "Flagship Android phone",
    category: "mobile",
    price: 2800,
    image: "https://via.placeholder.com/300x300?text=Galaxy+S25"
  },

  // 💻 Laptop
  {
    id: 3,
    name: "MacBook Pro M4",
    description: "Powerful laptop for professionals",
    category: "laptop",
    price: 5500,
    image: "https://via.placeholder.com/300x300?text=MacBook+Pro+M4"
  },
  {
    id: 4,
    name: "Dell XPS 15",
    description: "Premium Windows laptop",
    category: "laptop",
    price: 4200,
    image: "https://via.placeholder.com/300x300?text=Dell+XPS+15"
  },

  // 🎧 Accessories
  {
    id: 5,
    name: "AirPods Pro 3",
    description: "Noise cancelling earbuds",
    category: "accessories",
    price: 900,
    image: "https://via.placeholder.com/300x300?text=AirPods+Pro+3"
  },
  {
    id: 6,
    name: "Logitech MX Master 4",
    description: "Advanced wireless mouse",
    category: "accessories",
    price: 450,
    image: "https://via.placeholder.com/300x300?text=MX+Master+4"
  },

  // 📺 Electronics
  {
    id: 7,
    name: "Sony Bravia 65”",
    description: "4K Smart LED TV",
    category: "electronics",
    price: 6000,
    image: "https://via.placeholder.com/300x300?text=Sony+Bravia+TV"
  },
  {
    id: 8,
    name: "PlayStation 6",
    description: "Next-gen gaming console",
    category: "electronics",
    price: 3500,
    image: "https://via.placeholder.com/300x300?text=PlayStation+6"
  },

  // ⌚ Wearables
  {
    id: 9,
    name: "Apple Watch X",
    description: "Smartwatch with health tracking",
    category: "wearables",
    price: 1200,
    image: "https://via.placeholder.com/300x300?text=Apple+Watch+X"
  },
  {
    id: 10,
    name: "Samsung Galaxy Watch 8",
    description: "Smart fitness wearable",
    category: "wearables",
    price: 1000,
    image: "https://via.placeholder.com/300x300?text=Galaxy+Watch+8"
  }
]);

const [selectedCategory,setSelectedCategory] = useState("all")
const filteredProducts = selectedCategory === "all" ? products : products.filter((item,index)=> (
   item.category === selectedCategory
))
    return(

        <>
        <div className="flex gap-8 items-center mb-4">
            <button onClick={()=>setSelectedCategory("all")}  className="p-4  bg-gray-300 ">All</button>
            <button onClick={()=>setSelectedCategory("mobile")} className="p-4  bg-gray-300 ">Mobile</button>
            <button  onClick={()=>setSelectedCategory("laptop")}  className="p-4  bg-gray-300 ">Laptop</button>
            <button  onClick={()=>setSelectedCategory("electronics")}  className="p-4  bg-gray-300 ">Electronics</button>
        </div>
        <div className=" grid grid-cols-3  gap-8" >
        {filteredProducts.map((item,index)=> (
         <ProductCard item={item}/>
        ))}
       
        </div>
        </>

    )
}