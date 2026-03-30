import './Services.css';

function Services() {
  return (
    <section className="services" id="services">
      
      <div className="services-header">
        <h2>Our Services</h2>
        <p>Comprehensive financial and business solutions designed to help your business achieve success and peace of mind</p>
      </div>

      <div className="services-grid">
        
        <div className="service-card">
          <div className="service-icon">
            <i className='bx bx-calculator'></i>
          </div>
          <h3>Taxation</h3>
          <p>Comprehensive tax compliance services, strategic tax planning, and expert guidance to ensure your business meets all regulatory requirements while optimizing tax efficiency.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className='bx bx-briefcase-alt-2'></i>
          </div>
          <h3>Business Management and Consulting</h3>
          <p>Expert business consulting services providing innovative strategies, problem-solving tools, and guidance tailored to help your business tackle complex situations and flourish.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className='bx bx-book-content'></i>
          </div>
          <h3>Accounting and Bookkeeping</h3>
          <p>Professional accounting and bookkeeping services including payroll administration, financial reporting, and comprehensive record-keeping to maintain your company compliance status.</p>
        </div>


        <div className="service-card">
          <div className="service-icon">
            <i className='bx bx-line-chart'></i>
          </div>
          <h3>Financial and Risk Advisory</h3>
          <p>Strategic financial planning and risk management solutions that help you make informed decisions, mitigate potential risks, and achieve sustainable business growth.</p>
        </div>

        
      

        <div className="service-card">
          <div className="service-icon">
            <i className='bx bx-building'></i>
          </div>
          <h3>Corporate Secretarial Services</h3>
          <p>Complete corporate secretarial support ensuring your business maintains proper governance, regulatory compliance, and all necessary corporate documentation.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className='bx bx-palette'></i>
          </div>
          <h3>Graphic Design and Branding</h3>
          <p>Creative design solutions that build strong brand identity, professional marketing materials, and visual communications that set your business apart.</p>
        </div>

      </div>

    </section>
  );
}

export default Services;