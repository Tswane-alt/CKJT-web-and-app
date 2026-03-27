import logo from './logo.png';
import Hero from './Hero';
import Services from './Services';
import WhatWeDo from './WhatWeDo';
import FindUs from './FindUs';
import Director from './Director'; 
import Certifications from './Certifcations';     
import WhyChoose from './WhyChoose';
import CoreValues from './CoreValues';    
import Contact from './Contact';          
import Footer from './Footer';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './Nav.css';

// Reusable fade-in animation config
const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
  viewport: { once: false, amount: 0.2 }
};

// Stacking card animation
const stackUp = {
  initial: { opacity: 0, scale: 0.95, y: 50 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: false, amount: 0.15 }
};

// Navigation Bar Component
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/what-we-do">What We Do</Link></li>
        <li><Link to="/director">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <a href="https://wa.me/+27150071003" className="navbar-btn">
        Get A Quote
      </a>
    </nav>
  );
}

// Home Page Component
function HomePage() {
  return (
    <>
      <Hero />
      <motion.div {...fadeUp}><Services /></motion.div>
      <motion.div {...stackUp}><Director /></motion.div>
      <motion.div {...fadeUp}><Certifications /></motion.div>
      <motion.div {...stackUp}><WhyChoose /></motion.div>
      <motion.div {...fadeUp}><CoreValues /></motion.div>
      <motion.div {...stackUp}><Contact /></motion.div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="Website">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/director" element={<Director />} />
          <Route path="/contact" element={<FindUs />} />
        </Routes>

        <motion.div {...fadeUp}>
          <Footer />
        </motion.div>

        {/* WhatsApp Float */}
        <a href="https://wa.me/+27150071003" className="whatsapp-float">
          <i className="bx bx-microphone"></i>
          Talk with Us
        </a>
      </div>
    </Router>
  );
}

export default App;