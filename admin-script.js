// ========================================
// ADMIN PANEL CONFIGURATION
// ========================================

// **IMPORTANT: Change this password to something secure!**
const ADMIN_PASSWORD = 'admin123';

// Session timeout (in milliseconds) - 30 minutes
const SESSION_TIMEOUT = 30 * 60 * 1000;


// ========================================
// LOGIN FUNCTIONALITY
// ========================================

const loginForm = document.getElementById('login-form');
const passwordInput = document.getElementById('password-input');
const errorMessage = document.getElementById('error-message');
const loginScreen = document.getElementById('login-screen');
const adminPanel = document.getElementById('admin-panel');

// Check if user is already logged in
function checkSession() {
    const loginTime = localStorage.getItem('adminLoginTime');
    if (loginTime) {
        const elapsed = Date.now() - parseInt(loginTime);
        if (elapsed < SESSION_TIMEOUT) {
            showAdminPanel();
            return true;
        } else {
            localStorage.removeItem('adminLoginTime');
        }
    }
    return false;
}

// Handle login
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const password = passwordInput.value;
    
    if (password === ADMIN_PASSWORD) {
        localStorage.setItem('adminLoginTime', Date.now().toString());
        showAdminPanel();
    } else {
        errorMessage.textContent = '❌ Incorrect password. Please try again.';
        passwordInput.value = '';
        passwordInput.focus();
    }
});

function showAdminPanel() {
    loginScreen.style.display = 'none';
    adminPanel.style.display = 'block';
    loadContentToEditor();
}

// Logout functionality
document.getElementById('logout-btn').addEventListener('click', function() {
    localStorage.removeItem('adminLoginTime');
    adminPanel.style.display = 'none';
    loginScreen.style.display = 'flex';
    passwordInput.value = '';
    errorMessage.textContent = '';
});

// Check session on page load
checkSession();


// ========================================
// CONTENT MANAGEMENT
// ========================================

// Default content
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
    contactAddress: '123 Financial Street, Suite 100, New York, NY 10001',
    contactHours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    footerText: '© 2024 CKJT Financial Services. All rights reserved. Securities and advisory services offered through licensed professionals.'
};

// Load current content into editor
function loadContentToEditor() {
    const savedContent = localStorage.getItem('websiteContent');
    const content = savedContent ? JSON.parse(savedContent) : defaultContent;
    
    document.getElementById('edit-company-name').value = content.companyName;
    document.getElementById('edit-tagline').value = content.tagline;
    document.getElementById('edit-hero-title').value = content.heroTitle;
    document.getElementById('edit-hero-subtitle').value = content.heroSubtitle;
    document.getElementById('edit-cta-button').value = content.ctaButton;
    document.getElementById('edit-services-title').value = content.servicesTitle;
    document.getElementById('edit-service-1-title').value = content.service1Title;
    document.getElementById('edit-service-1-description').value = content.service1Description;
    document.getElementById('edit-service-2-title').value = content.service2Title;
    document.getElementById('edit-service-2-description').value = content.service2Description;
    document.getElementById('edit-service-3-title').value = content.service3Title;
    document.getElementById('edit-service-3-description').value = content.service3Description;
    document.getElementById('edit-about-title').value = content.aboutTitle;
    document.getElementById('edit-about-description').value = content.aboutDescription;
    document.getElementById('edit-stat-1-number').value = content.stat1Number;
    document.getElementById('edit-stat-1-label').value = content.stat1Label;
    document.getElementById('edit-stat-2-number').value = content.stat2Number;
    document.getElementById('edit-stat-2-label').value = content.stat2Label;
    document.getElementById('edit-stat-3-number').value = content.stat3Number;
    document.getElementById('edit-stat-3-label').value = content.stat3Label;
    document.getElementById('edit-contact-title').value = content.contactTitle;
    document.getElementById('edit-contact-description').value = content.contactDescription;
    document.getElementById('edit-contact-phone').value = content.contactPhone;
    document.getElementById('edit-contact-email').value = content.contactEmail;
    document.getElementById('edit-contact-address').value = content.contactAddress;
    document.getElementById('edit-contact-hours').value = content.contactHours;
    document.getElementById('edit-footer-text').value = content.footerText;
}

// Save all changes
document.getElementById('save-btn').addEventListener('click', function() {
    const content = {
        companyName: document.getElementById('edit-company-name').value,
        tagline: document.getElementById('edit-tagline').value,
        heroTitle: document.getElementById('edit-hero-title').value,
        heroSubtitle: document.getElementById('edit-hero-subtitle').value,
        ctaButton: document.getElementById('edit-cta-button').value,
        servicesTitle: document.getElementById('edit-services-title').value,
        service1Title: document.getElementById('edit-service-1-title').value,
        service1Description: document.getElementById('edit-service-1-description').value,
        service2Title: document.getElementById('edit-service-2-title').value,
        service2Description: document.getElementById('edit-service-2-description').value,
        service3Title: document.getElementById('edit-service-3-title').value,
        service3Description: document.getElementById('edit-service-3-description').value,
        aboutTitle: document.getElementById('edit-about-title').value,
        aboutDescription: document.getElementById('edit-about-description').value,
        stat1Number: document.getElementById('edit-stat-1-number').value,
        stat1Label: document.getElementById('edit-stat-1-label').value,
        stat2Number: document.getElementById('edit-stat-2-number').value,
        stat2Label: document.getElementById('edit-stat-2-label').value,
        stat3Number: document.getElementById('edit-stat-3-number').value,
        stat3Label: document.getElementById('edit-stat-3-label').value,
        contactTitle: document.getElementById('edit-contact-title').value,
        contactDescription: document.getElementById('edit-contact-description').value,
        contactPhone: document.getElementById('edit-contact-phone').value,
        contactEmail: document.getElementById('edit-contact-email').value,
        contactAddress: document.getElementById('edit-contact-address').value,
        contactHours: document.getElementById('edit-contact-hours').value,
        footerText: document.getElementById('edit-footer-text').value
    };
    
    localStorage.setItem('websiteContent', JSON.stringify(content));
    showSaveMessage('✅ All changes saved successfully!', 'success');
});

// Preview website (opens in new tab)
document.getElementById('preview-btn').addEventListener('click', function() {
    window.open('index.html', '_blank');
});

// Reset to defaults
document.getElementById('reset-btn').addEventListener('click', function() {
    if (confirm('Are you sure you want to reset all content to defaults? This cannot be undone.')) {
        localStorage.setItem('websiteContent', JSON.stringify(defaultContent));
        loadContentToEditor();
        showSaveMessage('🔄 Content reset to defaults', 'success');
    }
});

// Show save message
function showSaveMessage(message, type) {
    const saveMessage = document.getElementById('save-message');
    saveMessage.textContent = message;
    saveMessage.className = 'save-message ' + type;
    
    setTimeout(function() {
        saveMessage.className = 'save-message';
    }, 5000);
}


// ========================================
// AUTO-SAVE FUNCTIONALITY (Optional)
// ========================================

// Uncomment the code below to enable auto-save every 30 seconds

/*
let autoSaveInterval;

function enableAutoSave() {
    autoSaveInterval = setInterval(function() {
        document.getElementById('save-btn').click();
    }, 30000); // Save every 30 seconds
}

// Start auto-save when admin panel is shown
if (checkSession()) {
    enableAutoSave();
}
*/