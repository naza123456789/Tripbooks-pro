// src/components/CreatePage/CreatePage.jsx
import React from 'react'; // Ensure React is imported
import { Link } from 'react-router-dom'; // Import Link to enable navigation
import './CreatePage.css'; // Make sure the CSS file path is correct

const CreatePage = () => {
  return (
    <div className="create-page">
      <h1>Create Your TripBook</h1>
      <p>Customize and order your personalized travel albums!</p>
      
      {/* Back to Home button */}
      <Link to="/" className="back-home-btn">Back to Home</Link>
    </div>
  );
};

export default CreatePage;
