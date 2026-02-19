import React from 'react'
import style from "../navbar/navbar.module.css"
function Navbar() {
  return (
    <div id='navbar'>
        <h4 className={style.logo}>LOGO</h4>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <button className={style.btn}>Login</button>
    </div>
  )
}

export default Navbar