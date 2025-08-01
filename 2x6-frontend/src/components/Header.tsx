import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/Logo.png';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Modern FrameCraft" className="header-logo" />
        </Link>
        
        <nav className="nav-menu">
          <Link 
            to="/work" 
            className={`nav-link ${location.pathname === '/work' ? 'active' : ''}`}
          >
            Our Work
          </Link>
          <Link 
            to="/our-story" 
            className={`nav-link ${location.pathname === '/our-story' ? 'active' : ''}`}
          >
            Our Story
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact Us/Free Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 