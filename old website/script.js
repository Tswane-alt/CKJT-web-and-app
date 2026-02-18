// ========================================
// LOAD CONTENT FROM STORAGE
// ========================================

// Default content (fallback if nothing is saved)
const defaultContent = {
    companyName: 'CKJT Financial Services',
    tagline: 'Your Trusted Financial Partner',
    heroTitle: 'Building Your Financial Future',
    heroSubtitle: 'Expert guidance for wealth management, retirement planning, and investment strategies tailored to your goals',
    ctaButton: 'Get Started Today',
    servicesTitle: 'Our Services',
    service1Title: 'Wealth Management',
    service1Description: 'Comprehensive strategies to grow and protect your wealth across generations with personalized portfolio management',
    service2Title: 'Retirement Planning',
    service2Description: 'Secure your future with strategic retirement planning that ensures financial independence and peace of mind',
    service3Title: 'Investment Advisory',
    service3Description: 'Expert investment guidance backed by market research and decades of experience in financial markets',
    aboutTitle: 'Why Choose CKJT?',
    aboutDescription: 'With decades of experience in financial services, CKJT has helped thousands of clients achieve their financial goals. Our team of certified financial advisors brings expertise, integrity, and personalized attention to every client relationship. We believe in building long-term partnerships based on trust and proven results.',
    stat1Number: '25+',
    stat1Label: 'Years Experience',
    stat2Number: '5000+',
    stat2Label: 'Happy Clients',
    stat3Number: '$2B+',
    stat3Label: 'Assets Managed',
    contactTitle: 'Get In Touch',
    contactDescription: 'Ready to start your financial journey? Contact us today for a complimentary consultation with one of our expert advisors.',
    contactPhone: '+1 (555) 123-4567',
    contactEmail: 'info@ckjtfinancial.com',
    contactAddress: '21A Presdident PaulKruger Street, Polokwane,0699',
    contactHours: 'Mon-Fri: 8:00 AM - 4:00 PM',
    footerText: '© 2024 CKJT Financial Services. All rights reserved. Securities and advisory services offered through licensed professionals.'
};

// Function to load content from localStorage or use defaults
function loadContent() {
    const savedContent = localStorage.getItem('websiteContent');
    const content = savedContent ? JSON.parse(savedContent) : defaultContent;
    
    // Update all elements on the page
    document.getElementById('company-name').textContent = content.companyName;
    document.getElementById('tagline').textContent = content.tagline;
    document.getElementById('hero-title').textContent = content.heroTitle;
    document.getElementById('hero-subtitle').textContent = content.heroSubtitle;
    document.getElementById('cta-button').textContent = content.ctaButton;
    document.getElementById('services-title').textContent = content.servicesTitle;
    document.getElementById('service-1-title').textContent = content.service1Title;
    document.getElementById('service-1-description').textContent = content.service1Description;
    document.getElementById('service-2-title').textContent = content.service2Title;
    document.getElementById('service-2-description').textContent = content.service2Description;
    document.getElementById('service-3-title').textContent = content.service3Title;
    document.getElementById('service-3-description').textContent = content.service3Description;
    document.getElementById('about-title').textContent = content.aboutTitle;
    document.getElementById('about-description').textContent = content.aboutDescription;
    document.getElementById('stat-1-number').textContent = content.stat1Number;
    document.getElementById('stat-1-label').textContent = content.stat1Label;
    document.getElementById('stat-2-number').textContent = content.stat2Number;
    document.getElementById('stat-2-label').textContent = content.stat2Label;
    document.getElementById('stat-3-number').textContent = content.stat3Number;
    document.getElementById('stat-3-label').textContent = content.stat3Label;
    document.getElementById('contact-title').textContent = content.contactTitle;
    document.getElementById('contact-description').textContent = content.contactDescription;
    document.getElementById('contact-phone').textContent = content.contactPhone;
    document.getElementById('contact-email').textContent = content.contactEmail;
    document.getElementById('contact-address').textContent = content.contactAddress;
    document.getElementById('contact-hours').textContent = content.contactHours;
    document.getElementById('footer-text').textContent = content.footerText;
}

// Load content when page loads
document.addEventListener('DOMContentLoaded', loadContent);

function showTab(tabId) {
    // hide all content
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

    // show selected
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
  }

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});