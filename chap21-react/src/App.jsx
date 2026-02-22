import React from 'react'
import Home from './pages/home'
import Contacts from './pages/contacts'
import About from './pages/about'
import {Routes,Route,Link} from "react-router-dom"
function App() {
  return (
    <div>
      <div className="nav">
        <h3 className="logo">THE MENTORS</h3>
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/contacts" >contact</Link>
      </div>
       <Routes>
        <Route path='/' element={<Home/>}>  </Route>

        <Route path='/contacts' element={<Contacts/>}></Route>
        <Route path='/about' element={<About/>}></Route>
       </Routes>
    </div>
  )
}

export default App