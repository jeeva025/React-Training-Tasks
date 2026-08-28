import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-con">
      <div className="logo">JeevaDev</div>

      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/services">Services</NavLink>
        </li>

        <li>
          <NavLink to="/products">Products</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
