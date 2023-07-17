import React from 'react';
import './header.css';
const Header = ({ activeSection, setActiveSection }) => {
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className={`nav-item ${activeSection === 'yo' ? 'active' : ''}`}>
            <button onClick={() => handleSectionClick('yo')}>Yo</button>
          </li>
          <li className={`nav-item ${activeSection === 'proyectos' ? 'active' : ''}`}>
            <button onClick={() => handleSectionClick('proyectos')}>Proyectos</button>
          </li>
          <li className={`nav-item ${activeSection === 'contacto' ? 'active' : ''}`}>
            <button onClick={() => handleSectionClick('contacto')}>Contacto</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
