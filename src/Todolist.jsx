// import { useContext, useState } from "react"
// import Button from "./components/common/Button"
// import { CounterContext } from "./helpers/CounterContext"

// function TodoList(){


//     const {count} = useContext(CounterContext)
//     const [task,setTask] = useState("")
//     // const [editMode,setEditMode] = useState(false)
//     const [editId,setEditId] = useState(null) 
  

   


    
//     const [todoList,setTodoList] = useState([{
//         id:1,
//         task: "task 1",
//         completed : false
//     },
// {
//         id:2,
//         task: "task 2",
//         completed : true
//     }])
  
//     const addTodo = ()=> {
//         if (task.trim()===""){
//             alert("please enter a valid task")
//             return;
//         }
//         if(editId!==null){
//   const updatedTodo = todoList.map((item,index)=>(
//     item.id === editId  ? {...item,} : item
//    ))


//    setTodoList(updatedTodo)
//         }
//         else{
//  const newTodo = {
//             id: Date.now(),
//             task: task,
//             completed:false
//         }
// setTodoList([...todoList,newTodo])

//         }

       
// // setTodoList([...todoList,task])
// setTask("")
//     }


//     const deleteTodo= (indexToDelete)=> {
//    const updatedTodo = todoList.filter((item,index)=> index !== indexToDelete )
//    setTodoList(updatedTodo)
   
//     }


//     const editTodo = (itemToEdit)=> {
//         setTask(itemToEdit.task)
        
//         // setEditMode(true)
//         setEditId(itemToEdit.id)
       
//     }  

//     const toggleDone = (completedId)=> {
//    const updatedTodo = todoList.map((item,index)=>(
//     item.id === completedId  ? {...item,completed:!item.completed} : item
//    ))


//    setTodoList(updatedTodo)

//     }

//     console.log(todoList)
    
//     return (
//         <>
// {/* <Button value={"Add"}/>
// <Button value={"Edit"}/> */}
// <h2 className="text-5xl text-green-300 text-center">{count} is coming from context</h2>

//         <input type="text" value={task}  onChange={(e)=>setTask(e.target.value)} />

//         <button onClick={addTodo}>{editId ? "Update" : "Add"} todo</button>

// {
//     todoList.map((item,index)=> (

    
//      <div key={index} style={{display:"flex",gap:"32px"}}>
//            <li  style={{textDecoration: item.completed ? "line-through" :  "none"   }} > {item.task} </li>
//            <button onClick={()=>deleteTodo(index)}>X</button>
//            <button onClick={()=>editTodo(item)}>edit</button>
//            <button onClick={()=>toggleDone(item.id)}>done</button>
//      </div>
       
        
//     ))
// }


//         </>
//     )
// }

// export default TodoList

import React, { useEffect, useState } from 'react'
import GetRequest from './helpers/http'
import CustomImage from './helpers/CustomImage'
import { Loader, Skeleton } from '@mantine/core'

const Todolist = () => {

    const [blogs,setBlogs] = useState([])
    const [loading,setLoading] = useState(false)

   const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchBlogs = async () => {
   try{
     setLoading(true);

    await delay(3000); // 3-second gap before request

    const res = await GetRequest('blog/get');

    
    setBlogs(res.data);
   }
   catch(err){
    console.err(err)
   }
   finally{
setLoading(false);
   }
};

    useEffect(()=>{
        fetchBlogs()
    },[])


    console.log(blogs)
  return (
   <>
   {loading ? <div className='px-16'>
    
    <div className='flex items-center justify-center'>
   <Loader color="blue" />
</div>
   </div> : 
    <div className='px-16'>
    <div className='text-center'>Blogs </div>
<div className='grid grid-cols-3 gap-8'>
     {blogs.map((item,index)=>(
        <div key={index}>
            <CustomImage imageUrl={item.image}/>
            <h1>{item.title}</h1>
            <p>{item.description}</p>

        </div>
    ))}
</div>
   
    </div>
}
   </>
  )
}

export default Todolist