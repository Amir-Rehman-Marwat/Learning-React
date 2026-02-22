import React from 'react'
import { Link } from 'react-router-dom'
function ProductLayout() {
  return (
   <aside className="category-sidebar">
           <h3>Categories</h3>
           <ul className="category-list">
             <li className="category-item active"><Link>All Products</Link></li>
             <li className="category-item"><Link to="/product/men">Men</Link></li>
             <li className="category-item"><Link to="/product/women">Women</Link></li>
             <li className="category-item"><Link to="/product/kids">Kids</Link></li>
           
           </ul> 
           
           <div className="filter-section">
             <h3>Price Range</h3>
             <input type="range" min="0" max="1000" />
             <div className="price-labels">
               <span>$0</span>
               <span>$1000</span>
             </div>
           </div>
         </aside>
  )
}

export default ProductLayout