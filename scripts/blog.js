// Sample blog data (already provided, included for context)
const blogPosts = [
    {
        id: 1,
        title: "5 Essential Brand Elements That Convert Visitors Into Customers",
        excerpt: "Discover the key brand elements that create emotional connections and drive conversions. Learn how to implement these strategies for maximum impact.",
        category: "Brand Strategy",
        date: "May 25, 2025",
        icon: "📝",
        popularity: 95
    },
    {
        id: 2,
        title: "2025 Web Design Trends That Will Transform Your Digital Presence",
        excerpt: "Explore the cutting-edge design trends that will dominate 2025. From micro-interactions to bold typography, discover what's next.",
        category: "Design Trends",
        date: "May 22, 2025",
        icon: "🎨",
        popularity: 87
    },
    {
        id: 3,
        title: "The ROI of Professional Branding: Real Numbers From Our Clients",
        excerpt: "See the actual impact of strategic branding on business growth. We share real case studies and metrics that demonstrate value.",
        category: "Digital Marketing",
        date: "May 20, 2025",
        icon: "🚀",
        popularity: 92
    },
    {
        id: 4,
        title: "Psychology of Color in Digital Branding: What Works and Why",
        excerpt: "Understand how color psychology influences purchasing decisions and brand perception in the digital landscape.",
        category: "Brand Strategy",
        date: "May 18, 2025",
        icon: "🎭",
        popularity: 78
    },
    {
        id: 5,
        title: "Mobile-First Design: Creating Seamless User Experiences",
        excerpt: "Learn the principles of mobile-first design and how to create interfaces that work beautifully across all devices.",
        category: "Design Trends",
        date: "May 15, 2025",
        icon: "📱",
        popularity: 83
    },
    {
        id: 6,
        title: "Content Marketing Strategies That Drive Real Business Growth",
        excerpt: "Discover proven content marketing tactics that generate leads, build authority, and create lasting customer relationships.",
        category: "Digital Marketing",
        date: "May 12, 2025",
        icon: "📊",
        popularity: 89
    },
    {
        id: 7,
        title: "Building Brand Trust in the Digital Age",
        excerpt: "Explore strategies for establishing credibility and trust with your audience in an increasingly skeptical digital world.",
        category: "Brand Strategy",
        date: "May 10, 2025",
        icon: "🛡️",
        popularity: 91
    },
    {
        id: 8,
        title: "The Future of E-commerce Design: Trends to Watch",
        excerpt: "Stay ahead of the curve with emerging e-commerce design trends that boost conversions and enhance user experience.",
        category: "Design Trends",
        date: "May 8, 2025",
        icon: "🛒",
        popularity: 76
    },
    {
        id: 9,
        title: "Social Media Branding: Consistency Across Platforms",
        excerpt: "Learn how to maintain brand consistency across all social media platforms while adapting to each platform's unique requirements.",
        category: "Digital Marketing",
        date: "May 5, 2025",
        icon: "📲",
        popularity: 85
    }
];

let currentPage = 1;
const postsPerPage = 6;
let filteredPosts = [...blogPosts];
let selectedCategory = "All Categories";

// Render blog posts
function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToShow = filteredPosts.slice(startIndex, endIndex);

    blogGrid.innerHTML = postsToShow.map(post => `
        <div class="blog-card">
            <div class="blog-image">${post.icon}</div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-date">${post.date}</span>
                    <span class="blog-category">${post.category}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        </div>
    `).join('');

    updatePagination();
}

// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const pagination = document.getElementById('pagination');
    
    let paginationHTML = `
        <button class="pagination-btn" onclick="changePage(-1)" id="prevBtn" ${currentPage === 1 ? 'disabled' : ''}>← Previous</button>
    `;
    
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <a href="#" class="pagination-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</a>
        `;
    }
    
    paginationHTML += `
        <button class="pagination-btn" onclick="changePage(1)" id="nextBtn" ${currentPage === totalPages ? 'disabled' : ''}>Next →</button>
    `;
    
    pagination.innerHTML = paginationHTML;
}

// Change page
function changePage(direction) {
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const newPage = currentPage + direction;
    
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderBlogPosts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Go to specific page
function goToPage(page) {
    currentPage = page;
    renderBlogPosts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.category.toLowerCase().includes(searchTerm)
    );
    if (selectedCategory !== "All Categories") {
        filteredPosts = filteredPosts.filter(post => post.category === selectedCategory);
    }
    currentPage = 1;
    renderBlogPosts();
});

// Sort functionality
function sortPosts(sortBy) {
    switch(sortBy) {
        case 'newest':
            filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'oldest':
            filteredPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'popular':
            filteredPosts.sort((a, b) => b.popularity - a.popularity);
            break;
    }
    currentPage = 1;
    renderBlogPosts();
}

// Filter functionality
function toggleFilter() {
    const filterBtn = document.querySelector('.filter-btn');
    const existingDropdown = document.querySelector('.filter-options');

    if (existingDropdown) {
        existingDropdown.remove();
        return;
    }

    const categories = ["All Categories", ...new Set(blogPosts.map(post => post.category))];
    const dropdown = document.createElement('div');
    dropdown.className = 'filter-options';
    dropdown.style.position = 'absolute';
    dropdown.style.top = '100%';
    dropdown.style.right = '0';
    dropdown.style.background = 'white';
    dropdown.style.border = '2px solid #e9ecef';
    dropdown.style.borderRadius = '10px';
    dropdown.style.padding = '0.5rem';
    dropdown.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    dropdown.style.zIndex = '1000';
    dropdown.style.minWidth = '200px';

    dropdown.innerHTML = categories.map(category => `
        <div class="filter-option" style="padding: 0.5rem 1rem; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.background='rgba(255, 215, 0, 0.1)'" onmouseout="this.style.background='white'">${category}</div>
    `).join('');

    filterBtn.parentElement.appendChild(dropdown);

    dropdown.querySelectorAll('.filter-option').forEach(option => {
        option.addEventListener('click', () => {
            selectedCategory = option.textContent;
            filterBtn.querySelector('span:first-child').textContent = selectedCategory;
            filteredPosts = selectedCategory === "All Categories" 
                ? [...blogPosts] 
                : blogPosts.filter(post => post.category === selectedCategory);
            currentPage = 1;
            renderBlogPosts();
            dropdown.remove();
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function closeDropdown(e) {
        if (!dropdown.contains(e.target) && !filterBtn.contains(e.target)) {
            dropdown.remove();
            document.removeEventListener('click', closeDropdown);
        }
    });
}

// Initialize blog posts on page load
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('.newsletter-input');
    const email = emailInput.value.trim();
    
    if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});
