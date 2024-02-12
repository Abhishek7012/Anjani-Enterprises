import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './PaymentServices.css';
 import Picture1 from '../images/analysis3.png'; 
 import Picture3 from '../images/permits.jpg'; 
 import Picture4 from '../images/expertanj.webp'; 
 import Picture2 from '../images/landservice.jpg'; 
const PaymentServices = () => {
  return (
    <div className="container mt-5">
      <div className="main-heading">
        <h1>Services</h1>
      </div>

      

      <div className="row align-items-center payment-section">
        <div className="col-md-6">
          <h2>Prefeasibility analysis</h2>
          <ul className="arrow-bullets">
        <li>Evacuation feasibility study for wind and solar projects</li>
        <li>Identifying potential sites for wind and solar project development</li>
        <li>Land procurement for wind and solar projects</li>
      </ul>
        </div>
        <div className="col-md-6">
          <img src={Picture1} alt="Picture2 1" className="img-fluid" />
          {/* <img src="image2.jpg" alt="Image 2" className="img-fluid" /> */}
        </div>
      </div>

      <div className="row align-items-center payment-section alternate-section">
        <div className="col-md-6 order-md-2">
          <h2>Land Related Services</h2>
          <ul className="arrow-bullets">
        <li>Land Acquisition</li>
        <li>NA orders</li>
        <li>Land
aggregation</li>
        <li>Due
diligence</li>
        <li>Document verification </li>
       
      </ul>
        </div>
        <div className="col-md-6 order-md-1">
          <img src={Picture2} alt="Picture2 3" className="img-fluid" />
        </div>
      </div>

      <div className="row align-items-center payment-section">
        <div className="col-md-6">
          <h2>Permits and Approvals</h2>
          <ul className="arrow-bullets">
        <li>All approvals for 
solar projects execution &
commissioning</li>
        <li>All approvals for wind  projects execution &
commissioning</li>
        
       
      </ul>
        </div>
        <div className="col-md-6">
          <img src={Picture3} alt="Picture2 4" className="img-fluid" />
        </div>
      </div>

      <div className="row align-items-center payment-section alternate-section">
        <div className="col-md-6 order-md-2">
          <h2>Expert Services</h2>
          <ul className="arrow-bullets">
        <li>AAI(Airports Authority of India) Approvals</li>
        <li>MOD(Ministry of Defence) Approvals</li>
        
       
      </ul>
        </div>
        <div className="col-md-6 order-md-1">
          <img src={Picture4} alt="expertanj" className="img-fluid" />
        </div>
      </div>

     


    </div>
  );
};

export default PaymentServices;



