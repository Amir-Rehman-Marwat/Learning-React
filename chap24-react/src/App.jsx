import React from 'react'
import { useForm } from "react-hook-form";

function App() {
const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors,isSubmitting },
  } = useForm()
  // function for submit :
  const onSubmit=async()=>{
    try {
      const response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data=await response.json();
    console.log(data)
    } catch (error) {
      setError("serverError",{message:error.message})
      
      

    }

  
  }
  return (
    <div>
{isSubmitting && <div>LOADING ...</div>}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" defaultValue=""
         {...register("username",{required:{value:true,message:"Name is required"},minLength:{value:5,message:"Your name must be of 5 letters"},maxLength:{value:10,message:"Your name must not exceed 10 letters"}})}  
         placeholder='Enter you name'/>
        {errors.username && <div className='error'>{errors.username.message}</div>}
        <br />
        <input type="password" defaultValue=""
        {...register("password",{required:{value:true,message:"a strong password is required"},minLength:{value:5,message:"Your password must not be less than 5 enteries"},maxLength:{value:10,message:"Your password should not exceed 10 enteries"}})}
         placeholder='Enter you password' />
         {errors.password && <div className='error'>{errors.password.message}</div>}
        <br />
        <input disabled={isSubmitting}  type="submit" />
      {errors.serverError && <div>{errors.serverError.message}</div>}
      </form>
    </div>
  )
}

export default App