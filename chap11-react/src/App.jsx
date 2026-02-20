import React, { useState } from 'react'

function App() {

let [count, setCount] = useState(0)
  return (
    <div>
      <div className="value">
        <h3>{count}</h3>
      </div>
      <button id="inc" onClick={function(dets){
       
        setCount(count++)
      }}>INCREASE</button>
      <button id="dec" onClick={function(dets){
        setCount(--count)
      }}>DECREASE</button>

    </div>
  )
}

export default App