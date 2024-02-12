import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './MissionComponent.css';
import aboutImage1 from '../images/mission1.jpg'; 
import aboutImage2 from '../images/vission.jpg'; 

const MissionComponent = () => {
  return (
    <div className="container mt-5 mission-container">
      <div className="row">
        <div className="col-md-6">
          {/* Left side with 2 images */}
          <div className="d-flex justify-content-between">
            <img src={aboutImage1}alt="mission" className="img-fluid mission-image" />
            <img src={aboutImage2} alt="vission" className="img-fluid mission-image" />
          </div>
        </div>
        <div className="col-md-6">
          {/* Right side with mission text */}
          <div className="mission-text">
            <h2 className="mb-4"> VISION & MISSION</h2>
           
            <p>
            At <strong>Anjani Enterprises</strong>, our mission is to be the trusted partner for our customers, offering a focused approach to ensure unparalleled business value in the wind and solar energy sector. We are committed to leveraging new technologies, advanced methodologies, and industry best practices to benefit our clients immensely. Through our dedication to innovation and excellence, we strive to lead the way in creating a sustainable future powered by renewable energy. Join us in our journey towards a greener, cleaner tomorrow.            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionComponent;
