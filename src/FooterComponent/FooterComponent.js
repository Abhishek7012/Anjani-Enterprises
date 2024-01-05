// FooterComponent.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FooterComponent.css';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>
              <strong>Phone:</strong> +91 7898700549
            </p>
            <p>
              <strong>Email:</strong> info@quixpay.in
            </p>
            <p>
           <a href="https://www.google.com/maps/dir/22.7632451,75.9114716/quintus+tech+pvt.+ltd/@22.7562074,75.892987,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x39631d66b1470cd9:0x71666e1ea8060b5f!2m2!1d75.8950892!2d22.7489242?entry=ttu" target="_blank" rel="noopener noreferrer"> <strong>Get Direction</strong> </a>
            </p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/abhishek-mishra-a929951a3/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" title="LinkedIn"></i>
              </a>
              <a href="https://www.instagram.com/quintus_tech/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" title="Instagram"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook" title="Facebook"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Linked Account</h3>
            {/* <p>
              <a href="https://www.linkedin.com/company/quintustech/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </p> */}
            <p>
              <strong> Portfolio Download : </strong>
              <a href="https://abhishek7012.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">iOS</a> |
              <a href="https://abhishek7012.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">Android</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 QuixPay. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
