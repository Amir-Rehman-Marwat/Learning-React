import React from 'react'
import { createContext } from 'react'
export const ThemeDataContext=createContext()
function ThemeContext({children}) {
  return (
    <ThemeDataContext.Provider value={"this is data sent from context "}>
{children}
    </ThemeDataContext.Provider>

  )
}

export default ThemeContext