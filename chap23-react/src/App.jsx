import React, { useContext } from 'react'
import Nav from './components/Nav'
import { ThemeDataContext } from './contexts/ThemeContext'

function App() {
  const data=useContext(ThemeDataContext)
  return (
    <div>
      {data}

<Nav data={"this is my prop data"}></Nav>

    </div>
  )
}

export default App