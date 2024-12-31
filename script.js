// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Experience Data
const experiences = [
    {
        title: "Senior Researcher",
        company: "Centre of AI and BigData",
        period: "Oct 2024 - Present",
        location: "Miānwāli, Punjab, Pakistan",
        type: "Full-time",
        skills: ["Performance Management", "Operations Management", "Project Management", "Collaborative Problem Solving", "Team Management", "Interdisciplinary Collaboration", "Teamwork"]
    },
    {
        title: "Assistant Professor",
        company: "Namal University",
        period: "Sep 2024 - Present",
        location: "Miānwāli, Punjab, Pakistan",
        type: "Full-time",
        skills: ["Big Data", "Embedded Systems", "Artificial Intelligence (AI)", "Higher Education Teaching"]
    },
    {
        title: "Senior Lecturer",
        company: "Riphah International University",
        period: "Sep 2022 - Aug 2024",
        location: "Islamabad, Pakistan",
        type: "Full-time",
        skills: ["Machine Learning", "Computer Vision", "Data Analysis", "Matlab", "Research and Development", "Cloud Computing", "Classification", "IoT", "Grant Writing", "Research Funding", "PyTorch", "Deep Learning", "Python", "TensorFlow", "Keras"]
    },
    {
        title: "Lecturer",
        company: "Riphah International University",
        period: "May 2015 - Aug 2022",
        location: "Islamabad, Pakistan",
        type: "Full-time",
        skills: ["Matlab", "Research and Development", "IoT", "Higher Education Teaching"]
    },
    {
        title: "Technical Executive",
        company: "wi-tribe Pakistan",
        period: "Dec 2014 - May 2015",
        location: "Islamabad, Pakistan",
        description: "Troubleshooting of WiMAX CPEs and refurbishment operations"
    }
];

// Complete Projects Data
const projects = [
    {
        title: "Deep Learning-Driven Air Quality Monitoring and Future Prediction System",
        period: "Oct 2023 - Jul 2024",
        description: "Development of an advanced air quality monitoring system capable of measuring Air Quality Index (AQI) in real-time using deep learning techniques for prediction.",
        skills: ["Classification", "Git", "Deep Learning", "IoT"],
        organization: "Riphah International University"
    },
    {
        title: "Real-Time Dress Code Monitoring System",
        period: "Oct 2023 - Jul 2024",
        description: "Implementation of a sophisticated dress code monitoring system using deep learning and computer vision for educational institutes.",
        skills: ["Data Collection", "Classification", "Computer Vision", "Data Segmentation", "Git"],
        organization: "Riphah International University"
    },
    {
        title: "Smart Fuel Monitoring and Fraud Prevention System",
        period: "Oct 2023 - Jul 2024",
        description: "Development of an electromechanical sensor system with blockchain integration for fuel monitoring and fraud prevention.",
        skills: ["ESP32 Microcontrollers", "Sensors", "Arduino", "Blockchain"],
        organization: "Riphah International University"
    },
    {
        title: "Real-time Weapon Detection using Deep Learning",
        period: "Jul 2022 - Jul 2023",
        description: "Implementation of real-time weapon detection system using deep learning and computer vision.",
        skills: ["Python", "Computer Vision", "Deep Learning", "Jetson Nano", "Keras"],
        organization: "Riphah International University"
    },
    {
        title: "Vision-based Fight Detection from Surveillance Cameras",
        period: "Sep 2022 - Jul 2023",
        description: "Development of an automated system for detecting fights in surveillance footage using deep learning.",
        skills: ["Python", "Computer Vision", "Deep Learning", "Object Detection"],
        organization: "Riphah International University"
    },
    {
        title: "Weed Detection and Spot Spraying System",
        period: "Sep 2022 - Jul 2023",
        description: "Development of an automated system for detecting and spraying weeds in agricultural settings.",
        skills: ["Python", "Computer Vision", "Deep Learning", "Image Segmentation"],
        organization: "Riphah International University"
    },
    {
        title: "Classification of Physiological Signals",
        period: "Oct 2021 - Feb 2023",
        description: "Research on classification of physiological signals for Human Computer Interaction using Deep Learning.",
        skills: ["Scientific Research", "Classification", "Deep Learning", "Matlab", "Keras"],
        organization: "Riphah International University"
    },
    {
        title: "Design and Fabrication of Electric Bike",
        period: "Sep 2021 - Jun 2022",
        description: "Development of an electric bicycle with modern features and efficient power management.",
        skills: ["Hardware Design", "Electronics", "Power Systems"],
        organization: "Riphah International University"
    }
];

// Research Papers Data
const publications = [
    {
        title: "Spectral Processing of Self-Mixing Interferometric Signal Phase for Improved Vibration Sensing",
        journal: "IEEE Sensors Journal",
        year: 2019,
        impact: 4.325,
        doi: "10.1109/JSEN.2019.2935087"
    },
    {
        title: "E2CNN: An Efficient Concatenated CNN for Classification of Surface EMG Extracted from Upper-Limb",
        journal: "IEEE Sensors Journal",
        year: 2023,
        impact: 4.325,
        doi: "10.1109/JSEN.2023.3255408"
    },
    {
        title: "Enhancing Ductal Carcinoma Classification Using Transfer Learning with 3D U-Net Models",
        journal: "Applied Sciences",
        year: 2023,
        impact: 2.838,
        doi: "10.3390/app13074255"
    },
    {
        title: "Automated Uterine Fibroids Detection in Ultrasound Images Using Deep CNNs",
        journal: "Healthcare",
        year: 2023,
        impact: 2.8,
        doi: "10.3390/healthcare11101493"
    }
];

// Google Scholar Metrics
const scholarMetrics = {
    citations: 214,
    hIndex: 9,
    i10Index: 9,
    publicationsCount: 20
};

// Function to display experiences
function displayExperiences() {
    const experienceGrid = document.querySelector('.experience-grid');
    if (experienceGrid) {
        const experienceHTML = experiences.map(exp => `
            <div class="experience-item">
                <h3>${exp.title}</h3>
                <p class="company">${exp.company}</p>
                <p class="date">${exp.period}</p>
                <p class="location">${exp.location}</p>
                ${exp.skills ? `
                <div class="skills-container">
                    ${exp.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
                ` : ''}
                ${exp.description ? `<p class="description">${exp.description}</p>` : ''}
            </div>
        `).join('');
        experienceGrid.innerHTML = experienceHTML;
    }
}

// Function to display projects with details
function displayProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        const projectsHTML = projects.map(project => `
            <div class="project-item">
                <h3>${project.title}</h3>
                <p class="project-period">${project.period}</p>
                <p class="organization">${project.organization}</p>
                <p class="project-description">${project.description}</p>
                <div class="project-skills">
                    ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `).join('');
        projectsGrid.innerHTML = projectsHTML;
    }
}

// Function to display publications with details
function displayPublications() {
    const publicationsList = document.querySelector('.publications-list');
    if (publicationsList) {
        const publicationsHTML = publications.map(pub => `
            <div class="publication-item">
                <h3>${pub.title}</h3>
                <p class="journal">${pub.journal} (${pub.year})</p>
                <p class="impact">Impact Factor: ${pub.impact}</p>
                <a href="https://doi.org/${pub.doi}" target="_blank" class="btn secondary">
                    <i class="fas fa-external-link-alt"></i> View Publication
                </a>
            </div>
        `).join('');
        publicationsList.innerHTML = publicationsHTML;
    }
}

// Function to display Google Scholar metrics
function displayScholarMetrics() {
    const metricsContainer = document.querySelector('.research-stats');
    if (metricsContainer) {
        metricsContainer.innerHTML = `
            <div class="stat-item">
                <h3>${scholarMetrics.citations}</h3>
                <p>Citations</p>
            </div>
            <div class="stat-item">
                <h3>${scholarMetrics.hIndex}</h3>
                <p>h-index</p>
            </div>
            <div class="stat-item">
                <h3>${scholarMetrics.i10Index}</h3>
                <p>i10-index</p>
            </div>
            <div class="stat-item">
                <h3>${scholarMetrics.publicationsCount}</h3>
                <p>Publications</p>
            </div>
        `;
    }
}

// Call all display functions when page loads
window.addEventListener('load', () => {
    displayScholarMetrics();
    displayExperiences();
    displayProjects();
    displayPublications();
});
