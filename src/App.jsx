import { useState } from 'react'
import './App.css'
import Footer from './Footer'
import Navbar from './Navbar'
import TodoList from './Todolist'
function App (){
    // let count = 0

    const [count,setCount] = useState(1000) //number
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

<TodoList/>
{/* <div className='box' style={{backgroundColor : `${color}`,}}>

</div>
    
    <button onClick={()=>setColor('redede')}>red</button>
    <button onClick={()=>setColor("yellow")}>yellow</button>
    <button onClick={()=>setColor('black')}>green</button> */}
         
      

            
        </>
    )
}

export default App