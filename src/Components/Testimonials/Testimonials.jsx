// src/Components/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: 'Jane Doe',
    message: 'TripBooks helped me capture the most amazing moments of my travels! Highly recommend.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg', // Image of a woman
  },
  {
    name: 'John Smith',
    message: 'An incredible experience! The layout and design of my trip book were stunning.',
    image: 'https://randomuser.me/api/portraits/men/44.jpg', // Image of a man
  },
  {
    name: 'Emily Johnson',
    message: 'I loved how easy it was to create my trip book. A perfect way to remember my adventures!',
    image: 'https://randomuser.me/api/portraits/women/45.jpg', // Image of another woman
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3>{testimonial.name}</h3>
            <p>"{testimonial.message}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
