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
    // Create HTML content for the PDF
    const cvElement = document.createElement('div');
    cvElement.innerHTML = `
    <div style="font-family: Arial, sans-serif; color: #1e293b; padding: 40px;">
        <h1 style="text-align: center; color: #0f172a; margin-bottom: 5px; font-size: 28px;">ADETUGA MOJISOLA ESTHER</h1>
        <p style="text-align: center; color: #00d9ff; margin-bottom: 20px; font-size: 14px;">Microbiologist | Environmental & Laboratory Analyst</p>
        
        <div style="border-bottom: 2px solid #00d9ff; margin-bottom: 10px;"></div>
        
        <p style="text-align: center; margin-bottom: 20px; font-size: 11px;">
            <strong>Ikorodu, Lagos State, Nigeria</strong> | Phone: +234 805 470 9064 | +234 813 451 0925 | Email: mojisolah20@gmail.com
        </p>
        
        <h2 style="color: #00d9ff; font-size: 14px; border-bottom: 1px solid #00d9ff; padding-bottom: 5px; margin-top: 15px;">PROFESSIONAL SUMMARY</h2>
        <p style="font-size: 11px; line-height: 1.6; margin-bottom: 15px;">
            Detail-oriented Microbiology graduate with hands-on experience in laboratory diagnostics, environmental monitoring, and regulatory compliance. Skilled in data analysis, quality control, and accurate reporting. Known for strong organizational skills and commitment to delivering reliable results.
        </p>
        
        <h2 style="color: #00d9ff; font-size: 14px; border-bottom: 1px solid #00d9ff; padding-bottom: 5px; margin-top: 15px;">CORE SKILLS</h2>
        <ul style="font-size: 11px; line-height: 1.6; margin-left: 20px; margin-bottom: 15px;">
            <li>Microbiological Analysis & Laboratory Testing</li>
            <li>Diagnostic Testing (Hematology, Chemistry, Microbiology)</li>
            <li>Good Laboratory Practice (GLP) & Quality Control</li>
            <li>Environmental Monitoring & Water Quality Analysis</li>
            <li>Data Documentation & Reporting</li>
            <li>Microsoft Office Suite (Word, Excel, PowerPoint)</li>
            <li>Teamwork & Communication</li>
        </ul>
        
        <h2 style="color: #00d9ff; font-size: 14px; border-bottom: 1px solid #00d9ff; padding-bottom: 5px; margin-top: 15px;">WORK EXPERIENCE</h2>
        
        <h3 style="font-size: 12px; color: #0f172a; margin-top: 10px; margin-bottom: 2px;">NYSC – Nigeria Maritime Administration and Safety Agency</h3>
        <p style="font-size: 10px; color: #10b981; margin-bottom: 5px;"><em>Feb 2025 – Dec 2025</em></p>
        <ul style="font-size: 11px; line-height: 1.6; margin-left: 20px; margin-bottom: 10px;">
            <li>Supported pollution prevention and environmental monitoring initiatives</li>
            <li>Assisted in biodiversity conservation and sustainable resource programs</li>
            <li>Contributed to regulatory compliance and documentation</li>
        </ul>
        
        <h3 style="font-size: 12px; color: #0f172a; margin-top: 10px; margin-bottom: 2px;">Medical Laboratory Intern – Kolak Hospital</h3>
        <p style="font-size: 10px; color: #10b981; margin-bottom: 5px;"><em>Feb 2023 – Jun 2023</em></p>
        <ul style="font-size: 11px; line-height: 1.6; margin-left: 20px; margin-bottom: 10px;">
            <li>Conducted 3,000+ diagnostic tests monthly across hematology, chemistry, and microbiology</li>
            <li>Maintained ~98% accuracy rate in test results</li>
            <li>Performed quality control procedures ensuring reliability</li>
            <li>Documented and reported laboratory findings accurately</li>
        </ul>
        
        <h3 style="font-size: 12px; color: #0f172a; margin-top: 10px; margin-bottom: 2px;">Industrial Training – Fisheries & Aquaculture</h3>
        <p style="font-size: 10px; color: #10b981; margin-bottom: 5px;"><em>2017 – 2018</em></p>
        <ul style="font-size: 11px; line-height: 1.6; margin-left: 20px; margin-bottom: 10px;">
            <li>Assisted in hatchery operations and fish health monitoring</li>
            <li>Conducted water quality assessments and field data collection</li>
            <li>Participated in marine conservation activities</li>
        </ul>
        
        <h2 style="color: #00d9ff; font-size: 14px; border-bottom: 1px solid #00d9ff; padding-bottom: 5px; margin-top: 15px;">EDUCATION</h2>
        <p style="font-size: 11px; margin-bottom: 5px;"><strong>B.Sc. Microbiology</strong> – Olabisi Onabanjo University (2019 – 2023)</p>
        <p style="font-size: 11px; margin-bottom: 5px;"><strong>ND, Fisheries & Aquaculture</strong> – Lagos State Polytechnic (2016 – 2018)</p>
        <p style="font-size: 11px; margin-bottom: 15px;"><strong>SSCE</strong> (2010 – 2016)</p>
        
        <h2 style="color: #00d9ff; font-size: 14px; border-bottom: 1px solid #00d9ff; padding-bottom: 5px; margin-top: 15px;">PROJECTS</h2>
        <ul style="font-size: 11px; line-height: 1.6; margin-left: 20px; margin-bottom: 15px;">
            <li>Assessment of the Effect of Lime Application on Microbial Quality of Water</li>
            <li>Community awareness program on marine litter dumping (Calabar South)</li>
        </ul>
        
        <h2 style="color: #00d9ff; font-size: 14px; border-bottom: 1px solid #00d9ff; padding-bottom: 5px; margin-top: 15px;">LANGUAGES</h2>
        <p style="font-size: 11px; margin-bottom: 5px;">English (Fluent) | Yoruba (Fluent)</p>
        
        <h2 style="color: #00d9ff; font-size: 14px; border-bottom: 1px solid #00d9ff; padding-bottom: 5px; margin-top: 15px;">REFERENCES</h2>
        <p style="font-size: 11px;">Available upon request</p>
    </div>
    `;
    
    // PDF options
    const options = {
        margin: 10,
        filename: 'adetuga_mojisola_cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };
    
    // Generate and download PDF
    html2pdf().set(options).from(cvElement).save();
    
    // Show success notification
    const notification = document.createElement('div');
    notification.textContent = '✅ PDF downloaded: adetuga_mojisola_cv.pdf';
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
