import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './PaymentServices.css';
// import Picture1 from '../images/Picture1.jpg'; 
 import Picture2 from '../images/Picture2.jpg'; 
 import Picture3 from '../images/Picture3.jpg'; 
 import DTH from '../images/DTH.jpg'; 
 import Picture5 from '../images/Picture5.jpg'; 
 import Picture6 from '../images/Picture6.jpg'; 
 import Adhar from '../images/Adhar.jpg'; 
 import image9 from '../images/image9.jpg'; 
 import image10 from '../images/image10.jpg'; 
 import image11 from '../images/image11.jpg'; 
const PaymentServices = () => {
  return (
    <div className="container mt-5">
      <div className="main-heading">
        <h1>Services</h1>
      </div>

      <div className="sub-heading">
        <h2>Payment Services</h2>
      </div>

      <div className="row align-items-center payment-section">
        <div className="col-md-6">
          <h2>Cash Management System</h2>
          <p>
          QUIXPAY retail outlets serve as EMI collection terminals for numerous non-bank financial companies (NBFCs) throughout India. The consumer must first provide accurate information about their loan or EMI ID, such as their loan number and allotment ID, for the transaction to be completed. The customer receives a confirmation on his or her mobile number after the transaction is finished. With more than 10,000 operational retail touchpoints nationwide, QUIXPAY has reduced the gap between customers and NBFCs for the collection of EMIs.
          </p>
        </div>
        <div className="col-md-6">
          <img src={Picture2} alt="Picture2 1" className="img-fluid" />
          {/* <img src="image2.jpg" alt="Image 2" className="img-fluid" /> */}
        </div>
      </div>

      <div className="row align-items-center payment-section alternate-section">
        <div className="col-md-6 order-md-2">
          <h2>Bharat Bill Payment System</h2>
          <p>
          The QUIXPAY platform enables its retailers to pay utility bills on behalf of their clients, including those for gas, electricity, water, fixed-line services, municipal taxes, etc. To utilize this service, they simply stroll up to the closest QUIXPAY retail touchpoint. Because QUIXPAY is an institution recognized as an agent under the Bharat Bill Payment System (BBPS), clients can use its retail locations to access these services for extended hours. The customer's account is updated instantly with the real-time transaction. We take great pride in providing our customers with the ease of paying numerous utility bills in one location.
          </p>
        </div>
        <div className="col-md-6 order-md-1">
          <img src={Picture6} alt="Picture2 3" className="img-fluid" />
        </div>
      </div>

      <div className="row align-items-center payment-section">
        <div className="col-md-6">
          <h2>Mobile Recharge</h2>
          <p>
          It's now easier than ever to recharge data and mobile cards. Retailers can use the QUIXPAY platform to instantly replenish all operators' mobile and data cards. Customers may easily utilize this facility because they only need to go to the closest QUIXPAY retail location rather than looking for the official operator store. Due to QUIXPAY's connection with all major operators, recharges can occur instantly.
          </p>
        </div>
        <div className="col-md-6">
          <img src={Picture3} alt="Picture2 4" className="img-fluid" />
        </div>
      </div>

      <div className="row align-items-center payment-section alternate-section">
        <div className="col-md-6 order-md-2">
          <h2>DTH Recharge</h2>
          <p>
          DTH plan recharging is available to more than only operators or brand outlets. Retailers who accept QUIXPAY can recharge their clients' DTH for all major direct-to-home providers. Because of QUIXPAY's partnerships with all of these operators and service providers, shops can offer real-time, efficient recharge services. Consumers must walk to the closest retail location and give their DTH number to the employee there.
          </p>
        </div>
        <div className="col-md-6 order-md-1">
          <img src={DTH} alt="Picture2 5" className="img-fluid" />
        </div>
      </div>

      <div className="row align-items-center payment-section">
        <div className="col-md-6">
          <h2>Aadhar ATM</h2>
          <p>
          The Aadhaar ATM is a digital payment system that enables financial transactions through biometric Aadhaar verification. It was created by the National Payment Corporation of India (NPCI), an umbrella body of RBI (Reserve Bank of India). Aadhar cardholders may efficiently conduct any transaction using the Aadhar Micro ATM by using their Unique Identification Number.           </p>
        </div>
        <div className="col-md-6">
          <img src={Picture5} alt="Picture2 6" className="img-fluid" />
        </div>
      </div>

      <div className="sub-heading">
        <h2>Banking Services</h2>
      </div>

      <div className="row align-items-center payment-section">
        <div className="col-md-6">
          <h2>Aadhaar Enabled Payment System</h2>
          <p>
          With QUIXPAY Retail touchpoint right next door, you can take care of all your banking needs without having to look for your bank. Customers can swiftly withdraw, deposit, and transfer cash as well as get Bank statements using the Aadhaar Enabled Payment Service (AEPS), which uses biometric verification and Aadhaar data in place of signatures or debit card information. Customers can use this service without physically visiting a bank branch. Customers can therefore visit the closest QUIXPAY retail touchpoints and complete all of these transactions using their Aadhaar Data and Biometric Authentication there rather than looking for an ATM or a bank branch.          </p>
        </div>
        <div className="col-md-6">
          <img src={Adhar}alt="Adhar 7" className="img-fluid" />
          {/* <img src="image8.jpg" alt="Image 8" className="img-fluid" /> */}
        </div>
      </div>

      <div className="row align-items-center payment-section alternate-section">
        <div className="col-md-6 order-md-2">
          <h2>Domestic Money Remittance</h2>
          <p>
          Money transfers may be required at any time. It frequently comes up outside of business hours. You may send money to any Indian bank that accepts NEFT and IMPS promptly after business hours with QUIXPAY Money Transfer. Senders can effortlessly transfer money to any QUIXPAY retail outlet in India. Within ten seconds, the beneficiary's bank account is credited with the funds that were sent to them. The servers used to conduct these customer transactions are extremely secure. Consumers can use any method to give the retailers the transaction amount. Under RBI-approved criteria, QUIXPAY enables money remittance for PPI and Banking Correspondent license holders.          </p>
        </div>
        <div className="col-md-6 order-md-1">
          <img src={image9} alt="Payment 9" className="img-fluid" />
        </div>
      </div>

      <div className="row align-items-center payment-section">
        <div className="col-md-6">
          <h2>UPI Cash through QR</h2>
          <p>
          Through its QR Code, QUIXPAY provides a scan and pay option in the digital age, when most consumers find carrying cash to be a hardship. Customers can now use any service from QUIXPAY retail contact points, such as hotel reservations, travel ticket booking, utility payments, and recharges, and pay with a QR code scan directly from their wallet without using cash. It's the simplest and fastest method of payment.          </p>
        </div>
        <div className="col-md-6">
          <img src={image10} alt="Payment 10" className="img-fluid" />
        </div>
      </div>

      <div className="row align-items-center payment-section alternate-section">
        <div className="col-md-6 order-md-2">
          <h2>MPOS Mini ATM Device</h2>
          <p>
          Frequently, we are unable to locate an ATM close by when we are low on cash and need to make payments. Through its network of retail locations, QUIXPAY provides you with a cash withdrawal solution to address this issue. The mPOS/MICRO ATM Device from QUIXPAY offers a great deal of ease in enabling you to pay for the goods or services you buy or to withdraw cash from a retail establishment. Using this device, you can withdraw up to ₹10,000 by using the debit or ATM card of any bank. Additionally, card acceptance can be enabled at the customer's doorstep with this ultraportable device.          </p>
        </div>
        <div className="col-md-6 order-md-1">
          <img src={image11} alt="Payment 11" className="img-fluid" />
        </div>
      </div>


    </div>
  );
};

export default PaymentServices;



