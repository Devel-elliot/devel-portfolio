import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from './Icons';

const projects = [
  { 
    id: 1, 
    number: '01',
    title: 'GB Oliphant Services Ltd', 
    category: 'Corporate Website', 
    desc: 'A comprehensive corporate platform showcasing services, company profile, and client portals with modern professional design.', 
    bg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL'] 
  },
  { 
    id: 2, 
    number: '02',
    title: 'Aurelia Grand Hotel', 
    category: 'Hospitality & Booking', 
    desc: 'Elegant hotel booking platform with room tours, reservation systems, and event management.', 
    bg: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
    tags: ['Next.js', 'Stripe', 'Tailwind'] 
  },
  { 
    id: 3, 
    number: '03',
    title: 'Pinpoint Kitchen & Cravehub', 
    category: 'Food & E-commerce', 
    desc: 'Dynamic food ordering platform with real-time order tracking and menu management system.', 
    bg: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&fit=crop',
    tags: ['React Native', 'Firebase'] 
  },
  { 
    id: 4, 
    number: '04',
    title: 'Meridian FX', 
    category: 'FinTech Dashboard', 
    desc: 'High-performance forex trading dashboard with real-time data visualization and analytics.', 
    bg: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop',
    tags: ['Vue.js', 'D3.js', 'Python'] 
  },
  { 
    id: 5, 
    number: '05',
    title: 'Nexus Digital Agency', 
    category: 'Creative Agency', 
    desc: 'Creative agency portfolio featuring smooth animations, case studies, and client showcase.', 
    bg: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop',
    tags: ['Framer Motion', 'React'] 
  },
];

export default function Portfolio() {
  const ref = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const nextProject = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="portfolio" className="portfolio-new" ref={ref}>
      <div className="portfolio-header">
        <span className="portfolio-label">PROJECTS</span>
        <h2 className="portfolio-heading">Designs That Blend<br />Creativity & Functionality</h2>
      </div>

      <div className="stacked-cards-container reveal">
        <div className="stacked-cards-modern">
          {projects.map((project, index) => {
            const offset = index - activeIndex;
            const isVisible = Math.abs(offset) <= 2;
            const isActive = offset === 0;
            
            return (
              <div
                key={project.id}
                className={`stacked-card-modern ${isVisible ? 'visible' : 'hidden'} ${isActive ? 'active' : ''}`}
                style={{
                  transform: `translateY(${offset * -80}px) scale(${1 - Math.abs(offset) * 0.08})`,
                  zIndex: 10 - Math.abs(offset),
                  opacity: isVisible ? 1 - Math.abs(offset) * 0.3 : 0,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="card-image-wrapper">
                  <img src={project.bg} alt={project.title} className="card-background" />
                  <div className="card-overlay"></div>
                </div>
                <div className="card-content-modern">
                  <div className="card-top">
                    <div className="card-number-modern">{project.number}</div>
                    <div className="card-category-modern">{project.category}</div>
                  </div>
                  <h3 className="card-title-modern">{project.title}</h3>
                  <p className="card-desc-modern">{project.desc}</p>
                  {isActive && (
                    <div className="card-footer">
                      <div className="card-tags">
                        {project.tags.map(tag => (
                          <span key={tag} className="mini-tag">{tag}</span>
                        ))}
                      </div>
                      <button 
                        className="card-cta-modern"
                        onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                      >
                        VIEW CASE STUDY <ArrowRight size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="card-controls">
          <div className="card-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
          <div className="card-arrows">
            <button className="arrow-btn" onClick={prevProject} aria-label="Previous project">
              ←
            </button>
            <button className="arrow-btn" onClick={nextProject} aria-label="Next project">
              →
            </button>
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-body">
              <div className="modal-image-large">
                <img src={selectedProject.bg} alt={selectedProject.title} />
              </div>
              <span className="section-tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                {selectedProject.category}
              </span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{selectedProject.title}</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
                {selectedProject.desc}
              </p>
              <h4 style={{ marginBottom: '1rem' }}>Technologies Used</h4>
              <div className="portfolio-tags" style={{ marginBottom: '2rem' }}>
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <button className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Visit Live Site <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}