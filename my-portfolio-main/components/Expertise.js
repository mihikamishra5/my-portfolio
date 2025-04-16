import React from 'react';
import './Expertise.css';

const Expertise = () => {
  return (
    <div className="expertise-container">
      <h2 className="section-title">Expertise</h2>
      <div className="expertise-text">
        <p>
          I am a data scientist with expertise in machine learning, natural language processing, 
          and predictive analytics. I develop AI-driven solutions that extract meaningful insights 
          from complex datasets. Based in Jersey City, NJ, I am passionate about building intelligent systems.
        </p>
      </div>
      <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Technical Skills</h3>
      <div className="skills">
        {["Python", "R", "C/C++", "TensorFlow", "PyTorch", "Keras", "NLP",
          "Computer Vision", "Machine Learning", "PostgreSQL", "MongoDB",
          "Google Cloud", "AWS", "Azure", "Tableau", "Pandas", "NumPy", "scikit-learn"].map(skill => (
          <span key={skill} className="skill-pill">{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
