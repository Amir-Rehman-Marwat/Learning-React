// react materials
import React from 'react'
import {Routes,Route,Link} from "react-router-dom"

// pages and comonents
import NavBar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Cart from './pages/cart'
import Product from './pages/product'
import NotFound from './pages/404'
import Men from './pages/men'
import Women from './pages/Women'
import Kids from './pages/Kids'
function App() {
  return (
    <div>
      <NavBar />
<Routes>
<Route   path="/" element={<Home/>} > </Route>

<Route   path="/cart" element={<Cart/>} > </Route>
<Route   path="/product" element={<Product/>} > 
<Route path='men' element={<Men/>}></Route>
<Route path='women' element={<Women/>}></Route>
<Route path='kids' element={<Kids/>}></Route>
</Route>
<Route   path="*" element={<NotFound/>} > </Route>

</Routes>

<Footer />
    </div>
  )
}

export default App
