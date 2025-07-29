// components/Features.js
import React from 'react';

function Features() {
  const features = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure Proctoring',
      desc: 'Monitor coding exams using AI-based live video surveillance.',
      delay: '100',
    },
    {
      icon: 'fas fa-search',
      title: 'Cheat Detection',
      desc: 'Detect tab switches, background noise, and suspicious behavior.',
      delay: '200',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Instant Reports',
      desc: 'Generate detailed reports after each session for quick review.',
      delay: '300',
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Code Integrity',
      desc: 'Track code changes and flag unusual copy/paste patterns.',
      delay: '400',
    },
    {
      icon: 'fas fa-bolt',
      title: 'Real-time Alerts',
      desc: 'Notifies the invigilator instantly when violations occur.',
      delay: '500',
    },
    
  ];

  return (
    <section className="features" id="features">
      <h2 data-aos="fade-up">Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            className="feature-card"
            data-aos="fade-up"
            data-aos-delay={feature.delay}
            key={index}
          >
            <i className={feature.icon}></i>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
