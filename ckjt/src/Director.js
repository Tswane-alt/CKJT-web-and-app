import './Director.css';
import DirectorPic from './Director.png';

function Director() {
  return (
    <section className="director" id="about">
      <div className="director-container">
        
        <div className="director-content">
          <h2>Meet The Director</h2>
          <h3>Dorcus M.M Maloka</h3>
          
          <p>
            CKJT Financial Services was founded by Dorcus in 2019. She obtained 
            her qualification in Financial Information Systems with a concentration in 
            cost management accounting, financial accounting, and taxation from 
            the University of Johannesburg.
          </p>

          <p>
            Dorcus is a licensed Certified Business Accountant in Practice and a Tax 
            Practitioner. She is highly qualified and experienced, having worked at a 
            number of private accounting firms providing services such as payroll 
            administration, tax compliance services, and accounting to individuals 
            and corporations for over 10 years.
          </p>

          <p>
            Dorcus M.M Maloka is a member of the South African Institute of 
            Business Accountants and South African Institute of Tax Professionals.
          </p>

          <div className="stats">
            <div className="stat-card">
              <h4>10+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h4>500+</h4>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="director-image">
          <img src={DirectorPic} alt="Dorcus M.M Maloka" />
        </div>

      </div>
    </section>
  );
}

export default Director;