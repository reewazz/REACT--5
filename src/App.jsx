import { useEffect, useState } from 'react'
import './App.css'
import Footer from './Footer'
import Navbar from './Navbar'
import TodoList from './Todolist'
import { Hello } from './Hello'
import { ProductLists } from './ProductLists'
import { Route, Routes } from 'react-router-dom'
import { DetailPage } from './DetailPage'
import { UserLists } from './modules/users/UserLists'
import BlogPage from './pages/BlogPage'
import Home from './pages/Home'
import SignupForm from '../Signup'
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoginForm from '../Login'
import Dashboard from './pages/dashboard/Dashboard'
import PrivateRoutes from './helpers/PrivateRoutes'
import AppLayout from './components/common/layouts/AppLayout'
import AdminLayout from './components/common/layouts/AdminLayout'
import AddCategory from './pages/dashboard/AddCategory'
// import { BlogPage } from './pages/BlogPage'
// import Hello from './Hello'
// import { Hello } from './Hello'
function App (){
    // let count = 0

    const [color,setColor] = useState("gray") //string
    const [user,setUser] = useState({
        name: 'riwaj',
        age: 18
    })  //object


 useEffect(()=>{
     AOS.init();
 },[])


    const [numbers,setNumbers] = useState([1,2,4,45,5]) //array
    const [value,setValue] = useState(null) // null
    const [show,setShow] = useState(false) //bolean
    const [showName,setShowName] = useState(false) //bolean


  

    return (
        <>
        {/* <button onClick={()=>setCount(count+1)}>+</button> */}
       
   
<Routes>
{/* <Route path = "/" element = {<AppLayout><Home/></AppLayout>}/> */}
<Route path = "/" element = {<AppLayout/>}>


<Route index element = {<Home />} />
<Route path='products' element = {<ProductLists />} />

<Route path='products' element = {<ProductLists />} />
<Route path='users' element = {<UserLists/>} />
<Route path='products/:id' element = {<DetailPage/>} />
<Route path='todolist' element = {<TodoList/>} />
<Route path='blog' element = {<BlogPage/>} />
<Route path='signup' element = {<SignupForm/>} />
<Route path='login' element = {<LoginForm/>} />
</Route>




<Route path='dashboard' element = { <AdminLayout/>  } >
<Route index element = {<Dashboard />} />
<Route path='category' element = {<AddCategory />} />

</Route>
<Route path = "/*" element = {<h1>Page not found</h1>} />

</Routes>









         
      

            
        </>
    )
}

export default App