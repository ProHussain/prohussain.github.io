// ============================================
// PORTFOLIO ANIMATIONS
// Smooth scroll animations and interactions
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
  // ============================================
  
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);

  // Observe sections
  const sections = document.querySelectorAll('.portfolio, .resume, .features');
  sections.forEach(section => {
    section.classList.add('animate-on-scroll');
    observer.observe(section);
  });

  // ============================================
  // ANIMATED SKILL PROGRESS BARS
  // ============================================
  
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBlock = entry.target;
        skillBlock.classList.add('animate');
        
        // Get the skill percentage from the text
        const percentText = skillBlock.querySelector('.skill-info span:last-child').textContent;
        const percent = percentText.replace('%', '');
        
        // Animate the progress bar
        const progressBar = skillBlock.querySelector('.skill-progress span');
        if (progressBar) {
          progressBar.style.setProperty('--skill-width', percent + '%');
          
          // Animate the number counting up
          animateValue(skillBlock.querySelector('.skill-info span:last-child'), 0, percent, 1500);
        }
        
        // Unobserve after animation
        skillObserver.unobserve(skillBlock);
      }
    });
  }, { threshold: 0.3 });

  // Observe all skill blocks
  const skillBlocks = document.querySelectorAll('.skill-block');
  skillBlocks.forEach((block, index) => {
    // Add staggered delay
    block.style.transitionDelay = `${index * 0.1}s`;
    skillObserver.observe(block);
  });

  // ============================================
  // TIMELINE ANIMATION
  // ============================================
  
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        timelineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const timelineSteps = document.querySelectorAll('.timeline-step');
  timelineSteps.forEach(step => {
    timelineObserver.observe(step);
  });

  // ============================================
  // NUMBER COUNTER ANIMATION
  // ============================================
  
  function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    const endValue = parseFloat(end);
    
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + (endValue - start) * easeOutQuart;
      
      element.textContent = Math.round(current) + '%';
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = endValue + '%';
      }
    }
    
    requestAnimationFrame(update);
  }

  // ============================================
  // SMOOTH SCROLL FOR NAVIGATION LINKS
  // ============================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // PROJECT CARDS STAGGER ON SCROLL
  // ============================================
  
  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  // This works with the existing nth-child animations in CSS
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    projectObserver.observe(card);
  });

  // ============================================
  // PARALLAX EFFECT FOR HERO IMAGE - DISABLED
  // Keep profile image static and professional
  // ============================================
  
  // Parallax disabled for hero image

  // ============================================
  // EDUCATION CARDS ANIMATION
  // ============================================
  
  const educationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'scale(1)';
      }
    });
  }, { threshold: 0.2 });

  const educationCards = document.querySelectorAll('.feat-box.card');
  educationCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9)';
    card.style.transition = `all 0.6s ease ${index * 0.15}s`;
    educationObserver.observe(card);
  });

  // ============================================
  // FEATURE BOXES ANIMATION
  // ============================================
  
  const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  const featureBoxes = document.querySelectorAll('.features .feat-box');
  featureBoxes.forEach((box, index) => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(20px)';
    box.style.transition = `all 0.5s ease ${index * 0.1}s`;
    featureObserver.observe(box);
  });

  // ============================================
  // TESTIMONIALS ANIMATION
  // ============================================
  
  const testimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        testimonialObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const testimonialCards = document.querySelectorAll('.testimonial-card');
  testimonialCards.forEach(card => {
    testimonialObserver.observe(card);
  });

  // ============================================
  // PERFORMANCE OPTIMIZATION
  // ============================================
  
  // Disable animations on slow devices
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    document.body.classList.add('reduce-animations');
  }

  // Reduce animations when battery is low
  if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {
      if (battery.level < 0.2) {
        document.body.classList.add('reduce-animations');
      }
    });
  }

  // ============================================
  // CONSOLE EASTER EGG
  // ============================================
  
  console.log('%c👋 Hello Developer!', 'color: #3DDC84; font-size: 20px; font-weight: bold;');
  console.log('%cInterested in Android development?', 'color: #1B5E20; font-size: 14px;');
  console.log('%cCheck out my portfolio: https://prohussain.github.io/', 'color: #666; font-size: 12px;');
  console.log('%cBuilt with ❤️ using HTML, CSS, and JavaScript', 'color: #999; font-size: 10px;');

});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for scroll performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


// ============================================
// EXPERIENCE TABS
// ============================================
(function () {
  const tabBtns = document.querySelectorAll('.exp-tab-btn');
  const tabPanels = document.querySelectorAll('.exp-tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const panel = document.querySelector(`.exp-tab-panel[data-panel="${target}"]`);
      if (panel) panel.classList.add('active');
    });
  });
})();

// ============================================
// TERMINAL TYPING ANIMATION
// ============================================
(function () {
  const terminal = document.querySelector('.hero--terminal .terminal-body');
  if (!terminal) return;

  const lines = [
    { type: 'cmd', text: 'cat profile.json' },
    { type: 'bracket', text: '{' },
    { type: 'kv', key: '"platforms"',     val: '"Android · Flutter · iOS · KMP"', comma: true },
    { type: 'kv', key: '"downloads"',     val: '"50M+"',  comma: true },
    { type: 'kv', key: '"crash_free"',    val: '"99.9%"', comma: true },
    { type: 'kv', key: '"revenue_growth"',val: '"+30%"',  comma: true },
    { type: 'kv', key: '"apps_built"',    val: '"50+"',   comma: true },
    { type: 'kv', key: '"experience"',    val: '"6 years"', comma: false },
    { type: 'bracket', text: '}' },
  ];

  // Build a line element from a descriptor
  function buildLine(desc) {
    const d = document.createElement('div');
    if (desc.type === 'cmd') {
      d.innerHTML = `<span class="terminal-prompt">❯</span> <span class="terminal-cmd">${desc.text}</span>`;
    } else if (desc.type === 'bracket') {
      d.className = 'terminal-bracket';
      d.textContent = desc.text;
    } else if (desc.type === 'kv') {
      d.className = 'terminal-line';
      d.innerHTML = `&nbsp;&nbsp;<span class="terminal-key">${desc.key}</span><span class="terminal-bracket">: </span><span class="terminal-val">${desc.val}</span><span class="terminal-bracket">${desc.comma ? ',' : ''}</span>`;
    }
    return d;
  }

  // Typing effect for the command line
  function typeCommand(text, callback) {
    const d = document.createElement('div');
    d.innerHTML = `<span class="terminal-prompt">❯</span> <span class="terminal-cmd"></span>`;
    terminal.innerHTML = '';
    terminal.appendChild(d);

    const cmdSpan = d.querySelector('.terminal-cmd');
    let i = 0;
    const interval = setInterval(() => {
      cmdSpan.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setTimeout(callback, 300);
      }
    }, 55);
  }

  // Reveal JSON lines one by one
  function revealLines(lineDescs, cursor) {
    let i = 0;
    function next() {
      if (i >= lineDescs.length) {
        terminal.appendChild(cursor);
        return;
      }
      const el = buildLine(lineDescs[i]);
      el.style.opacity = '0';
      el.style.transform = 'translateY(4px)';
      el.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
      terminal.appendChild(el);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });

      i++;
      setTimeout(next, 120);
    }
    next();
  }

  // Cursor element
  function makeCursor() {
    const d = document.createElement('div');
    d.innerHTML = `<span class="terminal-prompt">❯</span> <span class="terminal-cursor">&nbsp;</span>`;
    return d;
  }

  // Only animate when hero is visible
  const hero = document.querySelector('.hero--terminal');
  if (!hero) return;

  let animated = false;
  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      io.disconnect();
      setTimeout(() => {
        typeCommand('cat profile.json', () => {
          revealLines(lines.slice(1), makeCursor());
        });
      }, 400);
    }
  }, { threshold: 0.3 });
  io.observe(hero);
})();
