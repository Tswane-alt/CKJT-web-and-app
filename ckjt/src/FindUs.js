import './FindUs.css';
import Contacts from './Contact';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    <>
    <section className="contact-page" id="contact">
      <div className="contact-page-container">
        
        {/* Map Section */}
        <div className="contact-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.7895!2d28.0329!3d-26.1867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0b6c5b1%3A0x3e5e7a7b5b6c5b1!2s21A%20President%20Paul%20Kruger%20St%2C%20Polokwane%20Central%2C%20Polokwane%2C%200700!5e0!3m2!1sen!2sza!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="CKJT Office Location"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="contact-info-page">
          <span className="contact-label">CONTACT US</span>
          <h2>Let's Get in Touch</h2>
          <p className="contact-page-subtitle">
            Give us a call to book an appointment or visit our offices for your financial service needs
          </p>

          <div className="contact-details">
            
            <div className="contact-detail-item">
              <div className="contact-detail-icon" style={{ background: '#7ED957' }}>
                <i className='bx bx-phone-call'></i>
              </div>
              <div className="contact-detail-content">
                <h4>Call Us: <span className="highlight">015 007 1003</span></h4>
                <p>Operating Hours: 08:00 to 16:30 on Mon-Thu</p>
                <p>Operating Hours: 08:00 to 16:00 on Friday</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon" style={{ background: '#7ED957' }}>
                <i className='bx bx-envelope'></i>
              </div>
              <div className="contact-detail-content">
                <h4>Email:</h4>
                <p>Info@ckjt.co.za</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon" style={{ background: '#7ED957' }}>
                <i className='bx bx-map'></i>
              </div>
              <div className="contact-detail-content">
                <h4>Address:</h4>
                <p>21A President Paul Kruger Street, Polokwane, 0699</p>
              </div>
            </div>

          </div>

          <div className="social-follow">
            <p>Follow us on <strong>Facebook</strong>, Follow us on <strong>Twitter</strong>, Follow us on <strong>Youtube</strong> and also Follow us on <strong>Instagram</strong></p>
          </div>

        </div>

      </div>
    </section>

    <Contacts />
    </>
    </motion.div>
  );
  
}

export default Contact;