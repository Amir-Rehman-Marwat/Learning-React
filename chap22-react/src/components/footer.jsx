import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand & Mission */}
        <div className="footer-section brand-info">
          <h2 className="footer-logo">The Mentor</h2>
          <p>
            Empowering developers to master React through 
            structured learning and hands-on routing practice.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#cart">My Cart</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>

        {/* Newsletter / Contact */}
        <div className="footer-section newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to get the latest tutorials.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="button">Join</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 The Mentor. All rights reserved.</p>
        <div className="social-placeholders">
          <span>Twitter</span> | <span>GitHub</span> | <span>LinkedIn</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer