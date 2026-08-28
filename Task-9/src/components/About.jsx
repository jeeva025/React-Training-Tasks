import React from 'react'

function About() {
  return (
    <div className="page">

      <div className="page-header">
        <h1>About Us</h1>
        <p>
          Learn more about DevStudio and what we do.
        </p>
      </div>

      <div className="about-content">

        <div className="about-box">
          <h2>Who We Are</h2>

          <p>
            DevStudio is a technology-focused company that
            creates digital solutions for businesses and
            individuals.
          </p>

          <p>
            Our team focuses on writing clean code, creating
            attractive interfaces and delivering reliable
            applications.
          </p>
        </div>

        <div className="about-box">
          <h2>Our Mission</h2>

          <p>
            Our mission is to make technology simple,
            accessible and useful for everyone.
          </p>

          <p>
            We continuously learn new technologies and use
            them to solve real-world problems.
          </p>
        </div>

      </div>

      <div className="stats">

        <div>
          <h2>50+</h2>
          <p>Projects</p>
        </div>

        <div>
          <h2>30+</h2>
          <p>Clients</p>
        </div>

        <div>
          <h2>5+</h2>
          <p>Years Experience</p>
        </div>

      </div>

    </div>
  )
}

export default About