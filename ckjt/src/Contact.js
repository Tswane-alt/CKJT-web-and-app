import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to take your business to the next level? Contact our team to 
            discuss how we can help you achieve your financial goals with expert 
            guidance and tailored solutions.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">
                <i className='bx bx-envelope'></i>
              </div>
              <div className="method-details">
                <h4>Email Us</h4>
                <p>info@ckjtfinancial.co.za</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">
                <i className='bx bx-phone-call'></i>
              </div>
              <div className="method-details">
                <h4>Call Us</h4>
                <p>+27 12 345 6789</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">
                <i className='bx bx-map'></i>
              </div>
              <div className="method-details">
                <h4>Visit Us</h4>
                <p>Johannesburg, South Africa</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-icon"><i className='bx bxl-linkedin'></i></a>
            <a href="#" className="social-icon"><i className='bx bxl-twitter'></i></a>
            <a href="#" className="social-icon"><i className='bx bxl-instagram'></i></a>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@company.com" />
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <input type="text" placeholder="Your Company" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your business needs..." rows="5"></textarea>
              <span className="char-count">0/500 characters</span>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;