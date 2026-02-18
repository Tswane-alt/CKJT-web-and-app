import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Image Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>TAKING CARE OF <br /> YOUR BUSINESS</h1>
        <p>We are committed to your success...Which is why all of our services cover the essentials you need to make your finances easy and effortless</p>
        <a href="https://wa.me/1234567890" className="hero-btn">Get A Quote</a>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="arrow">↓</div>
        </div>
      </div>

     

    </section>
  );
}

export default Hero;