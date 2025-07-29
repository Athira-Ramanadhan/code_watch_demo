import React from 'react';
import aboutImage from '../assets/about.png';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image" data-aos="zoom-in">
          <img src={aboutImage} alt="About CodeWatch" />
        </div>
        <div className="about-text" data-aos="fade-left">
          <h2>About CodeWatch</h2>
          <p>
            CodeWatch is an AI-powered platform designed to ensure the integrity of online coding assessments. With intelligent proctoring, real-time monitoring, and automated violation detection, it creates a secure exam environment. CodeWatch empowers institutions to conduct coding tests remotely with confidence and fairness, minimizing manual oversight while maximizing accuracy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
