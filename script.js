document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Clear previous messages
            clearMessages();
            
            // Validation
            if (!name || !email || !message) {
                showMessage('Please fill in all fields', 'error');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // If validation passes
            showMessage('Message sent successfully! We will contact you soon.', 'success');
            contactForm.reset();
        });
    }

    function clearMessages() {
        const oldMessages = document.querySelectorAll('.form-message');
        oldMessages.forEach(msg => msg.remove());
    }

    function showMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = text;
        
        // Insert before the form
        contactForm.parentNode.insertBefore(messageDiv, contactForm);
        
        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                messageDiv.style.opacity = '0';
                setTimeout(() => messageDiv.remove(), 500);
            }, 5000);
        }
    }
});