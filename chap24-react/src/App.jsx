import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
function App() {
  // useStates
  const [apiError, setapiError] = useState(null)
  // React form hook methods:
  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors ,isSubmitting},
  } = useForm()

  // Submit handler
  const onSubmit=async(vals)=>{

    try {
      const response=await axios.post("http://localhost:3000/",{
        method:"POST",
        headers:{
           'Content-Type': 'application/json',
        },
        body:JSON.stringify(vals)
      })
   
      console.log("url fetch hogaya and data send hogaya")

      console.log(response)
      setapiError(undefined)
      console.log(apiError)
    } catch (error) {
     setapiError(error.message)
     reset()
    }
    
  }
  return (
    <div>
{isSubmitting && <div className='loading'>LOADING...</div>}
     <form  className="form" onSubmit={handleSubmit(onSubmit)}> 

        <input type="text" 
          placeholder='Enter your name' 
          defaultValue=""
           {...register("username", { required: {value:true,message:"user name is required"}})}
        
        />
        {errors.username && <div className='error'>{errors.username.message}</div>}
        <br />
        <input type="password" 
          placeholder='Enter your name'
          defaultValue=""
          {...register("password", { required: {value:true,message:"user name is required"}})}
          />
        <br />
           {errors.password && <div className='error'>{errors.password.message}</div>}
        <input disabled={isSubmitting} type="submit" value="Submit" />
        {apiError && <div className='apiError'>{apiError}</div>}
  </form>
    </div>
  )
}

export default App