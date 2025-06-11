function initializeHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const body = document.body;

    // Check if elements exist before proceeding
    if (!hamburger || !mobileMenu || !mobileOverlay) {
        console.warn('Hamburger menu elements not found, retrying...');
        return false;
    }

    // Flag to prevent rapid toggling
    let isToggling = false;

    // Toggle mobile menu
    function toggleMobileMenu(e) {
        e.preventDefault(); // Prevent default behavior
        e.stopPropagation(); // Stop event bubbling

        if (isToggling) {
            console.log('Toggle skipped: Menu is already toggling');
            return;
        }

        isToggling = true;
        console.log('Toggling menu. Current state (active):', hamburger.classList.contains('active'));

        // Toggle classes based on current state
        const isActive = hamburger.classList.contains('active');
        if (isActive) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            body.style.overflow = '';
            console.log('Menu closed');
        } else {
            hamburger.classList.add('active');
            mobileMenu.classList.add('active');
            mobileOverlay.classList.add('active');
            body.style.overflow = 'hidden';
            console.log('Menu opened');
        }

        // Reset toggle lock after transition duration
        setTimeout(() => {
            isToggling = false;
            console.log('Toggle lock released');
        }, 300); // Matches CSS transition duration
    }

    // Close mobile menu explicitly
    function closeMobileMenu() {
        if (isToggling) {
            console.log('Close skipped: Menu is already toggling');
            return;
        }

        isToggling = true;
        console.log('Closing menu');

        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        body.style.overflow = '';

        // Reset toggle lock
        setTimeout(() => {
            isToggling = false;
            console.log('Close lock released');
        }, 300);
    }

    // Event listeners
    hamburger.addEventListener('click', (e) => {
        console.log('Hamburger clicked');
        toggleMobileMenu(e);
    }, { passive: false });

    mobileOverlay.addEventListener('click', () => {
        console.log('Overlay clicked');
        closeMobileMenu();
    });

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Mobile link clicked');
            closeMobileMenu();
        });
    });

    // Close menu on window resize if open
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
            console.log('Window resized, closing menu');
            closeMobileMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            console.log('Escape key pressed, closing menu');
            closeMobileMenu();
        }
    });

    return true;
}

// Ensure logo is clickable
const logo = document.querySelector('.logo');
if (logo) {
    logo.style.pointerEvents = 'auto';
    logo.style.cursor = 'pointer';
    
    // Force click handler to redirect to specific URL
    logo.addEventListener('click', function(e) {
        window.location.href = 'https://www.puregolddigitalagency.com/';
    });
}

class GlobalHeaderLoader {
    static getBasePath() {
        // Get the current pathname
        const pathname = window.location.pathname;
        
        // Split path and filter out empty segments
        let pathSegments = pathname.split('/').filter(segment => segment.length > 0);
        
        // Remove HTML file if present (files like index.html, contact.html, etc.)
        const lastSegment = pathSegments[pathSegments.length - 1];
        if (lastSegment && lastSegment.includes('.html')) {
            pathSegments.pop();
        }
        
        // Calculate depth - if we're in root after removing HTML file, depth should be 0
        const depth = pathSegments.length;
        
        // Return appropriate path
        return depth > 0 ? '../'.repeat(depth) : './';
    }

    static async load() {
        const basePath = this.getBasePath();
        
        try {
            // Load CSS with dynamic path
            const cssResponse = await fetch(`${basePath}components/header/header.css`);
            const css = await cssResponse.text();
            const style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);

            // Load HTML with dynamic path
            const htmlResponse = await fetch(`${basePath}components/header/header.html`);
            let html = await htmlResponse.text();
            
            // Fix navigation links in HTML
            html = this.fixNavigationLinks(html, basePath);
            document.body.insertAdjacentHTML('afterbegin', html);

            // Initialize hamburger menu after HTML is loaded
            setTimeout(() => {
                const success = initializeHamburgerMenu();
                if (!success) {
                    // Retry after another delay if first attempt failed
                    setTimeout(initializeHamburgerMenu, 100);
                }
            }, 10);

            console.log('✅ Global header loaded successfully from:', basePath);
        } catch (error) {
            console.error('❌ Failed to load global header:', error);
            this.loadFallback();
        }
    }

    static fixNavigationLinks(html, basePath) {
        // Fix relative links in navigation
        const linkMappings = {
            'index.html': `${basePath}index.html`,
            'services.html': `${basePath}services.html`,
            'about.html': `${basePath}about.html`,
            'blog.html': `${basePath}blog.html`,
            'contact.html': `${basePath}contact.html`
        };

        let fixedHtml = html;
        Object.entries(linkMappings).forEach(([oldLink, newLink]) => {
            const regex = new RegExp(`href="${oldLink}"`, 'g');
            fixedHtml = fixedHtml.replace(regex, `href="${newLink}"`);
        });

        return fixedHtml;
    }

    static loadFallback() {
        const basePath = this.getBasePath();
        const fallbackHeader = `
            <header style="background: #fff; padding: 1rem; border-bottom: 1px solid #eee; position: fixed; top: 0; width: 100%; z-index: 1000;">
                <nav style="display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto;">
                    <div style="font-weight: bold; color: #FFD700;">Pure Gold</div>
                    <div>
                        <a href="${basePath}index.html" style="margin: 0 1rem; text-decoration: none; color: #333;">Home</a>
                        <a href="${basePath}about.html" style="margin: 0 1rem; text-decoration: none; color: #333;">About</a>
                        <a href="${basePath}blog.html" style="margin: 0 1rem; text-decoration: none; color: #333;">Blog</a>
                        <a href="${basePath}contact.html" style="margin: 0 1rem; text-decoration: none; color: #333;">Contact</a>
                    </div>
                </nav>
            </header>
        `;
        document.body.insertAdjacentHTML('afterbegin', fallbackHeader);
        document.body.style.paddingTop = '80px'; 
        
        // Try to initialize hamburger menu for fallback too
        setTimeout(initializeHamburgerMenu
