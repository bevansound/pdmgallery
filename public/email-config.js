// Email Configuration for Public Displays of Malfunction
// Configure your email settings here

const EMAIL_CONFIG = {
    // Your email address where submissions will be sent
    recipientEmail: 'bevansound@gmail.com', // CHANGE THIS TO YOUR EMAIL
    
    // Email service configuration (using EmailJS for client-side email)
    emailjs: {
        serviceId: 'service_giynqvm',     // Get from EmailJS
        templateId: 'template_6upa2im',   // Get from EmailJS  
        publicKey: '0-y2IVcoHv5WX8fqD'     // Get the correct one from EmailJS dashboard
    },
    
    // Alternative: Backend API endpoint for form submissions
    apiEndpoint: '/api/submit-crash',
    
    // Email subject line for submissions
    emailSubject: '🚨 New PDM Submission - ',
    
    // Auto-reply settings
    autoReply: {
        enabled: true,
        subject: 'Thanks for your PDM submission!',
        message: `Thank you for submitting to our PDM gallery! 
        
We'll review your submission and, if approved, add it to the site soon. 

Keep an eye out for more hilarious public computer fails!

- The friendly folks at Public Displays of Malfunction (PDM)`
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EMAIL_CONFIG;
}

// Make available globally in browser
if (typeof window !== 'undefined') {
    window.EMAIL_CONFIG = EMAIL_CONFIG;
}
