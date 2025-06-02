   // Smooth scrolling for anchor links
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

        // Social sharing functionality
        document.addEventListener('DOMContentLoaded', function() {
            const shareButtons = document.querySelectorAll('.share-btn');
            const pageTitle = document.title;
            const pageUrl = window.location.href;
            
            shareButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    let shareUrl = '';
                    const className = this.className;
                    
                    if (className.includes('share-twitter')) {
                        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(pageTitle)}&url=${encodeURIComponent(pageUrl)}`;
                    } else if (className.includes('share-facebook')) {
                        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
                    } else if (className.includes('share-linkedin')) {
                        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
                    } else if (className.includes('share-email')) {
                        shareUrl = `mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent('Check out this article: ' + pageUrl)}`;
                    }
                    
                    if (shareUrl) {
                        window.open(shareUrl, '_blank', 'width=600,height=400');
                    }
                });
            });
        });

        // Newsletter form submission
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            if (email) {
                // Simulate newsletter signup
                alert('Thank you for subscribing! You\'ll receive our latest insights directly in your inbox.');
                this.querySelector('.newsletter-input').value = '';
            }
        });

        // Reading progress indicator
        function addReadingProgress() {
            const progressBar = document.createElement('div');
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 3px;
                background: linear-gradient(135deg, #FFD700, #FFA500);
                z-index: 9999;
                transition: width 0.1s ease;
            `;
            document.body.appendChild(progressBar);

            window.addEventListener('scroll', () => {
                const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
                progressBar.style.width = scrolled + '%';
            });
        }

        // Initialize reading progress on page load
        addReadingProgress();

        // Highlight active sections in navigation (if implementing table of contents)
        function highlightActiveSection() {
            const sections = document.querySelectorAll('h2');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Remove active class from all nav items
                        document.querySelectorAll('.toc-active').forEach(el => {
                            el.classList.remove('toc-active');
                        });
                        
                        // Add active class to current section (if TOC exists)
                        const id = entry.target.id;
                        if (id) {
                            const tocLink = document.querySelector(`a[href="#${id}"]`);
                            if (tocLink) {
                                tocLink.classList.add('toc-active');
                            }
                        }
                    }
                });
            }, {
                rootMargin: '-20% 0px -80% 0px'
            });

            sections.forEach(section => {
                // Add IDs to sections for navigation
                if (!section.id) {
                    section.id = section.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                }
                observer.observe(section);
            });
        }

        // Initialize section highlighting
        highlightActiveSection();

        // Add copy link functionality to headings
        document.querySelectorAll('h2, h3').forEach(heading => {
            heading.style.position = 'relative';
            heading.style.cursor = 'pointer';
            
            heading.addEventListener('click', function() {
                const url = window.location.origin + window.location.pathname + '#' + this.id;
                navigator.clipboard.writeText(url).then(() => {
                    // Show temporary feedback
                    const feedback = document.createElement('span');
                    feedback.textContent = 'Link copied!';
                    feedback.style.cssText = `
                        position: absolute;
                        right: 0;
                        top: 0;
                        background: #FFD700;
                        color: white;
                        padding: 0.25rem 0.5rem;
                        border-radius: 4px;
                        font-size: 0.8rem;
                        font-weight: normal;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                    `;
                    
                    this.appendChild(feedback);
                    setTimeout(() => feedback.style.opacity = '1', 10);
                    setTimeout(() => {
                        feedback.style.opacity = '0';
                        setTimeout(() => feedback.remove(), 300);
                    }, 2000);
                });
            });
        });

        // Mobile menu toggle (if needed)
        function initMobileMenu() {
            const header = document.querySelector('header');
            const navLinks = document.querySelector('.nav-links');
            
            // Create mobile menu button
            const mobileMenuBtn = document.createElement('button');
            mobileMenuBtn.innerHTML = '☰';
            mobileMenuBtn.style.cssText = `
                display: none;
                background: none;
                border: none;
                font-size: 1.5rem;
                color: #333;
                cursor: pointer;
            `;
            
            // Insert mobile menu button
            const nav = document.querySelector('nav');
            nav.insertBefore(mobileMenuBtn, navLinks);
            
            // Toggle mobile menu
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('mobile-active');
            });
            
            // Add mobile styles
            const mobileStyles = document.createElement('style');
            mobileStyles.textContent = `
                @media (max-width: 768px) {
                    .nav-links {
                        display: none !important;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: white;
                        flex-direction: column;
                        padding: 2rem;
                        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    }
                    
                    .nav-links.mobile-active {
                        display: flex !important;
                    }
                    
                    nav button {
                        display: block !important;
                    }
                }
            `;
            document.head.appendChild(mobileStyles);
        }

        // Initialize mobile menu
        initMobileMenu();
