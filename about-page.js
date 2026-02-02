// ========================================
// LOAD CONTENT FROM STORAGE
// ========================================

// Default content for About page
const defaultAboutContent = {
    topAddress: 'Address: 22b Wandrag Pier Kroger Street, Polokwane, 0699',
    topEmail: 'info@ckjt.co.za',
    directorLabel: 'ABOUT CKJT',
    directorTitle: 'Meet The Director',
    directorName: 'Dorcus M.M Maloka',
    directorFounded: 'CKJT FINANCIAL SERVICES was founded by Dorcus in the year 2019.',
    directorBio: 'Dorcus M.M Maloka obtained her qualification in Financial Information Systems with a specialization in cost management accounting, financial accounting and taxation from University of Johannesburg. She was honored a certified Business Accountant in Practice and also a Tax Practitioner. She is highly qualified and experienced having worked as a member of private accounting firms providing services such as: Payroll administration, tax compliance services, and Accounting to individuals and corporations for over 12 years.',
    directorMembership: 'Dorcus M.M Maloka is a member of the South African Institute of Business Accountants and South African Institute of Tax Professionals.',
    reason1: 'We Are Trusted Business Consultants.',
    reason2: 'Your Business Success Is Of The Optimum Importance To Us.',
    reason3: 'We Offer Extensive Tax And Accounting Experience, Our Passion Is Delivering Great Customer Service.',
    reason4: 'Our Focus Is In Helping Your Business Flourish And Giving You Peace Of Mind.',
    reason5: 'We Take Great Pride In Providing High Quality Accounting Services, Innovative Business Strategies, Tax Strategies And Expertise.',
    whatsappNumber: '27150071003',
    footerDescription: 'We strive to deliver real value to our clients by providing the highest professional tax and financial services gearing our clients to achieve their goals.',
    footerPhone: '015 007 1003',
    facebookLink: 'https://facebook.com',
    twitterLink: 'https://twitter.com',
    instagramLink: 'https://instagram.com',
    youtubeLink: 'https://youtube.com'
};

// Function to load content
function loadAboutContent() {
    const savedContent = localStorage.getItem('aboutPageContent');
    const content = savedContent ? JSON.parse(savedContent) : defaultAboutContent;
    
    // Update all elements
    document.getElementById('top-address').textContent = content.topAddress;
    document.getElementById('top-email').textContent = content.topEmail;
    document.getElementById('top-email').href = `mailto:${content.topEmail}`;
    
    document.getElementById('director-label').textContent = content.directorLabel;
    document.getElementById('director-title').textContent = content.directorTitle;
    document.getElementById('director-name').textContent = content.directorName;
    document.getElementById('director-founded').textContent = content.directorFounded;
    document.getElementById('director-bio').textContent = content.directorBio;
    document.getElementById('director-membership').textContent = content.directorMembership;
    
    document.getElementById('reason-1-title').textContent = content.reason1;
    document.getElementById('reason-2-title').textContent = content.reason2;
    document.getElementById('reason-3-title').textContent = content.reason3;
    document.getElementById('reason-4-title').textContent = content.reason4;
    document.getElementById('reason-5-title').textContent = content.reason5;
    
    document.getElementById('footer-description').textContent = content.footerDescription;
    document.getElementById('footer-phone').textContent = content.footerPhone;
    
    // Update links
    document.getElementById('whatsapp-link').href = `https://wa.me/${content.whatsappNumber}`;
    document.getElementById('facebook-link').href = content.facebookLink;
    document.getElementById('twitter-link').href = content.twitterLink;
    document.getElementById('instagram-link').href = content.instagramLink;
    document.getElementById('youtube-link').href = content.youtubeLink;
}

// Load content when page loads
document.addEventListener('DOMContentLoaded', loadAboutContent);

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