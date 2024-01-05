// OurTeamComponent.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurTeamComponent.css';
import myavatar from '../images/my-avatar.png'; 
import avatar1 from '../images/avatar-1.png'; 
import myavatar2 from '../images/avatar-4.png'; 


const OurTeamComponent = () => {
  return (
    <div className="container mt-5">
      <div className="main-heading">
        <h1>Our Team</h1>
      </div>

      <div className="row align-items-center team-section">
        <div className="col-md-6 order-md-1">
          <img src={myavatar} alt="Amit Kumar Khare" className="img-fluid" />
        </div>
        <div className="col-md-6 order-md-2">
          <h2>Amit Kumar Khare</h2>
          <p>
          A self-driven Pioneer leader, with a reputation for perseverance and success in marketing and sales efforts. Having track record of 20+ years of rich experience in banking, NBFCs & Fintech industry. An analytical thinker with ability to work under pressure, an initiative taker having quality of persistence to achieve goal, influencer with exceptional communication skills, Achievement-Oriented, A risk taker with a drive to move forward. And a self-independent entrepreneur, having faith and commitment with an ambition to be independent.          </p>
        </div>
      </div>

      <div className="row align-items-center team-section alternate-section">
        <div className="col-md-6">
          <h2>Vikash Singh</h2>
          <p>
          Results-oriented project delivery management expert with a track record of raising productivity, quality, and customer satisfaction. resolute, vivacious, and laser-focused team leader who guides high-achieving groups in making adjustments and advancements. analytical problem-solver and creative thinker who has the track record to oversee projects from start to finish in hectic, deadline-driven work settings          </p>
        </div>
        <div className="col-md-6">
          <img src={avatar1} alt="Vikash Singh" className="img-fluid" />
        </div>
      </div>

      <div className="row align-items-center team-section">
        <div className="col-md-6 order-md-1">
          <img src={myavatar2} alt="Mitesh Goud" className="img-fluid" />
        </div>
        <div className="col-md-6 order-md-2">
          <h2>Mitesh Goud</h2>
          <p>
          Mitesh has managed B2B fintech solutions in the payment, bank, insurance, lending, and loyalty spaces for more than 10 years. His area of expertise is in developing and growing consumer platforms that offer financial services via digital marketing, business analytics, product development, and market launch planning.          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeamComponent;
