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
              <strong>Phone:</strong> +91 8447120002/ +91 9343171967
            </p>
            <p>
              <strong>Email:</strong> consultanjani1@gmail.com
            </p>
            <p>
           <a href="https://www.google.com/maps/dir/Bhopal,+Madhya+Pradesh/Beauty+Package,+bda+complex,+m-13,+near+shekhar+hospital,+Manisha+Market,+Sector+A,+Shahpura,+Bhopal,+Madhya+Pradesh+462039/@23.2015992,77.4253493,17.85z/data=!4m13!4m12!1m5!1m1!1s0x397c428f8fd68fbd:0x2155716d572d4f8!2m2!1d77.412615!2d23.2599333!1m5!1m1!1s0x397c43a98ee50a1d:0xef3de85016f0c2a!2m2!1d77.426232!2d23.20137?entry=ttu" target="_blank" rel="noopener noreferrer"> <strong>Get Direction</strong> </a>
            </p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" title="LinkedIn"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" title="Instagram"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook" title="Facebook"></i>
              </a>
            </div>
          </div>
         
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Anjani Enterprises. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
