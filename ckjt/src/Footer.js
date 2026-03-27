import './Footer.css';

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
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
            <a href="#"><i className='bx bxl-instagram'></i></a>
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
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Info</h4>
          <ul className="contact-list">
            <li>
              <i className='bx bx-phone'></i>
              <span>+27 (0) 123 456 789</span>
            </li>
            <li>
              <i className='bx bx-envelope'></i>
              <span>info@ckjtfinancial.co.za</span>
            </li>
            <li>
              <i className='bx bx-map'></i>
              <span>Johannesburg, South Africa</span>
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