// src/components/RegisterModal.js
import React from 'react';
import './LoginModal.css';

const RegisterModal = ({ isOpen, onClose, onSwitch }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Create an Account</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>

        <p className="switch-link">
          Already have an account?{' '}
          <span className="link-text" onClick={onSwitch}>Login</span>
        </p>

        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default RegisterModal;
