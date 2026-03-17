import { TextInput, PasswordInput, Button, Paper, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";

export default function SignupForm() {
  const form = useForm({
    initialValues :{
    fullName: "",
    email: "",
    password: "",
    },

      validate: {
      fullName: (value) => (value.length > 2 ? null : 'name is short in length'),

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
      fullName: form.values.fullName,
      email: form.values.email,
      password: form.values.password,
    };

    console.log("Signup payload:", payload);
    const response = await axios.post("http://localhost:5000/auth/register",payload)
    console.log(response)
    alert("User created successfully")
    form.reset()
    }
    catch(err){
        console.log(err)
        alert("Error occured")
    }

  
  };

  return (
    <div  className="min-h-screen flex items-center justify-center bg-gray-100">
      <Paper data-aos="fade-up-right" shadow="md" radius="md" p="xl" className="w-full max-w-md">
        <Title order={2} className="text-center mb-6">
          Create Account
        </Title>

        <div className="space-y-4">
          <TextInput
            label="Full Name"
            placeholder="John Doe"
           {...form.getInputProps("fullName")}
           withAsterisk
      
          />

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
            Sign Up
          </Button>
        </div>
      </Paper>
    </div>
  );
}