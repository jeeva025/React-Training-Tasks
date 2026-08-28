import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page home-page">

      <div className="hero">
        <div className="hero-content">
          <p className="small-title">WELCOME TO JeevaDev</p>

          <h1>
            We Build Digital
            <span> Experiences</span>
          </h1>

          <p>
            We create modern websites, powerful applications
            and beautiful user experiences for businesses.
          </p>


        </div>
      </div>

      <div className="section">
        <h2>What We Do</h2>

        <div className="cards">

          <div className="card">
            <h3>🌐 Web Development</h3>
            <p>
              Fast and responsive websites built using modern
              technologies.
            </p>
          </div>

          <div className="card">
            <h3>📱 App Development</h3>
            <p>
              User-friendly mobile applications designed for
              real-world needs.
            </p>
          </div>

          <div className="card">
            <h3>🎨 UI/UX Design</h3>
            <p>
              Clean and attractive interfaces that provide
              great user experiences.
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home