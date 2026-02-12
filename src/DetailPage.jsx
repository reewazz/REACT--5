import { useParams, useSearchParams } from "react-router-dom"
import { products } from "./components/common/Products"
import { useState } from "react"

export const DetailPage = ()=> {

const {id} = useParams()
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

console.log(typeof id)


 const mainProduct = jsonArray.find((item)=>(
    item._id ===  parseInt(id)
))

console.log(mainProduct)
const [searchParams,setSearchParams] = useSearchParams()





    return(
        <>
        <button onClick={fetchJson}>fetch values</button>


{jsonArray.length>0 ? (
     <>
     <h1>{mainProduct.title}</h1>
  <h1>{mainProduct.category}</h1>
     </>
) : ""}
 
        </>
    )
}