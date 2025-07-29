import React, { useState } from 'react';
import LoginModal from './LoginModal';
import heroImage from '../assets/hero.png';

const Hero = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome to <span className="brand">CodeWatch</span></h1>
          <p>Secure your online coding assessments with intelligent AI-powered proctoring.</p>
          <button className="btn-glow" onClick={() => setShowLogin(true)}>Get Started</button>
          <button className="btn-outline">Learn More</button>
        </div>
        <div className="hero-img-box">
          <img src={heroImage} alt="Hero Illustration" />
        </div>
      </div>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </section>
  );
};

export default Hero;
