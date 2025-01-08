// Publication filtering and sorting functionality
document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const publications = document.querySelectorAll('.publication-card');
            
            publications.forEach(pub => {
                const title = pub.querySelector('h3').textContent.toLowerCase();
                const journal = pub.querySelector('.journal').textContent.toLowerCase();
                const description = pub.querySelector('p:not(.journal):not(.year)').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || 
                    journal.includes(searchTerm) || 
                    description.includes(searchTerm)) {
                    pub.style.display = 'block';
                } else {
                    pub.style.display = 'none';
                }
            });
        });
    }

    // Sort functionality
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const publications = Array.from(document.querySelectorAll('.publication-card'));
            const sortBy = this.value;
            
            publications.sort((a, b) => {
                if (sortBy === 'year') {
                    const yearA = parseInt(a.querySelector('.year')?.textContent) || 0;
                    const yearB = parseInt(b.querySelector('.year')?.textContent) || 0;
                    return yearB - yearA;
                } else if (sortBy === 'impact') {
                    const ifA = parseFloat(a.querySelector('.journal')?.textContent.match(/IF: ([\d.]+)/) || [0, 0])[1];
                    const ifB = parseFloat(b.querySelector('.journal')?.textContent.match(/IF: ([\d.]+)/) || [0, 0])[1];
                    return ifB - ifA;
                }
            });
            
            const container = document.querySelector('.publication-grid');
            publications.forEach(pub => container.appendChild(pub));
        });
    }

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.dataset.filter;
                const publications = document.querySelectorAll('.publication-card');
                
                filterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                publications.forEach(pub => {
                    if (filter === 'all') {
                        pub.style.display = 'block';
                    } else {
                        const badge = pub.querySelector('.journal-badge').textContent.toLowerCase();
                        pub.style.display = badge.includes(filter.toLowerCase()) ? 'block' : 'none';
                    }
                });
            });
        });
    }
});
