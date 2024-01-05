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
              Build the largest branchless digital banking network that helps to  create  more progressive society through easy access to financial services.
            </p>
            <p>
            <strong>QUIX PAY</strong>  aims to contribute to accelerating the digital revolution, especially in rural areas, given the extensive market which rests there. One of the unique features of digital payments has been their ability to access the areas that even banks could not access. Though QUIXPAY digitalization campaign is yet to reach its optimum potential, our motto is to encourage smooth and easy digital transactions in remote parts of the country.
            </p>
            <p className="font-weight-bold">  <strong>QUIX BANKING</strong></p>
            <p>
              At QUIXPAY Technologies, we are committed to providing basic banking & financial services to everyone securely & easily. Our One Stop banking solutions offer services like Cash Deposit & Cash Withdrawal to the under-served population of India through our Urban and rural network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionComponent;
