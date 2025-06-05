// Hamburger Menu Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileOverlay = document.getElementById('mobile-overlay');
            const body = document.body;

            // Toggle mobile menu
            function toggleMobileMenu() {
                hamburger.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                mobileOverlay.classList.toggle('active');
                
                // Prevent body scroll when menu is open
                if (mobileMenu.classList.contains('active')) {
                    body.style.overflow = 'hidden';
                } else {
                    body.style.overflow = '';
                }
            }

            // Close mobile menu
            function closeMobileMenu() {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                mobileOverlay.classList.remove('active');
                body.style.overflow = '';
            }

            // Event listeners
            if (hamburger) {
                hamburger.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleMobileMenu();
                });

                // Add touch event for better mobile support
                hamburger.addEventListener('touchstart', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleMobileMenu();
                });
            }

            if (mobileOverlay) {
                mobileOverlay.addEventListener('click', closeMobileMenu);
            }

            // Close menu when clicking on a link
            if (mobileMenu) {
                const mobileLinks = mobileMenu.querySelectorAll('a');
                mobileLinks.forEach(link => {
                    link.addEventListener('click', closeMobileMenu);
                });
            }

            // Close menu on window resize if open
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && mobileMenu && mobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            });

            // Close menu on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            });
        });
