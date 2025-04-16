import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Left: Profile Info */}
      <div className="hero-left">
        <img src="/api/placeholder/150/150" alt="Profile" className="profile-image" />
        <div className="social-icons">
          <a href="https://github.com/mihikamishra5" target="_blank" rel="noopener noreferrer">
            {/* GitHub Icon */}
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 
              0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 
              5.44 0 0 0 20 4.77 5.07 
              5.07 0 0 0 19.91 1S18.73.65 
              16 2.48a13.38 13.38 0 0 0-7 
              0C6.27.65 5.09 1 5.09 1A5.07 
              5.07 0 0 0 5 4.77a5.44 
              5.44 0 0 0-1.5 3.78c0 5.42 
              3.3 6.61 6.44 7A3.37 3.37 0 0 
              0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mihika-mishra-570/" target="_blank" rel="noopener noreferrer">
            {/* LinkedIn Icon */}
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 
              6 6v7h-4v-7a2 2 0 0 0-2-2 
              2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 
              6-6z"/>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        <h1>Mihika Mishra</h1>
        <h2>Data Scientist &amp; AI Engineer</h2>
      </div>
      {/* Right: Dynamic Purple Wave Background */}
      <div className="hero-right">
        <div className="hero-wave"></div>
      </div>
    </section>
  );
};

export default Hero;
