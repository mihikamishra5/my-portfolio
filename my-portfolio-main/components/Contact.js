import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="section-title">Contact</h2>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input type="text" id="name" className="form-input" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input type="email" id="email" className="form-input" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea id="message" className="form-input" required></textarea>
          </div>
          <button type="submit" className="form-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
