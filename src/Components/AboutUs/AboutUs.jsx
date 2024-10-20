// src/components/AboutUs.jsx
import './AboutUs.css';
import logo from '../../assets/logo.png'; // Adjust the path to your logo
import { FaHeart, FaCamera, FaGlobe } from 'react-icons/fa'; // Icons from react-icons

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* About Us Section */}
      <div className="about-us-section">
        <h2>About Us</h2>
        <p>
          Welcome to TripBooks, your go-to platform for creating and sharing unforgettable travel memories! 
          We provide travelers with personalized digital and printed albums to cherish their adventures. 
          Whether you want to relive your favorite moments or share your stories with the world, TripBooks is here to help.
        </p>
        <p>
          Our team is passionate about travel, photography, and storytelling. With our platform, you can 
          create beautifully designed albums, capturing the essence of your trips in both digital and print formats.
        </p>
      </div>

      {/* Why You'll Love Us Section */}
      <div className="why-love-us-section">
        <img src={logo} alt="Logo" className="about-us-logo" /> {/* Centered logo */}
        <h2>Why You'll Love Us</h2>

        <div className="about-us-features">
          <div className="feature-item">
            <FaHeart className="feature-icon" />
            <h3>Passion for Travel</h3>
            <p>We care deeply about your journeys and provide the best ways to cherish them forever.</p>
          </div>

          <div className="feature-item">
            <FaCamera className="feature-icon" />
            <h3>Capture Every Moment</h3>
            <p>Your memories deserve to be captured in style with our personalized albums.</p>
          </div>

          <div className="feature-item">
            <FaGlobe className="feature-icon" />
            <h3>Worldwide Delivery</h3>
            <p>We deliver your printed memories anywhere across the globe, making them easily accessible.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
