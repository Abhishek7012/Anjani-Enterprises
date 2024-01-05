import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './JoinUsComponent.css';

const JoinUsComponent = () => {
  return (
    <section className="join-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Join Us</h2>
            <p>Explore exciting opportunities to join our team and contribute to our mission.</p>
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsComponent;
