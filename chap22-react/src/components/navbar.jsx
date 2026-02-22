import React from 'react'
import {Link} from "react-router-dom"
function NavBar() {
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
        <button className="ctrl-btn back-btn">Back</button>
        <button className="ctrl-btn home-icon-btn">Home</button>
        <button className="ctrl-btn next-btn">Next</button>
      </div>
    </nav>
  )
}

export default NavBar