import React from 'react';
import "./footer.css"
import logo from '../images/footer-logo@2x.png';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">2020 © All rights reserved.</p>
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>
      </footer>
    );
  };
export default Footer;
