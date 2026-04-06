import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children})=> {
  
    const [user,setUser] = useState(null)

    useEffect(()=>{
          const userData = localStorage.getItem('user')
          setUser(JSON.parse(userData))
    },[])
  return (
    <AuthContext.Provider value = {{user,setUser}}>
{children}
    </AuthContext.Provider>
  )
}