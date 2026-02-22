import React, { Component } from 'react'
import {Link, Outlet} from "react-router-dom"
// Components
import ProductLayout from './ProductLayout'

function Product() {
  return (
  
    <div className="product-page-container">
      {/* Category Sidebar */}
      
<ProductLayout />
      {/* Main Product Grid */}
      <Outlet />
    </div>
  )
}

export default Product