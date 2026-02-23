import React, { useContext } from 'react'
import { ThemeDataContext } from '../contexts/ThemeContext'
function Nav() {
 const data= useContext(ThemeDataContext)
 console.log(data)
  return (
    <div>
        nav
        
    </div>
    
  )
}

export default Nav