import React, { useState } from 'react';
import './CreateModal.css';
import { useNavigate } from 'react-router-dom';

const CreateModal = ({ isOpen, onClose }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate hook for redirection

  if (!isOpen) return null; // Do not render if the modal is not open

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add authentication logic if needed
    onClose(); // Close the modal
    navigate('/create'); // Redirect to the Create page
    setUserId(''); // Clear the userId field
    setPassword(''); // Clear the password field
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-left">
          <img src="/path/to/your/image.jpg" alt="Modal Left" className="modal-image" />
        </div>
        <div className="modal-right">
          <h3>Enter Your Credentials</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="userId">User ID</label>
              <input 
                type="text" 
                id="userId" 
                name="userId" 
                value={userId} 
                onChange={(e) => setUserId(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="enter-button">Enter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
