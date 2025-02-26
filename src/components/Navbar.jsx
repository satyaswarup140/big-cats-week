import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = ({ setShowContact }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/images/logo.png" alt="Big Cats Week Logo" className="navbar-logo" />
          Big Cats Week
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/leisure-packages">Leisure Packages</Link></li>
        <li><Link to="/wildlife-packages">Wildlife Packages</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><button className="contact-us-btn" onClick={() => setShowContact(true)}>Contact Us</button></li>
      </ul>
      <Link to="/book-now" className="book-now-btn">Book Now</Link>
    </nav>
  );
};

export default Navbar;
