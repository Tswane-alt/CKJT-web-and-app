import './WhatWeDo.css';
import { motion } from 'framer-motion';

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
  viewport: { once: false, amount: 0.2 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariant = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

function WhatWeDo() {
  return (
    <div className="what-we-do-page">
      
      {/* Hero Section */}
      <motion.section 
        className="wwd-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="wwd-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What We Do
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive financial solutions tailored to your business needs
          </motion.p>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="wwd-services"
        {...fadeUp}
      >
        <div className="wwd-container">
          <h2>Our Services</h2>
          
          <motion.div 
            className="service-detail"
            variants={cardVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="service-icon">
            <i className='bx bx-calculator'></i>
          </div>
            <div className="service-detail-content">
              <h3>Taxation</h3>
              <p>
                Comprehensive tax compliance services, strategic tax planning, and expert guidance 
                to ensure your business meets all regulatory requirements while optimizing tax efficiency.
              </p>
              <ul>
                <li>Personal Income Tax Returns</li>
                <li>Corporate Tax Returns</li>
                <li>VAT Registration & Returns</li>
                <li>PAYE & UIF Administration</li>
                <li>Tax Planning & Consulting</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="service-detail"
            variants={cardVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="service-icon">
            <i className='bx bx-line-chart'></i>
          </div>
            <div className="service-detail-content">
              <h3>Financial & Risk Advisory</h3>
              <p>
                Strategic financial planning and risk management solutions that help you make 
                informed decisions, mitigate potential risks, and achieve sustainable business growth.
              </p>
              <ul>
                <li>Financial Planning & Analysis</li>
                <li>Risk Assessment & Management</li>
                <li>Investment Advisory</li>
                <li>Cash Flow Management</li>
                <li>Business Valuation</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="service-detail"
            variants={cardVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.3 }}
          >
             <div className="service-icon">
            <i className='bx bx-briefcase-alt-2'></i>
          </div>
            <div className="service-detail-content">
              <h3>Business Management & Consulting</h3>
              <p>
                Expert business consulting services providing innovative strategies, problem-solving tools, 
                and guidance tailored to help your business tackle complex situations and flourish.
              </p>
              <ul>
                <li>Strategic Business Planning</li>
                <li>Operational Efficiency Consulting</li>
                <li>Change Management</li>
                <li>Performance Management</li>
                <li>Business Process Optimization</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="service-detail"
            variants={cardVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="service-icon">
            <i className='bx bx-book-content'></i>
          </div>
            <div className="service-detail-content">
              <h3>Accounting & Bookkeeping</h3>
              <p>
                Accurate, timely financial records and comprehensive accounting services to keep your 
                business compliant and provide clear insights into your financial position.
              </p>
              <ul>
                <li>Monthly Bookkeeping</li>
                <li>Financial Statements Preparation</li>
                <li>Accounts Payable & Receivable</li>
                <li>Bank Reconciliations</li>
                <li>Payroll Processing</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="service-detail"
            variants={cardVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="service-icon">
            <i className='bx bx-building'></i>
          </div>
            <div className="service-detail-content">
              <h3>Corporate Secretarial Services</h3>
              <p>
                Ensure your company remains compliant with all statutory requirements and corporate 
                governance best practices.
              </p>
              <ul>
                <li>Company Registration</li>
                <li>Annual Returns Filing</li>
                <li>CIPC Compliance</li>
                <li>Company Secretarial Services</li>
                <li>BEE Certification Assistance</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Price List Section */}
      <motion.section 
        className="price-list"
        {...fadeUp}
      >
        <div className="wwd-container">
          <h2>Our Pricing</h2>
          <p className="pricing-subtitle">Transparent, competitive pricing tailored to your needs</p>

          <motion.div 
            className="pricing-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.2 }}
          >
            
            <motion.div 
              className="pricing-card"
              variants={cardVariant}
            >
              <h3>Starter</h3>
              <div className="price">
                <span className="currency">R</span>
                <span className="amount">2,500</span>
                <span className="period">/month</span>
              </div>
              <ul className="pricing-features">
                <li>✓ Monthly Bookkeeping</li>
                <li>✓ Financial Statements</li>
                <li>✓ Basic Tax Returns</li>
                <li>✓ Email Support</li>
              </ul>
              <a href="/contact" className="pricing-btn">Get Started</a>
            </motion.div>

            <motion.div 
              className="pricing-card featured"
              variants={cardVariant}
            >
              <div className="popular-badge">Most Popular</div>
              <h3>Professional</h3>
              <div className="price">
                <span className="currency">R</span>
                <span className="amount">5,500</span>
                <span className="period">/month</span>
              </div>
              <ul className="pricing-features">
                <li>✓ Everything in Starter</li>
                <li>✓ Payroll Processing</li>
                <li>✓ VAT Returns</li>
                <li>✓ Tax Planning</li>
                <li>✓ Priority Support</li>
              </ul>
              <a href="/contact" className="pricing-btn">Get Started</a>
            </motion.div>

            <motion.div 
              className="pricing-card"
              variants={cardVariant}
            >
              <h3>Enterprise</h3>
              <div className="price">
                <span className="currency">R</span>
                <span className="amount">Custom</span>
              </div>
              <ul className="pricing-features">
                <li>✓ Everything in Professional</li>
                <li>✓ Financial Advisory</li>
                <li>✓ Risk Management</li>
                <li>✓ Dedicated Account Manager</li>
                <li>✓ Custom Solutions</li>
              </ul>
              <a href="/contact" className="pricing-btn">Contact Us</a>
            </motion.div>

          </motion.div>

          <p className="pricing-note">
            * Prices are indicative and may vary based on your specific requirements. 
            Contact us for a personalized quote.
          </p>

          {/* Download Price List Section */}
          <motion.div 
            className="download-pricelist"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3>Need a detailed breakdown?</h3>
            <p>Download our comprehensive price list for all services</p>
            <a href="/pricelist.pdf" download className="download-btn">
              <i className='bx bx-download'></i>
              Download Price List (PDF)
            </a>
          </motion.div>

        </div>
      </motion.section>

    </div>
  );
}

export default WhatWeDo;