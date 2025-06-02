<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog - Pure Gold Digital Branding | Latest Insights & Trends</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            line-height: 1.6;
            color: #1a1a1a;
            background: #fefefe;
        }

        /* Header */
        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            z-index: 1000;
            transition: all 0.3s ease;
        }

        nav {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
        }

        .logo {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 1.5rem;
            background: linear-gradient(135deg, #FFD700, #FFA500, #FF6B35);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            text-decoration: none;
            color: #333;
            transition: color 0.3s ease;
            position: relative;
        }

        .nav-links a:hover {
            color: #FFD700;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(135deg, #FFD700, #FFA500);
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .cta-button {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            background: linear-gradient(135deg, #FFD700, #FFA500);
            color: white;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(255, 215, 0, 0.3);
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
        }

        .hero-content {
            text-align: center;
            color: white;
            max-width: 900px;
            padding: 0 2rem;
            z-index: 2;
            position: relative;
        }

        .hero h1 {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: clamp(2.5rem, 5vw, 4rem);
            margin-bottom: 1.5rem;
            line-height: 1.2;
        }

        .hero .highlight {
            background: linear-gradient(135deg, #FFD700, #FFA500);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero p {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn-secondary {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            background: transparent;
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            padding: 0.75rem 1.5rem;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.5);
            transform: translateY(-2px);
        }

        /* Floating Elements */
        .floating-element {
            position: absolute;
            opacity: 0.1;
            animation: float 6s ease-in-out infinite;
        }

        .floating-element:nth-child(1) {
            top: 20%;
            left: 10%;
            animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
            top: 60%;
            right: 15%;
            animation-delay: 2s;
        }

        .floating-element:nth-child(3) {
            bottom: 20%;
            left: 20%;
            animation-delay: 4s;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
        }

        /* Services Section */
        .services {
            padding: 6rem 2rem;
            background: #fefefe;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-header {
            text-align: center;
            margin-bottom: 4rem;
        }

        .section-header h2 {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #2D5016;
        }

        .section-header p {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            font-size: 1.1rem;
            color: #666;
            max-width: 900px;
            margin: 0 auto;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .service-card {
            background: white;
            padding: 2.5rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
            border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .service-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #FFD700, #FFA500);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
        }

        .service-card h3 {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #1a1a1a;
        }

        .service-card p {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            color: #666;
            line-height: 1.6;
        }

        /* About Section */
        .about {
            padding: 6rem 2rem;
            background: #f8f9fa;
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .about-text h2 {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            color: #2D5016;
        }

        .about-text p {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 1.5rem;
            line-height: 1.7;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin-top: 2rem;
        }

        .stat {
            text-align: center;
        }

        .stat-number {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 2.5rem;
            color: #FFD700;
            display: block;
        }

        .stat-label {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            color: #666;
            font-weight: 500;
        }

        .about-visual {
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 20px;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 4rem;
            position: relative;
            overflow: hidden;
        }

        .about-visual::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255, 255, 255, 0.05) 10px,
                rgba(255, 255, 255, 0.05) 20px
            );
            animation: slide 20s linear infinite;
        }

        @keyframes slide {
            0% { transform: translateX(-50px); }
            100% { transform: translateX(50px); }
        }

        /* Portfolio Section */
        .portfolio {
            padding: 6rem 2rem;
            background: #1a1a1a;
            color: white;
        }

        .portfolio .section-header h2 {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            color: white;
        }

        .portfolio .section-header p {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            color: white;
        }

        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }

        .portfolio-item {
            background: #2a2a2a;
            border-radius: 15px;
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .portfolio-item:hover {
            transform: translateY(-5px);
        }

        .portfolio-image {
            height: 200px;
            background: linear-gradient(135deg, #FFD700, #FFA500, #FF6B35);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
        }

        .portfolio-content {
            padding: 1.5rem;
        }

        .portfolio-content h3 {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
        }

        .portfolio-content p {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            color: #ccc;
            font-size: 0.9rem;
        }

        /* Blog Section */
        .blog {
            padding: 6rem 2rem;
            background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
            position: relative;
        }

        .blog::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,215,0,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
            opacity: 0.5;
        }

        .blog .container {
            position: relative;
            z-index: 2;
        }

        .blog .section-header h2 {
            color: #2D5016;
        }

        .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .blog-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
            transition: all 0.4s ease;
            border: 1px solid rgba(255, 215, 0, 0.1);
            position: relative;
        }

        .blog-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .blog-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, #FFD700, #FFA500, #FF6B35);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .blog-card:hover::before {
            opacity: 1;
        }

        .blog-image {
            height: 200px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            color: white;
            position: relative;
            overflow: hidden;
        }

        .blog-image::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease;
        }

        .blog-card:hover .blog-image::after {
            left: 100%;
        }

        .blog-content {
            padding: 2rem;
        }

        .blog-meta {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
            font-size: 0.9rem;
            color: #888;
        }

        .blog-date {
            background: linear-gradient(135deg, #FFD700, #FFA500);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        .blog-category {
            font-weight: 500;
            color: #666;
        }

        .blog-content h3 {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 1.4rem;
            margin-bottom: 1rem;
            color: #1a1a1a;
            line-height: 1.3;
        }

        .blog-content p {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            color: #666;
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }

        .read-more {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            color: #FFD700;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
            position: relative;
        }

        .read-more:hover {
            color: #FFA500;
            transform: translateX(5px);
        }

        .read-more::after {
            content: '→';
            transition: transform 0.3s ease;
        }

        .read-more:hover::after {
            transform: translateX(3px);
        }

        .blog-cta {
            text-align: center;
            margin-top: 3rem;
        }

        .blog-cta h3 {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 1.8rem;
            margin-bottom: 1rem;
            color: #2D5016;
        }

        .blog-cta p {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            color: #666;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Contact Section */
        .contact {
            padding: 6rem 2rem;
            background: #f8f9fa;
        }

        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
        }

        .contact-form {
            background: white;
            padding: 2.5rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            display: block;
            margin-bottom: 0.5rem;
            color: #333;
        }

        .form-group input,
        .form-group textarea {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            width: 100%;
            padding: 0.75rem;
            border: 2px solid #e9ecef;
            border-radius: 10px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #FFD700;
        }

        .contact-info h3 {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #1a1a1a;
        }

        .contact-info p {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            color: #666;
            margin-bottom: 2rem;
            line-height: 1.6;
        }

        .contact-details {
            space-y: 1rem;
        }

        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
        }

        .contact-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #FFD700, #FFA500);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            color: white;
        }

        /* Footer */
        footer {
            background: #1a1a1a;
            color: white;
            text-align: center;
            padding: 2rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .about-content,
            .contact-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .stats {
                grid-template-columns: 1fr;
            }
            
            .services-grid,
            .portfolio-grid,
            .blog-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Smooth scrolling */
        html {
            scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #FFD700, #FFA500);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #FFA500, #FF6B35);
        }    </style>  
      <header>
        <nav>
            <div class="logo">Pure Gold </div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="#contact" class="cta-button">Get Started</a>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="floating-element">💎</div>
        <div class="floating-element">✨</div>
        <div class="floating-element">🎨</div>
        
        <div class="hero-content">
            <h1>Transform Your Brand Into <span class="highlight">Pure Gold</span></h1>
            <p>We craft results-oriented digital platforms that position your brand for sustainable success and enhance client retention using evidence-based design and strategic frameworks.</p>
            <div class="hero-buttons">
                <a href="#services" class="cta-button">Explore Services</a>
                <a href="#portfolio" class="btn-secondary">View Our Work</a>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <div class="section-header">
                <h2>Our Premium Services</h2>
                <p>We deliver comprehensive digital branding solutions that transform businesses and create lasting impressions in the digital landscape.</p>
            </div>
            
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">🎨</div>
                    <h3>Brand Identity Design</h3>
                    <p>Crafting unique visual identities that capture your brand essence and resonate with your target audience through compelling design elements.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">💻</div>
                    <h3>Web Design & Development</h3>
                    <p>Building responsive, user-centric websites that combine stunning aesthetics with seamless functionality and optimal performance.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">📱</div>
                    <h3>Digital Marketing</h3>
                    <p>Strategic digital campaigns that amplify your brand reach, engage your audience, and drive meaningful business growth.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">🚀</div>
                    <h3>Brand Strategy</h3>
                    <p>Comprehensive brand positioning and strategic planning that aligns your business goals with market opportunities.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">📊</div>
                    <h3>Analytics & Insights</h3>
                    <p>Data-driven analysis and reporting that provides actionable insights to optimize your digital presence and ROI.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">🎯</div>
                    <h3>Creative Consulting</h3>
                    <p>Expert guidance and creative direction to help your brand stand out in competitive markets with innovative solutions.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2>Crafting Digital Excellence Since Day One</h2>
                    <p>At Pure Gold Digital Branding, we believe every brand has the potential to shine. Led by Marine Corps veteran Benjamin J. Gautreaux, our creative and strategic team transforms your vision into digital gold with premium expertise.</p>

<p>We craft results-oriented digital platforms that ensure sustainable success and client retention through evidence-based design and strategic frameworks, delivering excellence in today's digital landscape.</p>
                    
                    <div class="stats">
                        <div class="stat">
                            <span class="stat-number">150+</span>
                            <span class="stat-label">Projects Completed</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">98%</span>
                            <span class="stat-label">Client Satisfaction</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">5+</span>
                            <span class="stat-label">Years Experience</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">24/7</span>
                            <span class="stat-label">Support Available</span>
                        </div>
                    </div>
                </div>
                
                <div class="about-visual">
                    <span>💎</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio">
        <div class="container">
            <div class="section-header">
                <h2>Our Golden Portfolio</h2>
                <p>Discover some of our most successful digital branding projects that have transformed businesses and created lasting impact.</p>
            </div>
            
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <div class="portfolio-image">🏢</div>
                    <div class="portfolio-content">
                        <h3>TechCorp Rebranding</h3>
                        <p>Complete digital transformation for a leading technology corporation, resulting in 300% increase in brand recognition.</p>
                    </div>
                </div>
                
                <div class="portfolio-item">
                    <div class="portfolio-image">🍕</div>
                    <div class="portfolio-content">
                        <h3>Gourmet Pizza Co.</h3>
                        <p>Fresh brand identity and digital presence for a local restaurant chain, boosting online orders by 250%.</p>
                    </div>
                </div>
                
                <div class="portfolio-item">
                    <div class="portfolio-image">💡</div>
                    <div class="portfolio-content">
                        <h3>InnovateLab Startup</h3>
                        <p>From concept to launch - complete branding package for a tech startup that secured $2M in funding.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Blog Section -->
    <section id="blog" class="blog">
        <div class="container">
            <div class="section-header">
                <h2>Golden Insights & Industry Trends</h2>
                <p>Stay ahead of the curve with our expert insights on digital branding, design trends, and marketing strategies that drive real results.</p>
            </div>
            
            <div class="blog-grid">
                <div class="blog-card">
                    <div class="blog-image">📝</div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span class="blog-date">Dec 15, 2024</span>
                            <span class="blog-category">Brand Strategy</span>
                        </div>
                        <h3>5 Essential Brand Elements That Convert Visitors Into Customers</h3>
                        <p>Discover the key brand elements that create emotional connections and drive conversions. Learn how to implement these strategies for maximum impact on your digital presence.</p>
                        <a href="#" class="read-more">Read More</a>
                    </div>
                </div>
                
                <div class="blog-card">
                    <div class="blog-image">🎨</div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span class="blog-date">Dec 08, 2024</span>
                            <span class="blog-category">Design Trends</span>
                        </div>
                        <h3>2025 Web Design Trends That Will Transform Your Digital Presence</h3>
                        <p>Explore the cutting-edge design trends that will dominate 2025. From micro-interactions to bold typography, discover what's next in digital design.</p>
                        <a href="#" class="read-more">Read More</a>
                    </div>
                </div>
                
                <div class="blog-card">
                    <div class="blog-image">🚀</div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span class="blog-date">Nov 30, 2024</span>
                            <span class="blog-category">Digital Marketing</span>
                        </div>
                        <h3>The ROI of Professional Branding: Real Numbers From Our Clients</h3>
                        <p>See the actual impact of strategic branding on business growth. We share real case studies and metrics that demonstrate the value of professional brand development.</p>
                        <a href="#" class="read-more">Read More</a>
                    </div>
                </div>
            </div>
            
            <div class="blog-cta">
                <h3>Want More Golden Insights?</h3>
                <p>Subscribe to our newsletter and never miss the latest trends, tips, and strategies that can transform your brand into digital gold.</p>
                <a href="#contact" class="cta-button">Subscribe Now</a>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-header">
                <h2>Let's Create Something Golden Together</h2>
                <p>Ready to transform your brand? Get in touch with our team and let's discuss how we can elevate your digital presence.</p>
            </div>
            
            <div class="contact-content">
                <div class="contact-form">
                    <form>
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="company">Company Name</label>
                            <input type="text" id="company" name="company">
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Project Details</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        
                        <button type="submit" class="cta-button" style="width: 100%;">Send Message</button>
                    </form>
                </div>
                
                <div class="contact-info">
                    <h3>Get In Touch</h3>
                    <p>We're here to help you create extraordinary digital experiences. Reach out through any of the channels below or fill out our contact form.</p>
                    
                    <div class="contact-details">
                        <div class="contact-item">
                            <div class="contact-icon">📧</div>
                            <div>
                                <strong>Email</strong><br>
                                hello@puregolddigital.com
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">📱</div>
                            <div>
                                <strong>Phone</strong><br>
                                +1 (555) 123-4567
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">📍</div>
                            <div>
                                <strong>Location</strong><br>
                                New York, NY 10001
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">⏰</div>
                            <div>
                                <strong>Business Hours</strong><br>
                                Mon-Fri: 9AM-6PM EST
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>&copy; 2025 Pure Gold Digital Branding. All rights reserved. | Transforming brands into digital gold.</p>
        </div>
    </footer>
    <script>
            // Smooth scrolling for navigation links
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

        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you within 24 hours.');
            this.reset();
        });

        // Add entrance animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.service-card, .portfolio-item, .about-text, .contact-form').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    </script>
