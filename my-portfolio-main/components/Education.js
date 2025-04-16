import React from 'react';
import './Timeline.css';

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>M.S. in Data Science</h3>
          <p className="location-date">Pace University, New York City, NY | May 2024</p>
          <p>GPA: 3.72/4</p>
        </div>
        <div className="timeline-item">
          <h3>B.Tech in Computer Science &amp; Technology Engineering</h3>
          <p className="location-date">SRM Institute of Science and Technology, Chennai, India | September 2022</p>
          <p>GPA: 8.99/10</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
