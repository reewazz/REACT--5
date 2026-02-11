import { useState } from 'react'
import './App.css'
import Footer from './Footer'
import Navbar from './Navbar'
import TodoList from './Todolist'
import { Hello } from './Hello'
import { ProductLists } from './ProductLists'
import { Route, Routes } from 'react-router-dom'
import { DetailPage } from './DetailPage'
// import Hello from './Hello'
// import { Hello } from './Hello'
function App (){
    // let count = 0

    const [count,setCount] = useState(0) //number
    const [color,setColor] = useState("gray") //string
    const [user,setUser] = useState({
        name: 'riwaj',
        age: 18
    })  //object


    const [numbers,setNumbers] = useState([1,2,4,45,5]) //array
    const [value,setValue] = useState(null) // null
    const [show,setShow] = useState(false) //bolean
    const [showName,setShowName] = useState(false) //bolean

  

    return (
        <>
        <Navbar/>
   
<Routes>
<Route path='/' element = {<h1>Homepage</h1>} />
<Route path='products' element = {<ProductLists/>} />
<Route path='products/:id' element = {<DetailPage/>} />
<Route path='todolist' element = {<TodoList/>} />
<Route path = "/*" element = {<h1>Page not found</h1>} />

</Routes>

<h1>footer</h1>







         
      

            
        </>
    )
}

export default App