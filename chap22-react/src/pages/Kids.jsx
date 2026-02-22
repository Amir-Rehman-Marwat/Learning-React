import React from 'react'

function Kids() {
  return (
   <div className="category-page kids-theme">
      <div className="category-banner">
        <h1>Kids' Corner</h1>
        <p>Comfortable and fun outfits for little mentors.</p>
      </div>
      
      <div className="product-list">
        <div className="item-card">
          <div className="img-holder">Dino Hoodie</div>
          <h4>Dinosaur Zip-Up</h4>
          <p>$35.00</p>
          <button>Add to Cart</button>
        </div>
        <div className="item-card">
          <div className="img-holder">Sneakers</div>
          <h4>Light-up Sneakers</h4>
          <p>$45.00</p>
          <button>Add to Cart</button>
        </div>
        <div className="item-card">
          <div className="img-holder">Pajama Set</div>
          <h4>Space Galaxy PJ Set</h4>
          <p>$25.00</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Kids