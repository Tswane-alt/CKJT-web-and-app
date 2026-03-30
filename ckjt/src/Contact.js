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
                <p>Info@ckjt.co.za</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">
                <i className='bx bx-phone-call'></i>
              </div>
              <div className="method-details">
                <h4>Call Us</h4>
                <p>+27 87 378 4912</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">
                <i className='bx bx-map'></i>
              </div>
              <div className="method-details">
                <h4>Visit Us</h4>
                <p>21A President Paul Kruger Street, Polokwane, 0699, South Africa</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/company/cktj-financial-services/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B9snWaLgZSvKWFc0WNJL%2BJQ%3D%3D" className="social-icon"><i className='bx bxl-linkedin'></i></a>
            <a href="https://www.tiktok.com/@ckjt.financial.se" className="social-icon"><i className='bx bxl-tiktok'></i></a>
            <a href="https://www.instagram.com/ckjt.financialservices/?hl=en" className="social-icon"><i className='bx bxl-instagram'></i></a>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="James" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="james@yourcompany.com" />
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