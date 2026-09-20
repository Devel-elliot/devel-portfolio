import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import profileImg from '../assets/profileimage.jpeg';

export default function Hero() {
  const ref = useScrollReveal();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero-bg-gradient"></div>
      
      <div className="hero-container">
        <div className={`hero-content ${loaded ? 'loaded' : ''}`}>
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            Available for freelance work
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Elliot</span>
            <br />
            <span className="hero-subtitle">Full Stack Developer</span>
          </h1>
          
          <p className="hero-description">
            I craft premium digital experiences through clean code, thoughtful design, 
            and modern technology. Turning complex problems into elegant, user-friendly solutions.
          </p>
          
          <div className="hero-cta">
            <button 
              className="btn btn-primary btn-glow"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Talk
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>

        <div className={`hero-image-wrapper ${loaded ? 'loaded' : ''}`}>
          <div className="hero-image-container">
            <div className="hero-image-bg"></div>
            <div className="hero-image-ring"></div>
            <img 
              src={profileImg} 
              alt="Elliot - Full Stack Developer" 
              className="hero-image"
            />
            <div className="hero-image-overlay"></div>
            
            {/* Floating badges */}
            <div className="floating-badge badge-1">
              <span className="badge-icon">⚡</span>
              <span>Fast</span>
            </div>
            <div className="floating-badge badge-2">
              <span className="badge-icon">🎨</span>
              <span>Creative</span>
            </div>
            <div className="floating-badge badge-3">
              <span className="badge-icon">💻</span>
              <span>Modern</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}