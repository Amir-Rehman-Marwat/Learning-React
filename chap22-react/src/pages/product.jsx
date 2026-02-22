import React from 'react'
import {Link} from "react-router-dom"
function Product() {
  return (
  
    <div className="product-page-container">
      {/* Category Sidebar */}
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

      {/* Main Product Grid */}
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
    </div>
  )
}

export default Product