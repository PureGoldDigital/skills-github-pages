// Updated blog data with only the actual published post
const blogPosts = [
    {
        id: 1,
        title: "The Complete Guide to Building a Brand That Converts in 2025",
        excerpt: "Discover the essential strategies and proven frameworks that transform ordinary brands into conversion powerhouses. Learn how to create emotional connections, build trust, and drive meaningful business growth through strategic brand development.",
        category: "Brand Strategy",
        date: "May 28, 2025",
        icon: "🎯",
        popularity: 100,
        url: "https://puregolddigital.github.io/www.puregolddigitalagency.com/blogs/Your-Brand-Style-Guide:-The-Unsung-Hero-of-Consistent-Marketing.html"
    }
];

let currentPage = 1;
const postsPerPage = 6;
let filteredPosts = [...blogPosts];
let selectedCategory = "All Categories";

// Render blog posts - hide section if only one post (which is featured)
function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    const blogGridSection = document.querySelector('.blog-grid-section');
    
    // If we only have one post, hide the latest articles section since it's already featured
    if (blogPosts.length === 1) {
        blogGridSection.style.display = 'none';
        return;
    }
    
    blogGridSection.style.display = 'block';
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
                <a href="${post.url}" class="read-more">Read More</a>
            </div>
        </div>
    `).join('');

    updatePagination();
}

// Update pagination - simplified for single post
function updatePagination() {
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const pagination = document.getElementById('pagination');
    
    // Hide pagination if only one page
    if (totalPages <= 1) {
        pagination.style.display = 'none';
        return;
    }
    
    pagination.style.display = 'flex';
    
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

// Search functionality - handle single post case
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
    
    // Show/hide search results message
    const blogGridSection = document.querySelector('.blog-grid-section');
    const sectionHeader = blogGridSection.querySelector('.section-header h2');
    
    if (filteredPosts.length === 0) {
        blogGridSection.style.display = 'block';
        sectionHeader.textContent = 'No articles found';
        document.getElementById('blogGrid').innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No articles match your search criteria.</p>';
    } else if (blogPosts.length > 1) {
        sectionHeader.textContent = 'Latest Articles';
    }
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

// Filter functionality - simplified for single category
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

// Update the featured post link as well
function updateFeaturedPost() {
    const featuredPost = document.querySelector('.featured-post');
    if (featuredPost) {
        const readMoreLink = featuredPost.querySelector('.read-more');
        if (readMoreLink) {
            readMoreLink.href = blogPosts[0].url;
        }
    }
}

// Initialize blog posts on page load
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
    updateFeaturedPost();
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
