import React from 'react'

function NotFound() {
  return (
   <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="error-code">404</h1>
        <div className="error-animation">
          {/* A simple visual placeholder for a lost mentor */}
          <span className="emoji">🧭</span>
        </div>
        <h2>Oops! You've Wandered Off Path</h2>
        <p>
          Even the best students get lost sometimes. The page you are looking 
          for doesn't exist or has been moved.
        </p>
        
        <div className="notfound-actions">
          <button className="back-home-btn">Return to Home</button>
          <button className="report-btn">Report an Issue</button>
        </div>
        
        <div className="routing-tip">
          <p><strong>Routing Tip:</strong> In your App.js, place this component at the very bottom of your Routes list using <code>path="*"</code>.</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound