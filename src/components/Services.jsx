import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { X, ArrowRight } from './Icons';

const services = [
  { id: 1, title: 'Web Development', desc: 'Building fast, scalable, and secure web applications using modern frameworks like React and Node.js.', fullDesc: 'I specialize in building high-performance web applications from the ground up. Using technologies like React, Next.js, and Node.js, I ensure your website is fast, secure, and scalable. From simple landing pages to complex dashboards, I handle the entire development lifecycle including database design, API integration, and deployment.', bg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop' },
  { id: 2, title: 'UI/UX Design', desc: 'Crafting intuitive and visually stunning user interfaces that enhance user engagement.', fullDesc: 'Great design is about more than just looks; it is about how it works. I create user-centric interfaces that are intuitive and beautiful. My process involves wireframing, prototyping in Figma, and rigorous user testing to ensure the final product provides a seamless experience for your customers.', bg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop' },
  { id: 3, title: 'Mobile Development', desc: 'Developing cross-platform mobile applications that provide native-like performance.', fullDesc: 'I build mobile applications that work flawlessly on both iOS and Android using React Native. This allows for a single codebase that delivers a native feel, reducing development time and cost while maintaining high performance and access to device features like cameras and GPS.', bg: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop' },
  { id: 4, title: 'Brand Identity', desc: 'Creating cohesive visual identities that communicate your brand\'s core values.', fullDesc: 'Your brand is your story. I help you tell it through cohesive visual identities. This includes logo design, color palette selection, typography, and brand guidelines. I ensure that every touchpoint your customer has with your brand feels professional and consistent.', bg: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&h=600&fit=crop' },
];

export default function Services() {
  const ref = useScrollReveal();
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="services" ref={ref}>
      <div className="section-header reveal">
        <span className="section-tag">What I Do</span>
        <h2 className="section-title">Services I Offer</h2>
        <p className="section-subtitle">Comprehensive digital solutions tailored to your business needs.</p>
      </div>

      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className="service-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="service-card::before" style={{ backgroundImage: `url(${service.bg})` }}></div>
              <div className="service-content">
                <div className="service-number">0{service.id}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <button className="service-link" onClick={() => setSelectedService(service)}>Learn More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}><X size={24} /></button>
            <div className="modal-body">
              <div className="modal-image-large"><img src={selectedService.bg} alt={selectedService.title} /></div>
              <span className="section-tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>Service Details</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{selectedService.title}</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>{selectedService.fullDesc}</p>
              <button className="btn btn-primary" onClick={() => { setSelectedService(null); document.getElementById('contact').scrollIntoView({behavior: 'smooth'}); }}>
                Hire Me For This <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}