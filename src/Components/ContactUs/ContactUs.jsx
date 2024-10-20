// src/components/ContactUs.jsx
import './ContactUs.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Icons for contact methods

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>
        We would love to hear from you! If you have any questions, suggestions, or just want to say hello,
        feel free to reach out to us using the information below.
      </p>

      <div className="contact-methods">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <h3>Email Us</h3>
          <p>support@tripbooks.com</p>
        </div>

        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <h3>Call Us</h3>
          <p>+1 (234) 567-8901</p>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Our Location</h3>
          <p>123 Travel Lane, Adventure City, AC 12345</p>
        </div>
      </div>

      <form className="contact-form">
        <h3>Send Us a Message</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
