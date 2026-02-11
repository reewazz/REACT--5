import { Link } from "react-router-dom"
import RandomText from "../RandomText"

// import RandomText from "../RandomText"
function Navbar(){
    return (
        <>
   
  <div className="flex justify-between items-center px-16 py-8 bg-gray-400">

<div>
    <Link to="/">Logo</Link>
</div>
<div className="flex items-center gap-4">
    <Link to = "/">Home</Link>
    <Link to = "products">Products</Link>
    <Link to = "todolist">TodoList</Link>
</div>
<div className="flex gap-4">
   <Link to = "/login">  <button>login</button></Link>
    <button>signup</button>
</div>
  </div>
        </>
    )
}

export default Navbar