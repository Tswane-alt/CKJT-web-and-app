import './CoreValues.css';

function CoreValues() {
  return (
    <section className="core-values">
      <div className="values-container">
        
        <h2>Our Core Values</h2>

        <div className="values-grid">
          
          <div className="value-item">
            <div className="value-icon">
              <i className='bx bx-shield-alt-2'></i>
            </div>
            <h3>Honesty & Integrity</h3>
            <p>We adhere to the highest ethical standards in the financial sector, always treating our clients with honesty and integrity.</p>
          </div>

          <div className="value-item">
            <div className="value-icon">
              <i className='bx bx-lock-alt'></i>
            </div>
            <h3>Confidential & Trustworthy</h3>
            <p>Your business information is handled with complete confidentiality and trust, ensuring your peace of mind.</p>
          </div>

          <div className="value-item">
            <div className="value-icon">
              <i className='bx bx-bulb'></i>
            </div>
            <h3>Innovative & Efficient</h3>
            <p>We embrace digital commitment and innovative solutions to deliver efficient, high-quality financial services.</p>
          </div>

          <div className="value-item">
            <div className="value-icon">
              <i className='bx bx-user-check'></i>
            </div>
            <h3>Accountable & Reliable</h3>
            <p>We take accountability seriously, providing consistent, prudent, and reliable services you can depend on.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CoreValues;