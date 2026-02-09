import { useState } from "react"

function TodoList(){

    const [task,setTask] = useState("")
  

   


    
    const [todoList,setTodoList] = useState([{
        id:1,
        task: "task 1",
        completed : false
    },
{
        id:2,
        task: "task 2",
        completed : true
    }])
  
    const addTodo = ()=> {
        if (task.trim()===""){
            alert("please enter a valid task")
            return;
        }

        const newTodo = {
            id: Date.now(),
            task: task,
            completed:false
        }
setTodoList([...todoList,newTodo])
// setTodoList([...todoList,task])
setTask("")
    }


    const deleteTodo= (indexToDelete)=> {
   const updatedTodo = todoList.filter((item,index)=> index !== indexToDelete )
   setTodoList(updatedTodo)
   
    }


    const toggleDone = (completedId)=> {
   const updatedTodo = todoList.map((item,index)=>(
    item.id === completedId  ? {...item,completed:!item.completed} : item
   ))


   setTodoList(updatedTodo)

    }

    console.log(todoList)
    return (
        <>

        <input type="text" value={task}  onChange={(e)=>setTask(e.target.value)} />

        <button onClick={addTodo}>Add todo</button>

{
    todoList.map((item,index)=> (

    
     <div key={index} style={{display:"flex",gap:"32px"}}>
           <li  style={{textDecoration: item.completed ? "line-through" :  "none"   }} > {item.task} </li>
           <button onClick={()=>deleteTodo(index)}>X</button>
           <button onClick={()=>toggleDone(item.id)}>done</button>
     </div>
       
        
    ))
}


        </>
    )
}

export default TodoList