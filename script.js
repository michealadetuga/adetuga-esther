// ===== MOBILE MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.style.display = 'none';
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 217, 255, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ===== ACTIVE NAV LINK =====
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#00d9ff';
        } else {
            link.style.color = '#e2e8f0';
        }
    });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Create mailto link
        const mailtoLink = `mailto:mojisolah20@gmail.com?subject=New Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
        
        window.location.href = mailtoLink;
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.textContent = 'Message sent successfully!';
        successMessage.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #00d9ff, #10b981);
            color: #0f172a;
            padding: 15px 30px;
            border-radius: 50px;
            z-index: 2000;
            animation: slideIn 0.5s ease;
        `;
        document.body.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    });
}

// ===== DOWNLOAD CV =====
function downloadCV() {
    // Create a link element to download the actual PDF file
    const link = document.createElement('a');
    link.href = 'Adetuga_Mojisola_CV.pdf';
    link.download = 'Adetuga_Mojisola_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success notification
    const notification = document.createElement('div');
    notification.textContent = '✅ PDF downloaded: Adetuga_Mojisola_CV.pdf';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #00d9ff, #10b981);
        color: #0f172a;
        padding: 15px 30px;
        border-radius: 50px;
        z-index: 2000;
        animation: slideIn 0.5s ease;
        font-weight: 600;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ===== CARD HOVER EFFECT =====
document.querySelectorAll('.expertise-card, .education-card, .project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ===== STAT COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (target === 98 ? '%' : target === 3000 ? '+' : '+');
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current) + (target === 98 ? '%' : target === 3000 ? '+' : '+');
        }
    }, 16);
}

// Trigger counter animation when stats are in view
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statElements = document.querySelectorAll('.stat h3');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statElements.forEach((stat, index) => {
                    const targets = [3000, 98, 5];
                    animateCounter(stat, targets[index]);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// ===== PARTICLE ANIMATION =====
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(0, 217, 255, ${Math.random() * 0.5});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 20 + 10}s infinite;
            pointer-events: none;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles on load
window.addEventListener('load', createParticles);

// ===== SMOOTH PAGE LOAD =====
window.addEventListener('load', () => {
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '1';
    });
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (navMenu) navMenu.style.display = 'none';
    }
    
    // Navigate to sections with keyboard
    const sections = ['home', 'about', 'expertise', 'experience', 'contact'];
    const currentSection = sections.findIndex(s => {
        const element = document.getElementById(s);
        return element && element.getBoundingClientRect().top > -window.innerHeight / 2 && element.getBoundingClientRect().top < window.innerHeight / 2;
    });
    
    if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        e.preventDefault();
        document.getElementById(sections[currentSection + 1]).scrollIntoView({ behavior: 'smooth' });
    }
    
    if (e.key === 'ArrowUp' && currentSection > 0) {
        e.preventDefault();
        document.getElementById(sections[currentSection - 1]).scrollIntoView({ behavior: 'smooth' });
    }
});

// ===== LAZY LOADING =====
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            imageObserver.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
    imageObserver.observe(img);
});

// ===== ADDED STYLES FOR ANIMATIONS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// ===== CONSOLE MESSAGE =====
console.log('%c🧬 ADETUGA MOJISOLA ESTHER', 'font-size: 20px; color: #00d9ff; font-weight: bold;');
console.log('%cMicrobiologist | Environmental Analyst', 'font-size: 14px; color: #10b981;');
console.log('%cThank you for visiting my portfolio!', 'font-size: 12px; color: #e2e8f0;');
