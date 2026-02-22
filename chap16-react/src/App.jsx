import React, { useEffect, useState } from 'react'
import Nav from './components/nav'
function App() {
  const [first, setfirst] = useState(0)
  const [second, setsecond] = useState(0)
  // case 1(run at the start and then run on each re render of a component re render)
 useEffect(() => {
 alert(`case 1 ,use effect is runninng because it runs at the start and then run every time a component changes `)
 })
//  case 2(runs only once when a whole website is opened or when it is reloded after that it does't works)
 useEffect(() => {
alert("case 2 use effect is runing! and it runs only once when a whole website is opened or when it is reloded after that it does't works")
 }, [])
 
 useEffect(() => {
   alert(`first has changed ,b/c it only works when a specific state is changed now first has changed to ${first}`)
 }, [first])
 
 useEffect(() => {
   alert(`second has changed ,b/c it only works when a specific state is changed ,now second has changed to ${second}`)
 }, [second])
  
  return (
    <div>
    
<h3 >{`first is ${first}`}</h3>
<h3>{`second is ${second}`}</h3>
      <button onClick={function () {
        setfirst(first+1)      
      }}>click for first</button>
        <button onClick={function () {
        setsecond(second+1)      
      }}>click for second</button>
    </div>
  )
}

export default App 