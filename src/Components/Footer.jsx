import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer id="footer" className="text-light py-5 bg-white">
    <div className="container d-flex justify-content-between align-items-center">
      <div>
        <a href="#about" className="text-decoration-underline text-primary me-3">About</a>
        <a href="#contact" className="text-decoration-underline text-primary me-3">Contact</a>
        <a href="#terms" className="text-decoration-underline text-primary me-3">Terms of Use</a>
        <a href="#privacy" className="text-decoration-underline text-primary">Privacy Policy</a>
        <p className="mt-2" style={{ color: 'gray' }}>© Your Website 2023. All Rights Reserved.</p>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" className="text-primary mx-2" style={{ fontSize: '1.8rem', textDecoration: 'none' }}> 
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" className="text-primary mx-2" style={{ fontSize: '1.8rem', textDecoration: 'none' }}> 
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com" className="text-primary mx-2" style={{ fontSize: '1.8rem', textDecoration: 'none' }}> 
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
