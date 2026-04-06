import { Link } from "react-router-dom"
import RandomText from "../RandomText"
import { useContext } from "react"
import { AuthContext } from "./helpers/AuthContext"

// import RandomText from "../RandomText"
function Navbar(){

    const {user} = useContext(AuthContext)

    console.log(user,"user")
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
    <Link to = "blog">Blog</Link>
</div>

{!user ? (<div className="flex gap-4">
   <Link to = "/login">  <button>login</button></Link>
   <Link to = '/signup'><button>signup</button></Link> 
</div>): (
    <div>
        {user.fullName}
        </div>
)}

  </div>
        </>
    )
}

export default Navbar