import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Service() {
  return (
    <div className="services-page">

      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          We provide modern digital solutions to help businesses
          grow and build a strong online presence.
        </p>
      </div>

      <div className="service-nav">
        <NavLink to="web-dev">Web Development</NavLink>
        <NavLink to="app-dev">App Development</NavLink>
        <NavLink to="design">UI/UX Design</NavLink>
      </div>

      <div className="service-content">
        <Outlet />
      </div>

    </div>
  )
}

export default Service