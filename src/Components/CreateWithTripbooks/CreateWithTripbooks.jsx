import React from 'react';
import './CreateWithTripbooks.css'; 
import newVideo from '../../assets/newVideo.mp4';

// Import icons from React Icons
import { FaBookOpen, FaCameraRetro, FaPenFancy } from 'react-icons/fa';

const CreateWithTripbooks = () => {
  return (
    <div className="create-with-tripbooks">
      <div className="video-section">
        <video src={newVideo} autoPlay loop muted></video> {/* Auto-playing video */}
      </div>
      
      {/* Icons and Slogan Section */}
      <div className="slogan-and-icons">
        {/* Add the icons between video and slogan */}
        <div className="icon-section">
          <FaBookOpen className="icon large-icon" />
          <FaCameraRetro className="icon large-icon" />
          <FaPenFancy className="icon large-icon" />
        </div>
        
        <div className="slogan-section">
          <h2>Create with TripBooks</h2>
          <p>
            At TripBooks, we empower you to tell your story your own way. Every memory matters, 
            and our platform helps you cherish them in a way that's personal and timeless.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateWithTripbooks;
