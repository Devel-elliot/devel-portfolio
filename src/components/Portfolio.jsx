import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from './Icons';

const projects = [
  { 
    id: 1, 
    number: '01',
    title: 'GB Oliphant Services Ltd', 
    category: 'Corporate • Web Design', 
    desc: 'A comprehensive corporate platform showcasing services, company profile, and client portals with a modern, professional aesthetic that builds trust and credibility.', 
    bg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL'] 
  },
  { 
    id: 2, 
    number: '02',
    title: 'Aurelia Grand Hotel', 
    category: 'Hospitality • Booking', 
    desc: 'An elegant booking and showcase website for a luxury hotel, featuring room tours, reservation systems, and event management with seamless user experience.', 
    bg: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
    tags: ['Next.js', 'Stripe', 'Tailwind'] 
  },
  { 
    id: 3, 
    number: '03',
    title: 'Pinpoint Kitchen & Cravehub', 
    category: 'Food • E-commerce', 
    desc: 'A dynamic food ordering and restaurant management platform with real-time order tracking, menu management, and customer reviews for modern dining.', 
    bg: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&fit=crop',
    tags: ['React Native', 'Firebase', 'Redux'] 
  },
  { 
    id: 4, 
    number: '04',
    title: 'Meridian FX', 
    category: 'FinTech • Dashboard', 
    desc: 'A high-performance forex trading dashboard with real-time data visualization, portfolio tracking, and secure transaction processing for professional traders.', 
    bg: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop',
    tags: ['Vue.js', 'D3.js', 'Python'] 
  },
  { 
    id: 5, 
    number: '05',
    title: 'Nexus Digital Agency', 
    category: 'Agency • Portfolio', 
    desc: 'A creative agency portfolio featuring smooth animations, case studies, and a robust client inquiry system that converts visitors into customers.', 
    bg: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop',
    tags: ['Framer Motion', 'React', 'Sanity'] 
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
        <div className="stacked-cards">
          {projects.map((project, index) => {
            const offset = index - activeIndex;
            const isVisible = Math.abs(offset) <= 2;
            
            return (
              <div
                key={project.id}
                className={`stacked-card ${isVisible ? 'visible' : 'hidden'}`}
                style={{
                  transform: `translateX(${offset * 40}px) translateY(${Math.abs(offset) * -20}px) rotate(${offset * -2}deg)`,
                  zIndex: 10 - Math.abs(offset),
                  opacity: isVisible ? 1 - Math.abs(offset) * 0.25 : 0,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="card-left">
                  <div className="card-number">{project.number}</div>
                  <div className="card-category">{project.category}</div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.desc}</p>
                  <button 
                    className="card-cta"
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                  >
                    VIEW CASE STUDY <ArrowRight size={16} />
                  </button>
                </div>
                <div className="card-right">
                  <img src={project.bg} alt={project.title} />
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
              <div className="modal-image">
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