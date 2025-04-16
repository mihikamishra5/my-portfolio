import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3 className="project-title">Multilingual Spam Detection</h3>
          <p className="project-description">
            Developed a machine learning model to detect spam in Hindi, English, French, and German with 95% accuracy.
          </p>
          <div className="project-tags">
            <span className="project-tag">Python</span>
            <span className="project-tag">NLP</span>
            <span className="project-tag">TfidfVectorizer</span>
          </div>
          <div className="project-footer">
            <a href="#" className="github-link">GitHub</a>
          </div>
        </div>
        <div className="project-card">
          <h3 className="project-title">Cognizant AI Job Simulation</h3>
          <p className="project-description">
            Enhanced predictive accuracy by 15% with a custom ML module, streamlining model evaluations.
          </p>
          <div className="project-tags">
            <span className="project-tag">Python</span>
            <span className="project-tag">ML</span>
            <span className="project-tag">Data Analysis</span>
          </div>
          <div className="project-footer">
            <a href="#" className="github-link">GitHub</a>
          </div>
        </div>
        <div className="project-card">
          <h3 className="project-title">Hand Joint Detection</h3>
          <p className="project-description">
            Led a project using computer vision &amp; deep learning to detect finger joints with 96.7% accuracy, reducing compute time by 20%.
          </p>
          <div className="project-tags">
            <span className="project-tag">Computer Vision</span>
            <span className="project-tag">Deep Learning</span>
            <span className="project-tag">MATLAB</span>
          </div>
          <div className="project-footer">
            <a href="#" className="github-link">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
