import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  { id: 1, title: 'Web Development', desc: 'Building fast, scalable, and secure web applications using modern frameworks like React, Next.js, and Node.js.', bg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop' },
  { id: 2, title: 'UI/UX Design', desc: 'Crafting intuitive and visually stunning user interfaces that enhance user engagement and satisfaction.', bg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop' },
  { id: 3, title: 'Mobile Development', desc: 'Developing cross-platform mobile applications that provide native-like performance and seamless experiences.', bg: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop' },
  { id: 4, title: 'Brand Identity', desc: 'Creating cohesive visual identities that communicate your brand\'s core values and resonate with your audience.', bg: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&h=600&fit=crop' },
];

export default function Services() {
  const ref = useScrollReveal();

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
                <a href="#contact" className="service-link">Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}