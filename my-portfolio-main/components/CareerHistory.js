import React from 'react';
import './Timeline.css';

const CareerHistory = () => {
  return (
    <div className="career-container">
      <h2 className="section-title">Career History</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>AI Engineer, Internship</h3>
          <p className="location-date">Treevah | New York City, NY | August 2024 - Current</p>
          <ul>
            <li>
              Initiated an AI-driven file management solution using NLP models (BERT, TF-IDF) achieving
              85% tagging accuracy and enhancing data accessibility by 40%.
            </li>
            <li>
              Configured and optimized Google Analytics &amp; Microsoft Clarity to improve behavioral insights by 30%.
            </li>
          </ul>
        </div>
        <div className="timeline-item">
          <h3>Graduate Assistant</h3>
          <p className="location-date">Pace University | New York City, NY | May 2023 – May 2024</p>
          <ul>
            <li>
              Integrated an AI prompt chatbot for the university website, increasing communication efficiency by 40%.
            </li>
            <li>
              Managed large-scale events with advanced data tools, increasing operational efficiency by 25%.
            </li>
          </ul>
        </div>
        <div className="timeline-item">
          <h3>Data Scientist, Internship</h3>
          <p className="location-date">Aezion, Inc | New York City, NY | June 2023 – September 2023</p>
          <ul>
            <li>
              Developed resume parsing and summarization algorithms using Python (regex, BERT) with 95% accuracy.
            </li>
            <li>
              Evaluated AI writing tools, enhancing summarization quality by 20%.
            </li>
          </ul>
        </div>
        <div className="timeline-item">
          <h3>Data Analyst</h3>
          <p className="location-date">Winjit Technologies | Nashik, India | May 2021 - September 2021</p>
          <ul>
            <li>
              Extracted insights from structured data, reducing worker accidents by 50%.
            </li>
            <li>
              Developed ML algorithms &amp; a predictive analytics platform to boost predictive power by 30%.
            </li>
            <li>
              Integrated numerical &amp; visual data to reduce safety incidents by 40%.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareerHistory;
