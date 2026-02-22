import React from 'react'

function Men() {
  return (
    <div className="category-page men-theme">
      <div className="category-banner">
        <h1>Men's Collection</h1>
        <p>Premium apparel for the modern mentor.</p>
      </div>
      
      <div className="product-list">
        <div className="item-card">
          <div className="img-holder">Formal Blazer</div>
          <h4>Tailored Fit Blazer</h4>
          <p>$120.00</p>
          <button>Add to Cart</button>
        </div>
        <div className="item-card">
          <div className="img-holder">Leather Boots</div>
          <h4>Urban Explorer Boots</h4>
          <p>$85.00</p>
          <button>Add to Cart</button>
        </div>
        <div className="item-card">
          <div className="img-holder">Smart Watch</div>
          <h4>Pro Tech Watch</h4>
          <p>$199.00</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Men