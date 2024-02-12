import React, { useState } from 'react';
import './MainComponent.css';
import logoImage from '../images/anjanilogo.png';
import { NavLink } from 'react-router-dom';

const MainComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`main-section ${menuOpen ? 'menu-open' : ''}`}>
      <div className="section-logo">
        <a href="/" className="section-logo">
          <img src={logoImage} alt="Logo" />
        </a>
      </div>
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {menuOpen && (
        <div className="close-menu" onClick={closeMenu}>
          &times;
        </div>
      )}
      <nav className={`section-navigation ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/vision" onClick={closeMenu}>
              Vision and Mission
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/ourteam" onClick={closeMenu}>
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/joinus" onClick={closeMenu}>
              Join Us
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainComponent;
