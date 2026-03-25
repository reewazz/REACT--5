import { useState } from "react"
import RandomText from "../RandomText"
import { PostRequest } from "./helpers/http"
import { Button } from "@mantine/core"

function Footer({props}){
    const [file,setFile] = useState(null)

    const handleSubmit = async()=>{


        const myForm = new FormData()
        myForm.append('image',file)

        const res = await PostRequest('upload-image',myForm)
    }

    console.log(file,"my file")
  
    return(
        <div className="flex flex-col items-center gap-4">
   <h1 className="text-center ">Upload files here</h1>
   <input  className="border-2 border-gray-200" type="file" onChange={(e)=>setFile(e.target.files[0])} />
   <Button onClick={handleSubmit}>submit</Button>
        </div>
    )
}

export default Footer