import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  { 
    id: 1, 
    number: '01',
    title: 'GB Oliphant Services Ltd', 
    category: 'Corporate Web Design', 
    desc: 'A comprehensive corporate platform showcasing services, company profile, and client portals.', 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL'] 
  },
  { 
    id: 2, 
    number: '02',
    title: 'Aurelia Grand Hotel', 
    category: 'Hospitality & Booking', 
    desc: 'Elegant hotel booking platform with room tours, reservation systems, and event management.', 
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop',
    tags: ['Next.js', 'Stripe', 'Tailwind'] 
  },
  { 
    id: 3, 
    number: '03',
    title: 'Pinpoint Kitchen & Cravehub', 
    category: 'Food & E-commerce', 
    desc: 'Dynamic food ordering platform with real-time order tracking and menu management system.', 
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=900&fit=crop',
    tags: ['React Native', 'Firebase'] 
  },
  { 
    id: 4, 
    number: '04',
    title: 'Meridian FX', 
    category: 'FinTech Dashboard', 
    desc: 'High-performance forex trading dashboard with real-time data visualization and analytics.', 
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&h=900&fit=crop',
    tags: ['Vue.js', 'D3.js', 'Python'] 
  },
  { 
    id: 5, 
    number: '05',
    title: 'Nexus Digital Agency', 
    category: 'Creative Agency', 
    desc: 'Creative agency portfolio featuring smooth animations, case studies, and client showcase.', 
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&h=900&fit=crop',
    tags: ['Framer Motion', 'React'] 
  },
];

export default function Portfolio() {
  const ref = useScrollReveal();
  const [activeId, setActiveId] = useState(1);

  const activeProject = projects.find(p => p.id === activeId);

  return (
    <section id="portfolio" className="portfolio-showcase" ref={ref}>
      <div className="showcase-header reveal">
        <span className="section-tag">SELECTED WORK</span>
        <h2 className="showcase-title">
          Crafting Digital <br />
          <span className="gradient-text">Masterpieces.</span>
        </h2>
      </div>

      <div className="showcase-container reveal">
        {/* The Big Preview Image */}
        <div className="showcase-preview">
          {projects.map(project => (
            <div 
              key={project.id}
              className={`preview-image ${activeId === project.id ? 'active' : ''}`}
            >
              <img src={project.image} alt={project.title} />
              <div className="preview-overlay">
                <div className="preview-content">
                  <span className="preview-category">{project.category}</span>
                  <h3 className="preview-title">{project.title}</h3>
                  <div className="preview-tags">
                    {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                  <button className="view-project-btn">View Case Study →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Interactive List */}
        <div className="showcase-list">
          {projects.map(project => (
            <div
              key={project.id}
              className={`showcase-item ${activeId === project.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveId(project.id)}
              onClick={() => setActiveId(project.id)} // For mobile
            >
              <span className="item-number">{project.number}</span>
              <h3 className="item-title">{project.title}</h3>
              <span className="item-category">{project.category}</span>
              <div className="item-arrow">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}