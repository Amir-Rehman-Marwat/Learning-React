import React from 'react'
import { Outlet } from 'react-router-dom'

function Women() {
  return (
   <div className="category-page women-theme">
      <div className="category-banner">
        <h1>Women's Collection</h1>
        <p>Elegant styles designed for impact.</p>
      </div>
      
      <div className="product-list">
        <div className="item-card">
          <div className="img-holder">Silk Blouse</div>
          <h4>Evening Silk Blouse</h4>
          <p>$75.00</p>
          <button>Add to Cart</button>
        </div>
        <div className="item-card">
          <div className="img-holder">Handbag</div>
          <h4>Designer Tote Bag</h4>
          <p>$150.00</p>
          <button>Add to Cart</button>
        </div>
        <div className="item-card">
          <div className="img-holder">Heels</div>
          <h4>Classic Stiletto</h4>
          <p>$95.00</p>
          <button>Add to Cart</button>
        </div>
      </div>
       <Outlet />
    </div>
 
  )
}

export default Women