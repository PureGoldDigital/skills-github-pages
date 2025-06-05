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

    static load() {
        const basePath = this.getBasePath();
        
        // Create the header HTML with proper links
        const headerHTML = `
            <header id="global-header">
                <nav>
                    <div class="hamburger" id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="${basePath}index.html" class="logo">Pure Gold</a>
                    <ul class="nav-links" id="nav-links">
                        <li><a href="${basePath}index.html">Home</a></li>
                        <li><a href="${basePath}services.html">Services</a></li>
                        <li><a href="${basePath}about.html">About</a></li>
                        <li><a href="${basePath}blog.html">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <ul class="nav-links mobile-menu" id="mobile-menu">
                        <li><a href="${basePath}index.html">Home</a></li>
                        <li><a href="${basePath}services.html">Services</a></li>
                        <li><a href="${basePath}about.html">About</a></li>
                        <li><a href="${basePath}blog.html">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <a href="#contact" class="cta-button">Get Started</a>
                </nav>
                <div class="mobile-overlay" id="mobile-overlay"></div>
            </header>
        `;
        
        // Insert the header at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
        
        console.log('✅ Global header loaded successfully from:', basePath);
    }

    static loadFallback() {
        const basePath = this.getBasePath();
        const fallbackHeader = `
            <header style="background: #fff; padding: 1rem; border-bottom: 1px solid #eee; position: fixed; top: 0; width: 100%; z-index: 1000;">
                <nav style="display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto;">
                    <a href="${basePath}index.html" style="font-weight: bold; color: #FFD700; text-decoration: none;">Pure Gold</a>
                    <div>
                        <a href="${basePath}index.html" style="margin: 0 1rem; text-decoration: none; color: #333;">Home</a>
                        <a href="${basePath}services.html" style="margin: 0 1rem; text-decoration: none; color: #333;">Services</a>
                        <a href="${basePath}about.html" style="margin: 0 1rem; text-decoration: none; color: #333;">About</a>
                        <a href="${basePath}blog.html" style="margin: 0 1rem; text-decoration: none; color: #333;">Blog</a>
                        <a href="#contact" style="margin: 0 1rem; text-decoration: none; color: #333;">Contact</a>
                    </div>
                </nav>
            </header>
        `;
        document.body.insertAdjacentHTML('afterbegin', fallbackHeader);
        document.body.style.paddingTop = '80px'; // Account for fixed header
    }
}

// Auto-load on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    GlobalHeaderLoader.load();
});
