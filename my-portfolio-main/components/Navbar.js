import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--bg-dark', '#f5f5f7');
      root.style.setProperty('--text-light', '#0f0f13');
    } else {
      root.style.setProperty('--bg-dark', '#0f0f13');
      root.style.setProperty('--text-light', '#ffffff');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="navbar">
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      <ul>
        <li><a href="#expertise">Expertise</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#career-history">Career History</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
