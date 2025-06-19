// Portfolio Enhancement Script
class PortfolioEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupTypingAnimation();
        this.setupNavbarScrollEffect();
        this.setupSmoothScrolling();
        this.setupSkillBars();
        this.setupCounters();
        this.setupContactForm();
        this.setupBackToTop();
        this.setupMobileMenu();
        this.setupParallaxEffects();
        this.addEventListeners();
    }

    // Intersection Observer for scroll animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Add animation classes based on element type
                    if (element.classList.contains('about-content')) {
                        this.animateAboutSection(element);
                    } else if (element.classList.contains('skills-grid')) {
                        this.animateSkillsSection(element);
                    } else if (element.classList.contains('portfolio-grid')) {
                        this.animatePortfolioSection(element);
                    } else if (element.classList.contains('certificates-grid')) {
                        this.animateCertificatesSection(element);
                    } else if (element.classList.contains('education-timeline')) {
                        this.animateEducationSection(element);
                    } else if (element.classList.contains('contact-content')) {
                        this.animateContactSection(element);
                    }
                    
                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        // Observe sections
        const sections = [
            '.about-content',
            '.skills-grid',
            '.portfolio-grid',
            '.certificates-grid',
            '.education-timeline',
            '.contact-content'
        ];

        sections.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                observer.observe(element);
            }
        });
    }

    // Animation methods for different sections
    animateAboutSection(element) {
        const image = element.querySelector('.about-image');
        const text = element.querySelector('.about-text');
        const stats = element.querySelectorAll('.stat');

        if (image) {
            image.style.animation = 'fadeInLeft 0.8s ease forwards';
        }
        if (text) {
            text.style.animation = 'fadeInRight 0.8s ease forwards';
        }
        
        stats.forEach((stat, index) => {
            setTimeout(() => {
                stat.style.animation = 'fadeInUp 0.6s ease forwards';
            }, index * 200);
        });

        // Trigger counter animation
        this.startCounters();
    }

    animateSkillsSection(element) {
        const skills = element.querySelectorAll('.skill-item');
        
        skills.forEach((skill, index) => {
            setTimeout(() => {
                skill.style.animation = 'fadeInUp 0.6s ease forwards';
                
                // Animate skill bar after item appears
                setTimeout(() => {
                    this.animateSkillBar(skill);
                }, 300);
            }, index * 150);
        });
    }

    animatePortfolioSection(element) {
        const projects = element.querySelectorAll('.project-card');
        
        projects.forEach((project, index) => {
            setTimeout(() => {
                project.style.animation = 'fadeInUp 0.6s ease forwards';
            }, index * 200);
        });
    }

    animateCertificatesSection(element) {
        const certificates = element.querySelectorAll('.certificate-item');
        
        certificates.forEach((cert, index) => {
            setTimeout(() => {
                cert.style.animation = 'fadeInUp 0.6s ease forwards';
            }, index * 150);
        });
    }

    animateEducationSection(element) {
        const items = element.querySelectorAll('.timeline-item');
        
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.animation = 'fadeInLeft 0.8s ease forwards';
            }, index * 300);
        });
    }

    animateContactSection(element) {
        const info = element.querySelector('.contact-info');
        const form = element.querySelector('.contact-form');

        if (info) {
            info.style.animation = 'fadeInLeft 0.8s ease forwards';
        }
        if (form) {
            form.style.animation = 'fadeInRight 0.8s ease forwards';
        }
    }

    // Typing animation for hero section
    setupTypingAnimation() {
        const texts = [
            'Eagered Software Engineer',
            'Digital Creative',
            'Problem Solver',
            'Tech Enthusiast'
        ];
        
        const typingElement = document.getElementById('typing-text');
        if (!typingElement) return;

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        const type = () => {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 150;
            }

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        };

        type();
    }

    // Navbar scroll effect
    setupNavbarScrollEffect() {
        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Update active nav link
            const sections = document.querySelectorAll('section[id]');
            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Smooth scrolling for navigation links
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Skill bar animations
    setupSkillBars() {
        // This will be triggered by intersection observer
    }

    animateSkillBar(skillItem) {
        const progressBar = skillItem.querySelector('.skill-progress');
        const percentage = progressBar.getAttribute('data-percentage');
        
        if (progressBar && percentage) {
            setTimeout(() => {
                progressBar.style.width = percentage + '%';
            }, 100);
        }
    }

    // Counter animations
    setupCounters() {
        // This will be triggered by intersection observer
    }

    startCounters() {
        const counters = document.querySelectorAll('.stat-number[data-target]');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 50;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }

    // Contact form handling
    setupContactForm() {
        const form = document.getElementById('contact-form');
        
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const submitBtn = form.querySelector('.submit-btn');
                const btnText = submitBtn.querySelector('.btn-text');
                const btnLoading = submitBtn.querySelector('.btn-loading');
                
                // Show loading state
                submitBtn.classList.add('loading');
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    // Reset form
                    form.reset();
                    
                    // Show success message
                    this.showNotification('Message sent successfully!', 'success');
                    
                    // Reset button state
                    submitBtn.classList.remove('loading');
                    submitBtn.disabled = false;
                }, 2000);
            });

            // Form validation
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', () => {
                    this.validateField(input);
                });
                
                input.addEventListener('input', () => {
                    if (input.classList.contains('error')) {
                        this.validateField(input);
                    }
                });
            });
        }
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        
        // Remove previous error styling
        field.classList.remove('error');
        
        // Basic validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
        }
        
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
            }
        }
        
        // Add error styling if invalid
        if (!isValid) {
            field.classList.add('error');
        }
        
        return isValid;
    }

    // Back to top button
    setupBackToTop() {
        const backToTopBtn = document.getElementById('back-to-top');
        
        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });
            
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Mobile menu (placeholder for future implementation)
    setupMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                mobileToggle.classList.toggle('active');
            });
        }
    }

    // Parallax effects
    setupParallaxEffects() {
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                
                heroBackground.style.transform = `translateY(${parallax}px)`;
            });
        }
    }

    // Additional event listeners
    addEventListeners() {
        // Hover effects for project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Floating elements animation
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.5}s`;
        });

        // Add click effects to buttons
        const buttons = document.querySelectorAll('button, .btn, .contact-btn, .primary-btn');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.5);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Utility method for notifications
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : '#007bff'};
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Trigger animation
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove notification
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
}

// Add ripple animation to CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .error {
        border-color: #dc3545 !important;
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1) !important;
    }
`;
document.head.appendChild(rippleStyle);

// Initialize the portfolio enhancer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioEnhancer();
});

// Additional utility functions
window.addEventListener('load', () => {
    // Hide loading spinner if present
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
    
    // Initialize AOS (Animate On Scroll) alternative
    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
    });
});

// Performance optimization
let ticking = false;
function updateOnScroll() {
    // Throttle scroll events
    if (!ticking) {
        requestAnimationFrame(() => {
            // Scroll-based animations go here
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', updateOnScroll);

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Reduced motion support
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--transition', 'none');
}
