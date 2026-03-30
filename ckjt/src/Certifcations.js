import './Certifications.css';

function Certifications() {
  return (
    <section className="certifications-section">
      <div className="cert-container">
        
        <div className="company-details">
          <h3>Company Details</h3>
          <p><strong>SAIT:</strong> 63537003</p>
          <p><strong>SAIBA:</strong> BAP(SA)9841</p>
          <p><strong>BEE LEVEL 1 STATUS</strong></p>
        </div>

        <div className="cert-content">
          <span className="cert-label">TRADE ASSOCIATIONS</span>
          <h2>Registration</h2>
          
          <div className="logos-grid">
            <img src="/logos/XERO LOGO.png" alt="Xero" />
            <img src="/logos/SARS LOGO.png" alt="SARS" />
            <img src="/logos/SAIT LOGO.png" alt="SAIT" />
            <img src="/logos/Quickbooks-Logo.png" alt="Quickbooks" />
            <img src="/logos/CIPC LOGO.png" alt="CIPC" />
            <img src="/logos/CIBA LOGO.png" alt= "CIBA"/>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Certifications;