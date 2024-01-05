// NavComponent.js
import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './Navbar.css'; 

const NavComponent = () => {
  const handleCall = () => {
    window.location.href = '8989898989';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:Info@Quixpay.in';
  };

  const handleDownload = () => {
    window.location.href = 'https://abhishek7012.github.io/Portfolio/';
  };

  return (
    <Navbar bg="dark" variant="dark" className="custom-navbar">
      <Navbar.Brand className="ml-3">
        <div className="info-container">
          <div className="contact-info" onClick={handleCall}>
           8989898989
          </div>
          <div className="email-info" onClick={handleEmail}>
            Info@Quixpay.in
          </div>
          <div className="timing-info">Open Time : 9AM-6PM</div>
        </div>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Button variant="outline-light" className="download-button" onClick={handleDownload}>
          Download Now
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavComponent;
