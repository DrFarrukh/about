document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('project-search');
    const sortSelect = document.getElementById('sort-projects');
    const projectGrid = document.querySelector('.card-grid');
    const projects = Array.from(document.querySelectorAll('.project-card'));
    
    // Search functionality
    searchInput.addEventListener('input', filterProjects);
    
    // Sorting functionality
    sortSelect.addEventListener('change', sortProjects);
    
    function filterProjects() {
        const searchTerm = searchInput.value.toLowerCase();
        
        projects.forEach(project => {
            const title = project.querySelector('h3').textContent.toLowerCase();
            const year = project.querySelector('.year').textContent.toLowerCase();
            const description = project.querySelector('p:not(.year)').textContent.toLowerCase();
            const technologies = Array.from(project.querySelectorAll('.tech-stack span'))
                .map(span => span.textContent.toLowerCase());
            
            const isVisible = 
                title.includes(searchTerm) || 
                year.includes(searchTerm) || 
                description.includes(searchTerm) ||
                technologies.some(tech => tech.includes(searchTerm));
                
            project.style.display = isVisible ? '' : 'none';
        });
    }
    
    function sortProjects() {
        const sortBy = sortSelect.value;
        
        const sortedProjects = projects.sort((a, b) => {
            switch(sortBy) {
                case 'year-desc':
                    return getYear(b) - getYear(a);
                case 'year-asc':
                    return getYear(a) - getYear(b);
                case 'title':
                    return getTitle(a).localeCompare(getTitle(b));
                case 'status':
                    return getStatus(b).localeCompare(getStatus(a));
                default:
                    return 0;
            }
        });
        
        // Clear and re-append sorted projects
        projectGrid.innerHTML = '';
        sortedProjects.forEach(project => projectGrid.appendChild(project));
    }
    
    // Helper functions to extract sorting values
    function getYear(project) {
        return parseInt(project.querySelector('.year').textContent.match(/\d{4}/)[0]);
    }
    
    function getTitle(project) {
        return project.querySelector('h3').textContent;
    }
    
    function getStatus(project) {
        return project.querySelector('.status-badge').textContent;
    }
});
