import { useState, useEffect } from 'react';
import { personalInfo, stats, researchPipeline, researchAreas, publications, academicJourney, awards } from './data/portfolioData';
import { Activity, Waves, Brain, Zap, Cpu, HardDrive, Bot, ChevronRight, Mail, ExternalLink, BookOpen, Download, Send, Menu, X } from 'lucide-react';

// Navigation Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#research', label: 'Research' },
    { href: '#publications', label: 'Publications' },
    { href: '#projects', label: 'Projects' },
    { href: '#group', label: 'Research Group' },
    { href: '#teaching', label: 'Teaching' },
    { href: '#cv', label: 'CV' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="nav-logo">MFQ</a>
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.href}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  const iconMap = { activity: Activity, waves: Waves, brain: Brain, zap: Zap, cpu: Cpu, 'hard-drive': HardDrive, bot: Bot };

  return (
    <section className="hero">
      <div className="bg-grid"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{personalInfo.name}</h1>
          <p className="hero-subtitle">{personalInfo.title}</p>
          <p className="hero-statement">{personalInfo.researchStatement}</p>
          <div className="hero-buttons">
            <a href="#research" className="btn btn-primary"><BookOpen size={18} /> Explore Research</a>
            <a href="#publications" className="btn btn-secondary"><Download size={18} /> Publications</a>
            <a href="#contact" className="btn btn-secondary"><Mail size={18} /> Collaborate</a>
          </div>
          <div className="pipeline-animation">
            <p className="pipeline-title">Research Pipeline</p>
            <div className="pipeline-flow">
              {researchPipeline.map((step, idx) => {
                const Icon = iconMap[step.icon] || Activity;
                return (
                  <div key={step.id}>
                    <div className="pipeline-step">
                      <Icon className="pipeline-step-icon" size={20} />
                      <span className="pipeline-step-label">{step.shortTitle}</span>
                    </div>
                    {idx < researchPipeline.length - 1 && <ChevronRight className="pipeline-arrow" size={16} />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <div className="hero-image-inner">MFQ</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats Section
function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map(stat => (
          <div key={stat.label} className="stat-card fade-in">
            <span className="stat-value">{stat.value}{stat.suffix}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// Research Areas Section
function ResearchAreas() {
  return (
    <section id="research">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Research Areas</h2>
          <p className="section-subtitle">Advancing the frontiers of Edge AI, Embedded Intelligence, and Autonomous Systems</p>
        </div>
        <div className="research-areas-grid">
          {researchAreas.map(area => (
            <div key={area.id} className="research-area-card fade-in">
              <h3 className="research-area-title">{area.title}</h3>
              <p className="research-area-desc">{area.description}</p>
              <div className="research-area-keywords">
                {area.keywords.map(kw => (
                  <span key={kw} className="keyword-tag">{kw}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Publications Section
function Publications() {
  const [filter, setFilter] = useState({ year: 'all', type: 'all', search: '' });
  
  const filteredPubs = publications.filter(pub => {
    if (filter.year !== 'all' && pub.year.toString() !== filter.year) return false;
    if (filter.type !== 'all' && pub.type !== filter.type) return false;
    if (filter.search && !pub.title.toLowerCase().includes(filter.search.toLowerCase())) return false;
    return true;
  });

  const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);

  return (
    <section id="publications">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Publications</h2>
          <p className="section-subtitle">Peer-reviewed research in top-tier journals and conferences</p>
        </div>
        <div className="publications-browser">
          <div className="pub-filters">
            <div className="filter-group">
              <label className="filter-label">Search</label>
              <input type="text" className="search-input" placeholder="Search publications..." value={filter.search} onChange={e => setFilter({...filter, search: e.target.value})} />
            </div>
            <div className="filter-group">
              <label className="filter-label">Year</label>
              <select className="filter-select" value={filter.year} onChange={e => setFilter({...filter, year: e.target.value})}>
                <option value="all">All Years</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-label">Type</label>
              <select className="filter-select" value={filter.type} onChange={e => setFilter({...filter, type: e.target.value})}>
                <option value="all">All Types</option>
                <option value="journal">Journal</option>
                <option value="conference">Conference</option>
              </select>
            </div>
          </div>
          <div className="pub-list">
            {filteredPubs.slice(0, 10).map(pub => (
              <div key={pub.id} className={`pub-item ${pub.selected ? 'selected' : ''} fade-in`}>
                <h4 className="pub-title">{pub.title}</h4>
                <p className="pub-authors">{pub.authors.join(', ')}</p>
                <p className="pub-venue">{pub.venue}</p>
                <div className="pub-meta">
                  <span className="pub-year">{pub.year}</span>
                  <span className="pub-type">{pub.type}</span>
                  <span className="pub-citations">{pub.citations} citations</span>
                </div>
                <div className="pub-actions">
                  <button className="pub-action-btn">DOI</button>
                  <button className="pub-action-btn">BibTeX</button>
                  <button className="pub-action-btn">PDF</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Academic Journey
function AcademicJourney() {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Academic Journey</h2>
        </div>
        <div className="timeline">
          {academicJourney.map(item => (
            <div key={item.id} className="timeline-item fade-in">
              <div className="timeline-marker"></div>
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-institution">{item.institution}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Awards Section
function Awards() {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Awards & Grants</h2>
        </div>
        <div className="research-areas-grid">
          {awards.map(award => (
            <div key={award.id} className="card fade-in">
              <span className="pub-year">{award.year}</span>
              <h3 className="research-area-title" style={{marginTop: '1rem'}}>{award.title}</h3>
              <p className="research-area-desc">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-content">
        <div className="contact-intro">
          <h2 className="section-title">Let's Collaborate</h2>
          <p className="section-subtitle">Interested in Edge AI, Embedded Intelligence, Biomedical AI, Autonomous Systems, or Hardware–Software Co-Design?</p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${personalInfo.email}`} className="contact-link"><Mail size={20} /> Email</a>
          <a href={personalInfo.googleScholar} className="contact-link"><BookOpen size={20} /> Google Scholar</a>
          <a href={personalInfo.linkedin} className="contact-link"><Linkedin size={20} /> LinkedIn</a>
          <a href={personalInfo.github} className="contact-link"><Github size={20} /> GitHub</a>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" className="form-input" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" placeholder="your@email.com" />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" placeholder="Tell me about your research interest or collaboration idea..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary"><Send size={18} /> Send Message</button>
        </form>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">MFQ</div>
        <p className="footer-text">Dr. Muhammad Farrukh Qureshi | Edge AI Researcher</p>
        <div className="footer-links">
          <a href="#research" className="footer-link">Research</a>
          <a href="#publications" className="footer-link">Publications</a>
          <a href="#teaching" className="footer-link">Teaching</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Dr. Muhammad Farrukh Qureshi. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Main App
function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <ResearchAreas />
      <Publications />
      <AcademicJourney />
      <Awards />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
