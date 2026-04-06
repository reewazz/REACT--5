import { TextInput, PasswordInput, Button, Paper, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./src/helpers/AuthContext";

export default function LoginForm() {
  const {setUser} = useContext(AuthContext)
  const form = useForm({
    initialValues :{
  
    email: "",
    password: "",
    },

      validate: {
      

    },
  },

);

 

console.log(form.values)
  const handleSubmit = async() => {
     const validate = form.validate()
    console.log(validate)
    if(validate.hasErrors){
      return false
    }
   

    try{
        const payload = {
    
      email: form.values.email,
      password: form.values.password,
    };

    console.log("Signup payload:", payload);
    const response = await axios.post("http://localhost:5000/auth/login",payload)
    console.log(response)
    localStorage.setItem("token",response.data.token)
    localStorage.setItem("user",JSON.stringify(response.data.user))
    setUser(response.data.user)
    alert("User Logged in  successfully")
    form.reset()
    }
    catch(err){
        console.log(err)
        alert("Error occured")
    }

  
  };

  return (
    <div  className="min-h-screen flex items-center justify-center bg-gray-100">
      <Paper data-aos="fade-up-left" shadow="md" radius="md" p="xl" className="w-full max-w-md">
        <Title order={2} className="text-center mb-6">
          Login 
        </Title>

        <div className="space-y-4">
         

          <TextInput
            label="Email"
            placeholder="you@example.com"
           {...form.getInputProps("email")}
      
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
           {...form.getInputProps("password")}
           
        
          />

          <Button onClick={handleSubmit} fullWidth mt="md">
          Login
          </Button>
        </div>
      </Paper>
    </div>
  );
}