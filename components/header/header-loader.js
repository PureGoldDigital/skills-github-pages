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

            // Load and execute JS
            const jsResponse = await fetch(`${basePath}components/header/header.js`);
            const js = await jsResponse.text();
            eval(js);

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
    }
}

// Auto-load on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    GlobalHeaderLoader.load();
});
