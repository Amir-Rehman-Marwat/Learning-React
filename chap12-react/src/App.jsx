import React from 'react'
import { useState } from 'react'

function App() {
  console.log("app rendered or re-rendered")
  const [a, seta] = useState(20)
  function changeUser(){
    console.log(a)
    seta(prev=>prev+20)
    seta(prev=>prev+20)
    seta(prev=>prev)
    seta(prev=>prev+30)
  }
  return (
    <div>

<h3> {a}</h3>
<button onClick={changeUser}>CHANGE DATA</button>
    </div>
  )
}

export default App