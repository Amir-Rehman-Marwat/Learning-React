import React, { useState } from 'react'

function App() {
  const [nameVal, setnameVal] = useState("")
  const [ageVal, setageVal] = useState("")
  const submitHandler=(dets)=>{
    dets.preventDefault()
console.log(`form submitted by ${nameVal}`)
setageVal("")
setnameVal("")
  }
  return (
    <div className='container'>

<form className='form' onSubmit={submitHandler}>
  <input type="text" name="name" id="form-name" placeholder='Enter your beautiful name'  value={nameVal} onChange={function(dets){
  // const age= Number(dets.target.value)
  console.log(dets.target.value)
setnameVal(dets.target.value)
  }}/>
  <input type="number" name="age" id="form-age" placeholder='Enter your age' value={ageVal} onChange={function(dets){
    console.log(dets.target.value)
setageVal(dets.target.value)
  }}/>
  <button type='submit' onClick={submitHandler}>Submit</button>
</form>

    </div>
  )
}

export default App