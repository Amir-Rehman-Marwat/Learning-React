import React from 'react'
import {Link, useNavigate} from "react-router-dom"
function NavBar() {
  const navigate=useNavigate()
  return (
    <nav className="navbar">
      {/* Brand Section */}
      <div className="navbar-logo">
        <h1>The Mentor</h1>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/product">PRODUCT</Link></li>
        <li><Link to="/cart">CART</Link></li>
      </ul>

      {/* Control Buttons */}
      <div className="nav-controls">
        <button  onClick={function(){
navigate(-1)
          console.log("button clicked")
}} className="ctrl-btn back-btn">Back</button>
        <button onClick={function(){
          navigate("/")
        }} className="ctrl-btn home-icon-btn">Home</button>
        <button onClick={function(){
         navigate(+1)
        }} className="ctrl-btn next-btn">Next</button>
      </div>
    </nav>
  )
}

export default NavBar