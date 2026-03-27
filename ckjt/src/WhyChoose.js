import './WhyChoose.css';

function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-container">
        
        <h2>Why Choose Us</h2>

        <div className="why-intro">
          <p>
            We are trusted business consultants where your business success is of the optimum importance to us. 
            We offer extensive tax and accounting experience, and our passion is delivering great customer service.
          </p>
          <p>
            Our focus is in helping your business flourish and giving you peace of mind. We take great pride in 
            providing high-quality accounting services, innovative business strategies, tax strategies, and financial 
            management that is tailor-made for your business.
          </p>
          <p>
            We maintain the overall company compliance status, ensuring your business operates smoothly and meets 
            all regulatory requirements.
          </p>
        </div>

        <div className="mission-vision">
          <div className="mv-card">
            <div className="mv-icon" style={{ background: '#7ED957' }}></div>
            <h3>Our Mission</h3>
            <p>
              To provide exceptional financial services that empower businesses to achieve their goals 
              with confidence and clarity.
            </p>
          </div>

          <div className="mv-card">
            <div className="mv-icon" style={{ background: '#0B1F3F' }}></div>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted financial partner for businesses across South Africa, known for 
              excellence and integrity.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;