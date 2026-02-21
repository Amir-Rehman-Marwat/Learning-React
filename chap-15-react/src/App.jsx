import React, { useState } from 'react'
import axios from "axios"
function App() {
  const [data, setData] = useState([])
 const getData= async ()=>{
  const response=await axios.get('https://jsonplaceholder.typicode.com/albums')
  
  console.log(response.data)
  setData(response.data)

 }
  return (
    <div>
      <button className='btn' onClick={getData}>Get Data</button>
      {data.map((val,idx)=>{
        return <h1 key={idx}>{val.title}</h1>
      })}
    </div>
  )
}

export default App