import { useState, useEffect, useRef } from 'react';
import { portfolioData } from './data/portfolioData.js';
import { 
  Menu, X, ChevronDown, ExternalLink, Download, Mail, 
  FileText, Search, Filter, Calendar, BookOpen, Users,
  Award, MapPin, Globe, Cpu, Brain, Zap, Activity, AudioWaveform as Waveform,
  HardDrive, Bot, ChevronRight, Star, Quote, ArrowRight, Send,
  GitBranch as GithubIcon, Link as LinkedinIcon
} from 'lucide-react';

// Icon mapping for research pipeline
const iconMap = {
  Activity: Activity,
  Waveform: Waveform,
  Brain: Brain,
  Zap: Zap,
  Cpu: Cpu,
  HardDrive: HardDrive,
  Bot: Bot
};

// Alias components for naming consistency
const Github = GithubIcon;
const Linkedin = LinkedinIcon;

// Custom hook for intersection observer animations
function useOnScreen(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
}

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Research', href: '#research' },
    { name: 'Publications', href: '#publications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Group', href: '#group' },
    { name: 'Teaching', href: '#teaching' },
    { name: 'CV', href: '#cv' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center font-bold text-navy-900 text-lg group-hover:scale-105 transition-transform">
              MFQ
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-4 space-y-2">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  const { personal, stats } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Dr. Muhammad Farrukh Qureshi
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-400 mb-6 font-light">
              {personal.title}
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              {personal.researchStatement}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#research" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-navy-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:-translate-y-0.5">
                Explore Research
              </a>
              <a href="#publications" className="px-6 py-3 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all">
                Publications
              </a>
              <a href="#group" className="px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                Research Group
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                <Download size={18} />
                CV
              </a>
              <a href="#contact" className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                <Mail size={18} />
                Contact
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {stats.map((stat, idx) => (
                <StatCard key={idx} stat={stat} index={idx} />
              ))}
            </div>
          </div>

          {/* Research Pipeline Visualization */}
          <div className="hidden lg:block">
            <ResearchPipelineVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cyan-400" size={32} />
      </div>
    </section>
  );
}

// Stat Card Component
function StatCard({ stat, index }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`text-center p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-cyan-500/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="text-2xl sm:text-3xl font-bold text-cyan-400">{stat.value}</div>
      <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
    </div>
  );
}

// Research Pipeline Visual
function ResearchPipelineVisual() {
  const stages = ['Sensing', 'Signal Processing', 'AI/ML', 'Optimization', 'Deployment', 'Autonomy'];

  return (
    <div className="relative">
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
        <h3 className="text-lg font-semibold text-white mb-6 text-center">Research Pipeline</h3>
        <div className="flex items-center justify-between gap-2">
          {stages.map((stage, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-navy-900 font-bold text-sm mb-2 animate-pulse">
                {idx + 1}
              </div>
              <div className="text-xs text-gray-400 text-center hidden xl:block">{stage}</div>
              {idx < stages.length - 1 && (
                <div className="hidden md:block absolute mt-8 ml-16 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500"></div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Physical World</span>
            <ArrowRight size={16} />
            <span>Sensors</span>
            <ArrowRight size={16} />
            <span>Signal Processing</span>
            <ArrowRight size={16} />
            <span>AI</span>
            <ArrowRight size={16} />
            <span>Optimization</span>
            <ArrowRight size={16} />
            <span>Edge Hardware</span>
            <ArrowRight size={16} />
            <span>Intelligent Action</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// About Section
function About() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am an Associate Professor and Head of the AI/ML Research Cluster at the National University of Sciences and Technology (NUST), Pakistan. With over 11 years of academic and research experience, my work spans the complete spectrum from physical sensing to deployable autonomous intelligent systems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My research program focuses on developing end-to-end intelligent systems that bridge the gap between theoretical machine learning advances and practical embedded deployment. I hold a PhD in Electrical Engineering with specialization in Deep Learning, and have published 28+ peer-reviewed articles in prestigious IEEE and international journals.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                In 2025, I received the MSCA Seal of Excellence with a score of 95.2/100, recognizing the excellence and impact potential of my research proposals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: BookOpen, label: "PhD in Electrical Engineering", sub: "Deep Learning Specialization" },
                { icon: Users, label: "Research Supervision", sub: "PhD, MS & Undergraduate" },
                { icon: Award, label: "MSCA Seal 2025", sub: "Score: 95.2/100" },
                { icon: Globe, label: "International Collaborations", sub: "UK, Spain, Denmark, Taiwan" }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/30 transition-all">
                  <item.icon className="text-cyan-400 mb-2" size={24} />
                  <div className="text-white font-semibold">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Research Vision Section
function ResearchVision() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [hoveredStage, setHoveredStage] = useState(null);

  return (
    <section id="research" className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Research Vision</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              An interconnected pipeline from physical sensing to autonomous intelligence
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-6"></div>
          </div>

          <div className="space-y-4">
            {portfolioData.researchPipeline.map((stage, idx) => {
              const IconComponent = iconMap[stage.icon] || Activity;
              const isHovered = hoveredStage === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-all duration-300 cursor-pointer ${
                    isHovered
                      ? 'bg-gray-800/80 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                      : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
                  }`}
                  onMouseEnter={() => setHoveredStage(idx)}
                  onMouseLeave={() => setHoveredStage(null)}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${isHovered ? 'bg-cyan-500/20' : 'bg-gray-800'}`}>
                        <IconComponent className={isHovered ? 'text-cyan-400' : 'text-gray-400'} size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-semibold mb-2 ${isHovered ? 'text-cyan-400' : 'text-white'}`}>
                          {stage.stage}
                        </h3>
                        <p className="text-gray-400 mb-4">{stage.description}</p>

                        {isHovered && (
                          <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
                            <div>
                              <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies</h4>
                              <div className="flex flex-wrap gap-2">
                                {stage.technologies.map((tech, tIdx) => (
                                  <span key={tIdx} className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-cyan-400 mb-2">Research Questions</h4>
                              <ul className="space-y-1">
                                {stage.researchQuestions.slice(0, 2).map((q, qIdx) => (
                                  <li key={qIdx} className="text-sm text-gray-400 flex items-start gap-2">
                                    <ChevronRight size={14} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                                    {q}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                      <ChevronRight className={`text-gray-600 transition-transform ${isHovered ? 'rotate-90 text-cyan-400' : ''}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Research Areas Section
function ResearchAreas() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Research Areas</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.researchAreas.map((area, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {area.keywords.slice(0, 4).map((kw, kIdx) => (
                    <span key={kIdx} className="px-2 py-1 text-xs rounded bg-gray-700/50 text-gray-400">
                      {kw}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <h4 className="text-xs font-semibold text-gray-500 mb-2">Representative Projects</h4>
                  <ul className="space-y-1">
                    {area.projects.map((proj, pIdx) => (
                      <li key={pIdx} className="text-sm text-gray-400 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-cyan-500"></div>
                        {proj}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Featured Projects Section
function FeaturedProjects() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Research</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Selected projects demonstrating end-to-end intelligent system development
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.featuredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group rounded-xl bg-gray-800/30 border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <Cpu className="text-gray-600 group-hover:text-cyan-400 transition-colors" size={64} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      project.status === 'Published' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'Active' ? 'bg-cyan-500/20 text-cyan-400' :
                      'bg-gray-700 text-gray-400'
                    }`}>
                      {project.status}
                    </span>
                    <ExternalLink size={16} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-navy-900 rounded-2xl border border-gray-700" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-800 bg-navy-900">
              <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Problem</h4>
                <p className="text-gray-300">{selectedProject.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Approach</h4>
                <p className="text-gray-300">{selectedProject.approach}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Hardware</h4>
                  <p className="text-gray-400 text-sm">{selectedProject.hardware}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Dataset</h4>
                  <p className="text-gray-400 text-sm">{selectedProject.dataset}</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Publications</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.publications.map((pub, idx) => (
                    <span key={idx} className="px-3 py-1 text-sm rounded bg-gray-800 text-gray-300 border border-gray-700">
                      {pub}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 pt-4 border-t border-gray-800">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:text-cyan-400 transition-colors">
                    <Github size={18} />
                    Code
                  </a>
                )}
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:text-cyan-400 transition-colors">
                    <ExternalLink size={18} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// Publications Section
function Publications() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [filterArea, setFilterArea] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const years = [...new Set(portfolioData.publications.map(p => p.year))].sort((a, b) => b - a);
  const areas = [...new Set(portfolioData.publications.map(p => p.area))];

  const filteredPubs = portfolioData.publications
    .filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pub.venue.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesYear = filterYear === 'all' || pub.year === parseInt(filterYear);
      const matchesType = filterType === 'all' || pub.type === filterType;
      const matchesArea = filterArea === 'all' || pub.area === filterArea;
      return matchesSearch && matchesYear && matchesType && matchesArea;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return b.year - a.year;
      if (sortBy === 'oldest') return a.year - b.year;
      if (sortBy === 'citations') return b.citations - a.citations;
      return 0;
    });

  return (
    <section id="publications" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Publications</h2>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">28+</div>
                <div className="text-sm text-gray-500">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">20</div>
                <div className="text-sm text-gray-500">Journal Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">490+</div>
                <div className="text-sm text-gray-500">Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">12</div>
                <div className="text-sm text-gray-500">h-index</div>
              </div>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto"></div>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <select
                value={filterYear}
                onChange={e => setFilterYear(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 focus:outline-none"
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>

              <select
                value={filterType}
                onChange={e => setFilterType(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 focus:outline-none"
              >
                <option value="all">All Types</option>
                <option value="journal">Journals</option>
                <option value="conference">Conferences</option>
              </select>

              <select
                value={filterArea}
                onChange={e => setFilterArea(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 focus:outline-none"
              >
                <option value="all">All Areas</option>
                {areas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 focus:outline-none"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="citations">Most Cited</option>
              </select>
            </div>
          </div>

          {/* Publication List */}
          <div className="space-y-4">
            {filteredPubs.map((pub, idx) => (
              <div
                key={pub.id}
                className="p-6 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{pub.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {pub.authors.join(', ')}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-cyan-400 italic">{pub.venue}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400">{pub.year}</span>
                      <span className="text-gray-500">•</span>
                      <span className="px-2 py-0.5 text-xs rounded bg-gray-700 text-gray-400 capitalize">{pub.type}</span>
                      <span className="text-gray-500">•</span>
                      <span className="px-2 py-0.5 text-xs rounded bg-cyan-500/10 text-cyan-400">{pub.area}</span>
                      {pub.firstAuthor && (
                        <>
                          <span className="text-gray-500">•</span>
                          <span className="px-2 py-0.5 text-xs rounded bg-yellow-500/10 text-yellow-400">First Author</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-sm text-gray-500">{pub.citations} citations</span>
                    <div className="flex gap-2">
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-gray-700 text-gray-400 hover:text-cyan-400 transition-colors" title="DOI">
                        <ExternalLink size={16} />
                      </a>
                      <button className="p-2 rounded bg-gray-700 text-gray-400 hover:text-cyan-400 transition-colors" title="Cite">
                        <Quote size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPubs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No publications found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Research Group Section
function ResearchGroup() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const { researchGroup } = portfolioData;

  return (
    <section id="group" className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Research Group</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
              {researchGroup.name}
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto">
              {researchGroup.description}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-6"></div>
          </div>

          {/* Research Themes */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {researchGroup.themes.map((theme, idx) => (
              <span key={idx} className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {theme}
              </span>
            ))}
          </div>

          {/* Members */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* PhD Students */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <BookOpen size={20} className="text-cyan-400" />
                PhD Researchers
              </h3>
              <div className="space-y-4">
                {researchGroup.members.phd.map((member, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-gray-800/30 border border-gray-700">
                    <div className="font-semibold text-white">{member.name}</div>
                    <div className="text-sm text-gray-400 mt-1">{member.topic}</div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs px-2 py-1 rounded bg-cyan-500/10 text-cyan-400">{member.area}</span>
                      <span className="text-xs text-gray-500">{member.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MS Students */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <BookOpen size={20} className="text-teal-400" />
                MS Researchers
              </h3>
              <div className="space-y-4">
                {researchGroup.members.ms.map((member, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-gray-800/30 border border-gray-700">
                    <div className="font-semibold text-white">{member.name}</div>
                    <div className="text-sm text-gray-400 mt-1">{member.topic}</div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs px-2 py-1 rounded bg-teal-500/10 text-teal-400">{member.area}</span>
                      <span className="text-xs text-gray-500">{member.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Undergrad Students */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <BookOpen size={20} className="text-green-400" />
                Undergraduate Researchers
              </h3>
              <div className="space-y-4">
                {researchGroup.members.undergrad.map((member, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-gray-800/30 border border-gray-700">
                    <div className="font-semibold text-white">{member.name}</div>
                    <div className="text-sm text-gray-400 mt-1">{member.topic}</div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-400">{member.area}</span>
                      <span className="text-xs text-gray-500">{member.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Teaching Section
function Teaching() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="teaching" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Teaching</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.teaching.map((course, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono text-cyan-400">{course.code}</span>
                  <a href={course.resources.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">
                    <Github size={18} />
                  </a>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{course.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.topics.slice(0, 4).map((topic, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 text-xs rounded bg-gray-700/50 text-gray-400">
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 pt-4 border-t border-gray-700">
                  {course.resources.slides && (
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <FileText size={12} /> Slides
                    </span>
                  )}
                  {course.resources.notebooks && (
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <CodeIcon /> Notebooks
                    </span>
                  )}
                  {course.resources.assignments && (
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <BookOpen size={12} /> Assignments
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple code icon component
function CodeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}

// Academic Journey Section
function AcademicJourney() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="cv" className="py-20 bg-navy-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Academic Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-teal-500"></div>

            <div className="space-y-8">
              {portfolioData.academicJourney.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-8 md:pl-0`}>
                    <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                      <span className="text-sm text-cyan-400 font-mono">{item.period}</span>
                      <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.institution}</p>
                      <p className="text-gray-500 text-sm mt-2">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-navy-950"></div>
                </div>
              ))}
            </div>
          </div>

          {/* CV Download */}
          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-navy-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
              <Download size={20} />
              Download Full CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Awards Section
function Awards() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Awards & Grants</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.awards.map((award, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-yellow-400" size={24} />
                  <span className="text-2xl font-bold text-white">{award.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{award.title}</h3>
                <p className="text-gray-400 text-sm">{award.description}</p>
                <span className={`inline-block mt-4 px-3 py-1 text-xs rounded-full ${
                  award.type === 'award' ? 'bg-yellow-500/10 text-yellow-400' :
                  award.type === 'grant' ? 'bg-green-500/10 text-green-400' :
                  'bg-purple-500/10 text-purple-400'
                }`}>
                  {award.type.charAt(0).toUpperCase() + award.type.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Collaborations Section
function Collaborations() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">International Collaborations</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Research partnerships across continents
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-6"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.collaborations.map((collab, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-gray-800/30 border border-gray-700 hover:border-cyan-500/30 transition-all flex items-center gap-4"
              >
                <MapPin className="text-cyan-400 flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold text-white">{collab.institution}</div>
                  <div className="text-sm text-gray-500">{collab.country}</div>
                  <div className="text-xs text-cyan-400 mt-1">{collab.area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Technology Stack Section
function TechnologyStack() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const { technologyStack } = portfolioData;

  const techCategories = [
    { key: 'aiData', name: 'AI / Data', icon: Brain },
    { key: 'signalProcessing', name: 'Signal Processing', icon: Waveform },
    { key: 'edgeEmbedded', name: 'Edge / Embedded', icon: Cpu },
    { key: 'deployment', name: 'Deployment', icon: HardDrive },
    { key: 'hardwareResearch', name: 'Hardware Research', icon: Cpu },
    { key: 'development', name: 'Development', icon: CodeIcon }
  ];

  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technology Stack</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category, idx) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gray-800/30 border border-gray-700"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="text-cyan-400" size={24} />
                    <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technologyStack[category.key].map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1.5 text-sm rounded-lg bg-gray-700/50 text-gray-300 border border-gray-600 hover:border-cyan-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-20 bg-navy-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Collaborate</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Interested in Edge AI, Embedded Intelligence, Biomedical AI, Autonomous Systems, or Hardware–Software Co-Design? Let's collaborate.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto"></div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a href={`mailto:${personal.email}`} className="p-4 rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
              <Mail size={24} />
            </a>
            <a href={personal.googleScholar} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
              <BookOpen size={24} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
              <Linkedin size={24} />
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
              <Github size={24} />
            </a>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="Research collaboration inquiry"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your research interests or collaboration ideas..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-navy-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 bg-navy-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center font-bold text-navy-900 text-sm">
              MFQ
            </div>
            <span className="text-gray-400 text-sm">Dr. Muhammad Farrukh Qureshi</span>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Intelligent Edge Systems Lab, NUST
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        ::selection {
          background: rgba(6, 182, 212, 0.3);
          color: white;
        }
      `}</style>
      
      <Navigation />
      <main>
        <Hero />
        <About />
        <ResearchVision />
        <ResearchAreas />
        <FeaturedProjects />
        <Publications />
        <ResearchGroup />
        <Teaching />
        <AcademicJourney />
        <Awards />
        <Collaborations />
        <TechnologyStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
