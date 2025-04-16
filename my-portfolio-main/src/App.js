import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Education from './components/Education';
import CareerHistory from './components/CareerHistory';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Scroll reveal animation using IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <div className="section" id="expertise">
          <Expertise />
        </div>
        <div className="section" id="education">
          <Education />
        </div>
        <div className="section" id="career-history">
          <CareerHistory />
        </div>
        <div className="section" id="projects">
          <Projects />
        </div>
        <div className="section" id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
