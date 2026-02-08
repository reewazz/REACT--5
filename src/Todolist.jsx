import { useState } from "react"

function TodoList(){

    const [task,setTask] = useState("")
    const [todoList,setTodoList] = useState(['task 1', "task 2"])
  
    const addTodo = ()=> {
        if (task.trim()===""){
            alert("please enter a valid task")
            return;
        }

//         const newTodo = {
//             id: 3,
//             task: task,
//             completed:false
//         }
// setTodoList([...todoList,newTodo])
setTodoList([...todoList,task])
setTask("")
    }


    const deleteTodo= (indexToDelete)=> {
   const updatedTodo = todoList.filter((item,index)=> index !== indexToDelete )
   setTodoList(updatedTodo)
   
    }
    return (
        <>

        <input type="text" value={task}  onChange={(e)=>setTask(e.target.value)} />

        <button onClick={addTodo}>Add todo</button>

{
    todoList.map((item,index)=> (

    
     <div key={index} style={{display:"flex",gap:"32px"}}>
           <li  > {item} </li>
           <button onClick={()=>deleteTodo(index)}>X</button>
     </div>
       
        
    ))
}


        </>
    )
}

export default TodoList