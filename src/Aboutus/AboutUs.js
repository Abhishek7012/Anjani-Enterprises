import React from 'react';
import './AboutUs.css'; 
import aboutImage from '../images/aboutus.jpg'; 

const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <h2>About QUIXPAY</h2>
        <p>
          Here at QUIXPAY, we're revolutionizing the use and accessibility of financial services.
          Our company was founded to empower people and organizations with creative financial solutions.
          We use state-of-the-art technology to expedite, personalize, and simplify financial transactions.
          Our goal is to close the gap that exists between conventional financial services and cutting-edge,
          technologically advanced solutions. Our goal is to establish a smooth and inclusive financial ecosystem
          by fusing the most recent technological developments with our wealth of financial knowledge.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
