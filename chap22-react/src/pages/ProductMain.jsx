import React from 'react'
import { useParams } from 'react-router-dom'

function ProductMain() {
    const params=useParams();
    console.log(params)
  return (
   <main className="product-main-content">
        <div className="product-header">
          <h1>Shop Our Collection</h1>
          <p className="path-label">Browsing: <span>All Products</span></p>
        </div>

        <div className="product-grid">
          {/* Example Card 1 */}
          <div className="product-card">
            <div className="product-image-placeholder">Men's Apparel</div>
            <div className="product-info">
              <h4>Classic Mentor Tee</h4>
              <p className="price">$29.99</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>

          {/* Example Card 2 */}
          <div className="product-card">
            <div className="product-image-placeholder">Women's Apparel</div>
            <div className="product-info">
              <h4>Tech Blazer</h4>
              <p className="price">$89.99</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>

          {/* Example Card 3 */}
          <div className="product-card">
            <div className="product-image-placeholder">Kids' Collection</div>
            <div className="product-info">
              <h4>Junior Coder Hoodie</h4>
              <p className="price">$34.99</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
  )
}

export default ProductMain