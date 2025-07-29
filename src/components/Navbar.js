import React from 'react';

function Navbar({ onLoginClick }) {
  return (
    <nav className="navbar">
      <div className="logo">CodeWatch</div>
      <ul className="nav-links">
        <li><a href="#hero"><i className="fas fa-home"></i> Home</a></li>
        <li><a href="#about"><i className="fas fa-info-circle"></i> About</a></li>
        <li><a href="#features"><i className="fas fa-star"></i> Features</a></li>
        <li>
          <button className="login-btn" onClick={onLoginClick}>
            <i className="fas fa-sign-in-alt"></i> Login
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
