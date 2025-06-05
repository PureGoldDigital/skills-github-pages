// Hamburger Menu Functionality
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
    hamburger.addEventListener('click', toggleMobileMenu);
    hamburger.addEventListener('touchstart', toggleMobileMenu, { passive: true });
    mobileOverlay.addEventListener('click', closeMobileMenu);

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu on window resize if open
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
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
    
    // Force click handler if needed
    logo.addEventListener('click', function(e) {
        if (this.href) {
            window.location.href = this.href;
        }
    });
}

class GlobalHeaderLoader {
    static getBasePath() {
        // Get current path depth
        const pathSegments = window.location.pathname.split('/').filter(segment => segment.length > 0);
        const htmlFile = pathSegments[pathSegments.length - 1];
        
        // Remove the HTML file from segments if present
        if (htmlFile && htmlFile.includes('.html')) {
            pathSegments.pop();
        }
        
        // Calculate how many levels deep we are
        const depth = pathSegments.length;
        
        // Create relative path back to root
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
            // Use a small delay to ensure DOM is fully updated
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
            '#contact': '#contact' // Hash links stay the same
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
                        <a href="#contact" style="margin: 0 1rem; text-decoration: none; color: #333;">Contact</a>
                    </div>
                </nav>
            </header>
        `;
        document.body.insertAdjacentHTML('afterbegin', fallbackHeader);
        document.body.style.paddingTop = '80px'; // Account for fixed header
        
        // Try to initialize hamburger menu for fallback too
        setTimeout(initializeHamburgerMenu, 50);
    }
}

// Auto-load on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    GlobalHeaderLoader.load();
});
