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
            <img src="/logos/xero.png" alt="Xero" />
            <img src="/logos/sait.png" alt="SAIT" />
            <img src="/logos/sage.png" alt="Sage Pastel" />
            <img src="/logos/saiba.png" alt="SAIBA" />
            <img src="/logos/Sars.png" alt="SARS" />
            <img src="/logos/ciba.png" alt= "SARS"/>
            <img src="/logos/quickbooks.png" alt="QuickBooks" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Certifications;