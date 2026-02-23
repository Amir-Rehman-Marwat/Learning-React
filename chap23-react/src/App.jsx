import React from 'react'
import Nav from './components/Nav'

import ThemeDataProvider from './contexts/ThemeContext'
function App() {
  return (
    <div>
      app
      <ThemeDataProvider>
<Nav data={"this is my prop data"}></Nav>
      </ThemeDataProvider>


    </div>
  )
}

export default App