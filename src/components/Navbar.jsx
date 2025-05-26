import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="navbar-links">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">About us</Link>
          </li>
          <li className={location.pathname === '/services' ? 'active' : ''}>
            <Link to="/services">Services</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>

        {/* Changed from Link to a tag for WhatsApp */}
        <div className="navbar-contact">
          <a
            href="https://wa.me/918277608357"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="contact-button">Contact me</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
