import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import logo from '../../assets/logo.png'; // Import your logo image

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="TripBooks Logo" className="footer-logo" />
          <h3>About TripBooks</h3>
          <p>Your personalized trip planning experience.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/create">Create</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@tripbooks.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TripBooks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
