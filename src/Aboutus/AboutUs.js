import React from 'react';
import './AboutUs.css'; 
import aboutImage from '../images/aboutus.jpg'; 

const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <h1>ABOUT US</h1>
        <p>
        Welcome to <strong>Anjani Enterprises</strong>, where we're dedicated to ushering in a greener future by providing end-to-end solutions for the renewable energy industry. As governments and organizations globally emphasize the urgency of reducing our reliance on fossil fuels, we're here to answer the call. Our experienced team is committed to meeting the needs of our customers by delivering seamless project operations and addressing the increasing demands of compliance. Join us in our mission to make a positive impact on the world through sustainable energy solutions.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
