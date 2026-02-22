import React from 'react'

function Cart() {
  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <p className="path-label">Path: /cart</p>

      <div className="cart-table">
        <div className="cart-item">
          <span>React Basics Course</span>
          <span><strong>$49.99</strong></span>
        </div>
        <hr />
        <div className="cart-total">
          <span>Total:</span>
          <span>$49.99</span>
        </div>
      </div>
      
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  )
}

export default Cart