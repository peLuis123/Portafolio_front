import React, { useState } from 'react';
import './header.css';
import logo from '../images/top-logo.png'; // Importa la imagen del logo

const Header = ({ activeSection, setActiveSection }) => {
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app-container">
    <header className={`header ${activeSection !== 'home' ? 'header-transparent' : ''}`}>
      <nav className="nav">
        <img src={logo} alt="Logo" className="logo" /> {/* Muestra el logo */}
        <ul className="nav-list">
          <li className={`nav-item ${activeSection === 'Inicio' ? 'active' : ''}`}>
            <button onClick={() => handleSectionClick('home')}>Home</button>
          </li>
          <li className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>
            <button onClick={() => handleSectionClick('about')}>About</button>
          </li>
          <li className={`nav-item ${activeSection === 'products' ? 'active' : ''}`}>
            <button onClick={() => handleSectionClick('products')}>Products</button>
          </li>
          <li className={`nav-item ${activeSection === 'services' ? 'active' : ''}`}>
            <button onClick={() => handleSectionClick('services')}>Services</button>
          </li>
          <li className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
            <button onClick={() => handleSectionClick('contact')}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
};

export default Header;
