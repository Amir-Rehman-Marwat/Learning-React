import React from 'react'

function Home() {
  return (
  <div className="home-container">
      <header className="home-hero">
        <h1>Welcome to The Mentor</h1>
        <p>Your journey into React Routing begins here.</p>
        <div className="route-info">
          <span>Current Path: <strong>/</strong></span>
        </div>
      </header>
      <section className="home-content">
        <h2>Learning Objectives</h2>
        <ul>
          <li>Setting up BrowserRouter</li>
          <li>Defining Routes and Links</li>
          <li>Handling Dynamic Navigation</li>
        </ul>
      </section>
    </div>
  )
}

export default Home