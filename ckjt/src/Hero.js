import './Hero.css';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    <section className="hero" id="home">

      {/* Background Image Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>OUR BUSINESS IS TAKING CARE OF YOUR BUSINESS</h1>
        <p>We are committed to your success...Which is why all of our services cover the essentials you need to make your finances easy and effortless</p>
        <a href="https://wa.me/+27660907191" className="hero-btn">Get A Quote</a>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="arrow">↓</div>
        </div>
      </div>

     

    </section>
    </motion.div>
  );
}

export default Hero;