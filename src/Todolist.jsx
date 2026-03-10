import { useState } from "react"
import Button from "./components/common/Button"

function TodoList(){

    const [task,setTask] = useState("")
    // const [editMode,setEditMode] = useState(false)
    const [editId,setEditId] = useState(null) 
  

   


    
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
        if(editId!==null){
  const updatedTodo = todoList.map((item,index)=>(
    item.id === editId  ? {...item,} : item
   ))


   setTodoList(updatedTodo)
        }
        else{
 const newTodo = {
            id: Date.now(),
            task: task,
            completed:false
        }
setTodoList([...todoList,newTodo])

        }

       
// setTodoList([...todoList,task])
setTask("")
    }


    const deleteTodo= (indexToDelete)=> {
   const updatedTodo = todoList.filter((item,index)=> index !== indexToDelete )
   setTodoList(updatedTodo)
   
    }


    const editTodo = (itemToEdit)=> {
        setTask(itemToEdit.task)
        
        // setEditMode(true)
        setEditId(itemToEdit.id)
       
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
{/* <Button value={"Add"}/>
<Button value={"Edit"}/> */}

        <input type="text" value={task}  onChange={(e)=>setTask(e.target.value)} />

        <button onClick={addTodo}>{editId ? "Update" : "Add"} todo</button>

{
    todoList.map((item,index)=> (

    
     <div key={index} style={{display:"flex",gap:"32px"}}>
           <li  style={{textDecoration: item.completed ? "line-through" :  "none"   }} > {item.task} </li>
           <button onClick={()=>deleteTodo(index)}>X</button>
           <button onClick={()=>editTodo(item)}>edit</button>
           <button onClick={()=>toggleDone(item.id)}>done</button>
     </div>
       
        
    ))
}


        </>
    )
}

export default TodoList