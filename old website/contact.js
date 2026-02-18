// Default content for Contact page
const defaultContactContent = {
    topAddress: 'Address: 21A President Paul Kruger Street, Polokwane, 0699',
    topEmail: 'info@ckjt.co.za',
    contactIntro: 'Give us a call to book an appointment or visit our offices for your financial service needs',
    contactPhone: '015 007 1003',
    contactHours1: 'Operating Hours : 08:00 to 16:30 on Mon-Thu',
    contactHours2: 'Operating Hours : 08:00 to 16:00 on Friday',
    contactEmail: 'info@ckjt.co.za',
    contactAddress: '21A President Paul Kruger Street, Polokwane, 0699',
    whatsappNumber: '123456789',  // THIS IS YOUR WHATSAPP NUMBER - CHANGE IT!
    footerDescription: 'We strive to deliver real value to our clients by providing the highest professional tax and financial services gearing our clients to achieve their goals.',
    footerPhone: '015 007 1003',
    facebookLink: 'https://facebook.com',
    twitterLink: 'https://twitter.com',
    instagramLink: 'https://instagram.com',
    youtubeLink: 'https://youtube.com'
};

// Function to load content
function loadContactContent() {
    const savedContent = localStorage.getItem('contactPageContent');
    const content = savedContent ? JSON.parse(savedContent) : defaultContactContent;
    
    // Update all elements
    document.getElementById('top-address').textContent = content.topAddress;
    document.getElementById('top-email').textContent = content.topEmail;
    document.getElementById('top-email').href = `mailto:${content.topEmail}`;
    
    document.getElementById('contact-intro').textContent = content.contactIntro;
    document.getElementById('contact-phone').textContent = content.contactPhone;
    document.getElementById('contact-hours-1').textContent = content.contactHours1;
    document.getElementById('contact-hours-2').textContent = content.contactHours2;
    document.getElementById('contact-email').textContent = content.contactEmail;
    document.getElementById('contact-email').href = `mailto:${content.contactEmail}`;
    document.getElementById('contact-address').textContent = content.contactAddress;
    
    document.getElementById('footer-description').textContent = content.footerDescription;
    document.getElementById('footer-phone').textContent = content.footerPhone;
    
    // Update social links
    document.getElementById('facebook-text').href = content.facebookLink;
    document.getElementById('twitter-text').href = content.twitterLink;
    document.getElementById('youtube-text').href = content.youtubeLink;
    document.getElementById('instagram-text').href = content.instagramLink;
    
    document.getElementById('whatsapp-link').href = `https://wa.me/${content.whatsappNumber}`;
    document.getElementById('facebook-link').href = content.facebookLink;
    document.getElementById('twitter-link').href = content.twitterLink;
    document.getElementById('instagram-link').href = content.instagramLink;
    document.getElementById('youtube-link').href = content.youtubeLink;
    
    // Store WhatsApp number for form submission
    window.whatsappNumber = content.whatsappNumber;
}

// Load content when page loads
document.addEventListener('DOMContentLoaded', loadContactContent);


// ========================================
// CONTACT FORM - SEND TO WHATSAPP
// ========================================

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Create WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
                          `*Name:* ${name}%0A` +
                          `*Subject:* ${subject}%0A` +
                          `*Phone:* ${phone}%0A` +
                          `*Email:* ${email}%0A%0A` +
                          `*Message:*%0A${message}`;
    
    // Get WhatsApp number (use default if not loaded yet)
    const whatsappNum = window.whatsappNumber || '123456789';
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/${whatsappNum}?text=${whatsappMessage}`, '_blank');
    
    // Optional: Clear the form after submission
    document.getElementById('contact-form').reset();
    
    // Optional: Show success message
    alert('Opening WhatsApp... Your message will be pre-filled!');
});


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