import React from 'react';
import "./footer.css"
import logo from '../images/footer-logo@2x.png';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
        <p class="footer-text"><sup>2020 © All rights reserved</sup></p>
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>
      </footer>
    );
  };
export default Footer;
