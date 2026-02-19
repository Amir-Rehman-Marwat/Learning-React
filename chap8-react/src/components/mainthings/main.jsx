import React from 'react'
import style from "../mainthings/main.module.css"
function Main() {
  return (
    <div id='main'> 
    <h1 className={style.welcome}>WELCOME TO MY PROJECT</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque aspernatur iste, sint modi sed repellendus ut numquam, deleniti odio similique corrupti reiciendis pariatur mollitia. Mollitia hic doloremque voluptatem molestias nemo, nobis iusto neque eius qui labore pariatur alias sit excepturi? Aspernatur deleniti esse eum iste nihil perferendis, optio necessitatibus voluptatum.</p>
    <button className={style.btn}>Explore</button>
    </div>
  )
}

export default Main