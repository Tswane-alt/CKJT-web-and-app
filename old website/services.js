// ========================================
// LOAD CONTENT FROM STORAGE
// ========================================

// Default content for Services page
const defaultServicesContent = {
    topAddress: 'Address: 21A President Paul Kruger Street, Polokwane, 0699',
    topEmail: 'info@ckjt.co.za',
    
    // Main Services
    serv1Title: 'Financial & Risk Advisory',
    serv1Desc: 'Offering you future innovative and diligent financial planning solutions for future aspects endeavours.',
    serv2Title: 'Business Management & Consulting',
    serv2Desc: 'Long term business planning. Business Profitability and cash flow management. Budgeting and costing.',
    serv3Title: 'Accounting & Bookkeeping',
    serv3Desc: 'Offering you peace of mind by maintaining your books and administering your payroll.',
    serv4Title: 'Taxation',
    serv4Desc: 'We provide tax tips and maintain your tax affairs, keeping you compliant at all times.',
    
    // Non-Financial Services
    nf1Title: 'Corporate Secretarial Services',
    nf1Desc: 'Our secretarial department provides a wide range of company secretarial duties: Company Registration, Annual Returns and so much more...',
    nf2Title: 'Graphic Design & Branding',
    nf2Desc: 'We are innovative, flexible & versatile. our idea is to make you visible and create visual concepts that communicates your business and creating awareness.',
    nf3Title: 'Marketing',
    nf3Desc: 'Allow us to widen your Marketing Strategies and assist you improve your sales by offering you the best possible strategies to reach your targeted audience.',
    nf4Title: 'Industries',
    nf4Desc: 'We offer services to these industries and more... Construction, Engineering, Travel & Tourism, Health Care, Agriculture, IT Companies, Hygiene, Petroleum Companies, Catering, Manufacturing.',
    
    // Packages
    pkg1Name: 'ACCOUNTING PACKAGE',
    pkg1Price: '2 799.00',
    pkg1Feat1: '✓ Payroll Administration (up to 10 employees)',
    pkg1Feat2: '✓ All SARS Returns Excluding VAT Returns',
    pkg1Feat3: '✓ Interim Financial Statements',
    
    pkg2Name: 'TAX PACKAGE',
    pkg2Price: '2 500.00',
    pkg2Feat1: '✓ Unlimited Tax Advisory & Consultation',
    pkg2Feat2: '✓ Interim Financial Statements',
    pkg2Feat3: '✓ Income Tax Return Submission',
    
    pkg3Name: 'START-UP PACKAGE',
    pkg3Price: '2 472.50',
    pkg3Feat1: '✓ Company Registration',
    pkg3Feat2: '✓ Shareholders Certificate',
    pkg3Feat3: '✓ CSD Registration',
    pkg3Feat4: '✓ Tax Pin Certificate',
    pkg3Feat5: '✓ BBBEE Certificate',
    
    catalogLink: 'catalog.pdf',
    whatsappNumber: '27150071003',
    footerDescription: 'We strive to deliver real value to our clients by providing the highest professional tax and financial services gearing our clients to achieve their goals.',
    footerPhone: '015 007 1003',
    facebookLink: 'https://facebook.com',
    twitterLink: 'https://twitter.com',
    instagramLink: 'https://instagram.com',
    youtubeLink: 'https://youtube.com'
};

// Function to load content
function loadServicesContent() {
    const savedContent = localStorage.getItem('servicesPageContent');
    const content = savedContent ? JSON.parse(savedContent) : defaultServicesContent;
    
    // Update all elements
    document.getElementById('top-address').textContent = content.topAddress;
    document.getElementById('top-email').textContent = content.topEmail;
    document.getElementById('top-email').href = `mailto:${content.topEmail}`;
    
    // Main Services
    document.getElementById('serv-1-title').textContent = content.serv1Title;
    document.getElementById('serv-1-desc').textContent = content.serv1Desc;
    document.getElementById('serv-2-title').textContent = content.serv2Title;
    document.getElementById('serv-2-desc').textContent = content.serv2Desc;
    document.getElementById('serv-3-title').textContent = content.serv3Title;
    document.getElementById('serv-3-desc').textContent = content.serv3Desc;
    document.getElementById('serv-4-title').textContent = content.serv4Title;
    document.getElementById('serv-4-desc').textContent = content.serv4Desc;
    
    // Non-Financial Services
    document.getElementById('nf-1-title').textContent = content.nf1Title;
    document.getElementById('nf-1-desc').textContent = content.nf1Desc;
    document.getElementById('nf-2-title').textContent = content.nf2Title;
    document.getElementById('nf-2-desc').textContent = content.nf2Desc;
    document.getElementById('nf-3-title').textContent = content.nf3Title;
    document.getElementById('nf-3-desc').textContent = content.nf3Desc;
    document.getElementById('nf-4-title').textContent = content.nf4Title;
    document.getElementById('nf-4-desc').textContent = content.nf4Desc;
    
    // Packages
    document.getElementById('pkg-1-name').textContent = content.pkg1Name;
    document.getElementById('pkg-1-price').textContent = content.pkg1Price;
    document.getElementById('pkg-1-feat-1').textContent = content.pkg1Feat1;
    document.getElementById('pkg-1-feat-2').textContent = content.pkg1Feat2;
    document.getElementById('pkg-1-feat-3').textContent = content.pkg1Feat3;
    
    document.getElementById('pkg-2-name').textContent = content.pkg2Name;
    document.getElementById('pkg-2-price').textContent = content.pkg2Price;
    document.getElementById('pkg-2-feat-1').textContent = content.pkg2Feat1;
    document.getElementById('pkg-2-feat-2').textContent = content.pkg2Feat2;
    document.getElementById('pkg-2-feat-3').textContent = content.pkg2Feat3;
    
    document.getElementById('pkg-3-name').textContent = content.pkg3Name;
    document.getElementById('pkg-3-price').textContent = content.pkg3Price;
    document.getElementById('pkg-3-feat-1').textContent = content.pkg3Feat1;
    document.getElementById('pkg-3-feat-2').textContent = content.pkg3Feat2;
    document.getElementById('pkg-3-feat-3').textContent = content.pkg3Feat3;
    document.getElementById('pkg-3-feat-4').textContent = content.pkg3Feat4;
    document.getElementById('pkg-3-feat-5').textContent = content.pkg3Feat5;
    
    document.getElementById('footer-description').textContent = content.footerDescription;
    document.getElementById('footer-phone').textContent = content.footerPhone;
    
    // Update links
    document.getElementById('catalog-link').href = content.catalogLink;
    document.getElementById('whatsapp-link').href = `https://wa.me/${content.whatsappNumber}`;
    document.getElementById('facebook-link').href = content.facebookLink;
    document.getElementById('twitter-link').href = content.twitterLink;
    document.getElementById('instagram-link').href = content.instagramLink;
    document.getElementById('youtube-link').href = content.youtubeLink;
}

// Load content when page loads
document.addEventListener('DOMContentLoaded', loadServicesContent);

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