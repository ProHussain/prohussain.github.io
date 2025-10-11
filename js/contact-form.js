// ============================================
// CONTACT FORM HANDLING
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        budget: document.getElementById('budget').value,
        message: document.getElementById('message').value
      };
      
      // Show loading state
      const submitBtn = contactForm.querySelector('.form-submit-btn');
      const originalText = submitBtn.querySelector('span').textContent;
      submitBtn.querySelector('span').textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate form submission (Replace with actual backend)
      setTimeout(() => {
        // Success simulation
        showFormStatus('success', 'Message sent successfully! I\'ll get back to you within 24 hours.');
        contactForm.reset();
        
        // Reset button
        submitBtn.querySelector('span').textContent = originalText;
        submitBtn.disabled = false;
        
        // Hide status after 5 seconds
        setTimeout(() => {
          hideFormStatus();
        }, 5000);
        
      }, 1500);
      
      // For actual implementation, use this structure:
      /*
      fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        showFormStatus('success', 'Message sent successfully!');
        contactForm.reset();
      })
      .catch(error => {
        showFormStatus('error', 'Failed to send message. Please try again or email directly.');
      })
      .finally(() => {
        submitBtn.querySelector('span').textContent = originalText;
        submitBtn.disabled = false;
      });
      */
    });
  }
  
  function showFormStatus(type, message) {
    formStatus.className = `form-status ${type}`;
    formStatus.textContent = message;
    formStatus.style.display = 'block';
  }
  
  function hideFormStatus() {
    formStatus.style.display = 'none';
  }
  
  // ============================================
  // ANIMATE NEW SECTIONS ON SCROLL
  // ============================================
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate pricing cards
        const pricingCards = entry.target.querySelectorAll('.pricing-card');
        pricingCards.forEach(card => {
          card.classList.add('animate');
        });
        
        // Animate blog cards
        const blogCards = entry.target.querySelectorAll('.blog-card');
        blogCards.forEach(card => {
          card.classList.add('animate');
        });
        
        // Animate contact boxes
        const contactBoxes = entry.target.querySelectorAll('.contact-info-box, .contact-form-box');
        contactBoxes.forEach(box => {
          box.classList.add('animate');
        });
        
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  
  // Observe new sections
  const newSections = document.querySelectorAll('.services-pricing, .blog-articles, .contact-section');
  newSections.forEach(section => {
    sectionObserver.observe(section);
  });
  
  // ============================================
  // FORM VALIDATION
  // ============================================
  
  const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
  
  formInputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateField(this);
    });
    
    input.addEventListener('input', function() {
      if (this.classList.contains('invalid')) {
        validateField(this);
      }
    });
  });
  
  function validateField(field) {
    if (field.hasAttribute('required') && !field.value.trim()) {
      field.classList.add('invalid');
      return false;
    }
    
    if (field.type === 'email' && field.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value)) {
        field.classList.add('invalid');
        return false;
      }
    }
    
    field.classList.remove('invalid');
    return true;
  }
  
  // ============================================
  // SMOOTH SCROLL TO CONTACT FROM PRICING
  // ============================================
  
  const packageButtons = document.querySelectorAll('.package-btn');
  packageButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const headerOffset = 100;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Focus on name input after scroll
        setTimeout(() => {
          document.getElementById('name').focus();
        }, 800);
      }
    });
  });
  
});

