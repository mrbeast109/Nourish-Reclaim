/* ============================================
   NAVBAR FUNCTIONALITY
   ============================================ */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });
}

// Close mobile menu on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (hamburger) hamburger.classList.remove('active');
    if (navMenu) navMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

function gotopagelearnmore() {
  window.location.href = "about.html";
}
/* ============================================
   SCROLL PROGRESS INDICATOR
   ============================================ */
const scrollProgress = document.getElementById('scrollProgress');

if (scrollProgress) {
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
  });
}

/* ============================================
   CUSTOM CURSOR
   ============================================ */
const cursorDot = document.getElementById('cursorDot');
const cursorOutline = document.getElementById('cursorOutline');

if (cursorDot && cursorOutline && window.matchMedia("(pointer: fine)").matches) {
  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });

  // Smooth follow for outline
  function animateCursor() {
    const distX = mouseX - outlineX;
    const distY = mouseY - outlineY;

    outlineX = outlineX + distX * 0.15;
    outlineY = outlineY + distY * 0.15;

    cursorOutline.style.left = outlineX + 'px';
    cursorOutline.style.top = outlineY + 'px';

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Cursor hover effects
  const hoverTargets = document.querySelectorAll('a, button, .service-card, .pricing-card, .blog-card');
  hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
      cursorOutline.style.width = '50px';
      cursorOutline.style.height = '50px';
      cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });

    target.addEventListener('mouseleave', () => {
      cursorOutline.style.width = '30px';
      cursorOutline.style.height = '30px';
      cursorOutline.style.backgroundColor = 'transparent';
    });
  });
}

/* ============================================
   HERO PARALLAX EFFECT
   ============================================ */
const floatingCards = document.querySelectorAll('.floating-card');

if (floatingCards.length > 0) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    floatingCards.forEach(card => {
      const speed = card.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      card.style.transform = `translateY(${yPos}px)`;
    });
  });
}

/* ============================================
   SCROLL ANIMATIONS (Intersection Observer)
   ============================================ */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Add specific animation classes based on element type
      if (entry.target.classList.contains('process-step')) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      } else if (entry.target.classList.contains('benefit-row')) {
        entry.target.classList.add('visible');
      } else if (entry.target.classList.contains('testimonial-card')) {
        entry.target.classList.add('visible');
      }
      
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements
document.querySelectorAll('.process-step, .benefit-row, .testimonial-card, .pricing-card, .blog-card, .team-card').forEach(el => {
  observer.observe(el);
});

/* ============================================
   3D TILT EFFECT
   ============================================ */
const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
    const rotateY = ((x - centerX) / centerX) * 10;

    const inner = card.querySelector('.service-card-inner');
    if (inner) {
      // We need to maintain the flip on hover if it's a service card
      // This is tricky with CSS hover, so we'll just apply tilt to the container
      // or adjust the transform. For simplicity, let's apply a subtle transform to the card itself
      // but be careful not to break the flip.
      // Actually, for the flip card, tilt might interfere with the rotateY(180deg).
      // Let's apply tilt only when NOT hovered for flip, or just apply to non-flip cards.
      // The CSS handles the flip. Let's skip tilt for flip cards to avoid conflict or make it subtle.
      
      // Alternative: Apply tilt to a wrapper or just skip complex 3D on flip cards for vanilla JS simplicity.
      // Let's apply a simple scale effect instead for stability.
      card.style.transform = `scale(1.02)`;
    }
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

/* ============================================
   PRICING COUNT-UP ANIMATION
   ============================================ */
const pricingSection = document.getElementById('pricing');
let counted = false;

if (pricingSection) {
  const priceObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !counted) {
      const amounts = document.querySelectorAll('.amount');
      amounts.forEach(amount => {
        const target = +amount.getAttribute('data-target');
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        
        let current = 0;
        const updateCount = () => {
          current += increment;
          if (current < target) {
            amount.innerText = Math.ceil(current).toLocaleString();
            requestAnimationFrame(updateCount);
          } else {
            amount.innerText = target.toLocaleString();
          }
        };
        updateCount();
      });
      counted = true;
    }
  }, { threshold: 0.5 });
  
  priceObserver.observe(pricingSection);
}

/* ============================================
   AI CHATBOT
   ============================================ */
// Create Chatbot HTML structure dynamically
const chatbotHTML = `
  <div class="chatbot-container">
    <div class="chatbot-window" id="chatbotWindow">
      <div class="chatbot-header">
        <div class="chatbot-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1v-1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
          </svg>
          <span>HealthFlow AI</span>
        </div>
        <button class="chatbot-close" id="chatbotClose">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="chatbot-messages" id="chatbotMessages">
        <div class="message bot">
          Hello! I'm your AI Health Assistant. How can I help you today?
        </div>
      </div>
      <div class="typing-indicator" id="typingIndicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
      <div class="chatbot-input">
        <input type="text" id="chatbotInput" placeholder="Ask about plans, diet, fitness...">
        <button class="chatbot-send" id="chatbotSend">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
    <div class="chatbot-toggle" id="chatbotToggle">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </div>
  </div>
`;

document.body.insertAdjacentHTML('beforeend', chatbotHTML);

// Chatbot Logic
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotMessages = document.getElementById('chatbotMessages');
const typingIndicator = document.getElementById('typingIndicator');

// Toggle Chatbot
chatbotToggle.addEventListener('click', () => {
  chatbotWindow.classList.add('active');
  chatbotToggle.style.transform = 'scale(0)';
});

chatbotClose.addEventListener('click', () => {
  chatbotWindow.classList.remove('active');
  chatbotToggle.style.transform = 'scale(1)';
});

// Knowledge Base
const knowledgeBase = {
  pricing: "Our plans start at ₹999/month for the Basic Plan. The Pro Plan is ₹2,499/month, and the Premium Plan is ₹4,999/month.",
  basic: "The Basic Plan (₹999/mo) includes diet guidance, a weekly workout plan, and chat support.",
  pro: "The Pro Plan (₹2,499/mo) is our most popular! It includes a personal coach, custom diet & workout plans, and weekly progress tracking.",
  premium: "The Premium Plan (₹4,999/mo) offers the ultimate experience with 1-on-1 live sessions, doctor consultation, personalized meal plans, and 24/7 support.",
  diet: "We believe in balanced nutrition, not restrictive diets. Our plans are customized to your food preferences and lifestyle.",
  workout: "Our fitness programs range from home workouts with no equipment to full gym routines, tailored to your fitness level.",
  contact: "You can reach us at hello@healthflow.in or call +91 98765 43210.",
  diabetes: "Our coaches are trained to help manage diabetes through lifestyle changes, but please consult your doctor for medical advice.",
  weight: "Sustainable weight loss is about habits, not quick fixes. Our members typically lose 0.5-1kg per week safely.",
  default: "I'm not sure about that. You can ask me about our pricing, plans (Basic, Pro, Premium), diet, fitness, or contact info."
};

// Send Message Function
function sendMessage() {
  const text = chatbotInput.value.trim();
  if (!text) return;

  // Add User Message
  addMessage(text, 'user');
  chatbotInput.value = '';

  // Show Typing Indicator
  typingIndicator.style.display = 'flex';
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

  // Simulate AI Delay
  setTimeout(() => {
    typingIndicator.style.display = 'none';
    const response = getBotResponse(text);
    addMessage(response, 'bot');
  }, 1000 + Math.random() * 1000);
}

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = text;
  chatbotMessages.insertBefore(messageDiv, typingIndicator); // Insert before typing indicator
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();
  
  if (input.includes('price') || input.includes('cost') || input.includes('how much')) return knowledgeBase.pricing;
  if (input.includes('basic')) return knowledgeBase.basic;
  if (input.includes('pro')) return knowledgeBase.pro;
  if (input.includes('premium')) return knowledgeBase.premium;
  if (input.includes('diet') || input.includes('food') || input.includes('nutrition')) return knowledgeBase.diet;
  if (input.includes('workout') || input.includes('exercise') || input.includes('gym') || input.includes('fitness')) return knowledgeBase.workout;
  if (input.includes('contact') || input.includes('email') || input.includes('phone')) return knowledgeBase.contact;
  if (input.includes('diabetes') || input.includes('sugar')) return knowledgeBase.diabetes;
  if (input.includes('weight') || input.includes('fat') || input.includes('loss')) return knowledgeBase.weight;
  if (input.includes('hello') || input.includes('hi') || input.includes('hey')) return "Hello! Ready to start your wellness journey?";
  
  return knowledgeBase.default;
}

// Event Listeners
chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

/* ============================================
   FORM HANDLING
   ============================================ */
const newsletterForm = document.getElementById('newsletterForm');
const contactForm = document.getElementById('contactForm');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    const email = document.getElementById('emailInput').value;
    if (email) {
      alert(`Thank you for subscribing with ${email}! We'll be in touch.`);
      newsletterForm.reset();
    }
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', () => {
    alert("Thank you for your message! We will get back to you shortly.");
  });
}

/* ============================================
   BUTTON RIPPLE EFFECT
   ============================================ */
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      top: ${y}px;
      left: ${x}px;
      transform: scale(0);
      animation: ripple 600ms ease-out;
      pointer-events: none;
    `;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple animation style dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);

console.log('🌿 HealthFlow website loaded successfully!');
