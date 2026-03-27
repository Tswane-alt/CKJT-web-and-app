import { Link } from 'react-router-dom';
import './Nav.css';
import WhatWeDo from './WhatWeDo';
import FindUs from './FindUs';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/ckjtlogo.png" alt="CKJT Logo" />
      </Link>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to={WhatWeDo}>What We Do</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to={FindUs}>Contact</Link></li>
      </ul>

      <a href="https://wa.me/1234567890" className="whatsapp-btn">Let's Talk</a>
    </nav>
  );
}

export default Navbar;