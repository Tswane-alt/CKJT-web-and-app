import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-column">
          <h3>CKJT Financial Services</h3>
          <p>
            Professional taxation, accounting, and business consulting services helping 
            businesses achieve financial success and compliance.
          </p>
          <div className="footer-social">
            <a href=""><i className='bx bxl-facebook'></i></a>
            <a href="https://www.tiktok.com/@ckjt.financial.se"><i className='bx bxl-tiktok'></i></a>
            <a href="https://www.linkedin.com/company/cktj-financial-services/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B9snWaLgZSvKWFc0WNJL%2BJQ%3D%3D"><i className='bx bxl-linkedin'></i></a>
            <a href="https://www.instagram.com/ckjt.financialservices/?hl=en"><i className='bx bxl-instagram'></i></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#services">Taxation</a></li>
            <li><a href="#services">Financial Advisory</a></li>
            <li><a href="#services">Risk Advisory</a></li>
            <li><a href="#services">Business Consulting</a></li>
            <li><a href="#services">Accounting & Bookkeeping</a></li>
            <li><a href="#services">Corporate Secretarial</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
           
            <li><Link to="/">Home</Link></li>
            <li><Link to="/what-we-do">Services</Link></li>
            <li><Link to="/director">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Info</h4>
          <ul className="contact-list">
            <li>
              <i className='bx bx-phone'></i>
              <span>+27 15 007 1003</span>
            </li>
            <li>
              <i className='bx bx-envelope'></i>
              <span>Info@ckjt.co.za</span>
            </li>
            <li>
              <i className='bx bx-map'></i>
              <span>21A President Paul Kruger Street, Polokwane, 0699, South Africa</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2024 CKJT Financial Services. All rights reserved.</p>
        
      </div>
    </footer>
  );
}

export default Footer;