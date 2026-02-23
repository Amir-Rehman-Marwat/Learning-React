import React from 'react'
import { createContext } from 'react'
import Nav from '../components/Nav'
export const ThemeDataContext=createContext()
function ThemeDataProvider({children}) {
  return (
    <ThemeDataContext.Provider value={{name:"amir"}}>
 {children}
    </ThemeDataContext.Provider>
  )
}

export default ThemeDataProvider