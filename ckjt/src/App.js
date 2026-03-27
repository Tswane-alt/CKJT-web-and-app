import logo from './logo.png';
import Hero from './Hero';
import Services from './Services';
import Director from './Director';       
import WhyChoose from './WhyChoose';
import CoreValues from './CoreValues';    
import Contact from './Contact';          
import Footer from './Footer';
import './App.css';
import './Nav.css';


function App() {
  return (
    <div className="Website">
    <nav className="navbar">
      
      {/* Logo / Brand Name */}
      <div className="navbar-logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      {/* Nav Links */}
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">What We Do</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Button */}
      <a href="https://wa.me/1234567890" className="navbar-btn">
        Get A Quote
      </a>

    </nav>
     <Hero />
     <Services />
     <Director/>
     <WhyChoose/>
     <CoreValues/>
     <Contact/>
     <Footer/>

     
 
      {/* WhatsApp Float - shows on all pages */}
      <a href="https://wa.me/1234567890" className="whatsapp-float">
        <i class="bx bx-headphone-mic"  />
        Talk with Us
      </a>
    </div>
  );
}

export default App;
