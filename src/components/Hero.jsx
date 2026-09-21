import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import profileImg from '../assets/profileimage.jpeg';
const backImg = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=600&fit=crop';


const bgImages = [
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop', // Code on screen
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop'  // Laptop coding
];

export default function Hero() {
  const ref = useScrollReveal();
  const [loaded, setLoaded] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    setLoaded(true);
    // Change background image every 5 seconds
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero" ref={ref}>
      {/* Background Images with Fade */}
      <div className="hero-bg-images">
        {bgImages.map((img, index) => (
          <div 
            key={index}
            className={`hero-bg-image ${index === currentBg ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      <div className="hero-video-overlay"></div>
      
      <div className="hero-container">
        <div className={`hero-content ${loaded ? 'loaded' : ''}`}>
          <div className="hero-badge"><span className="badge-pulse"></span>Available for freelance work</div>
          <h1 className="hero-title">Hi, I'm <span className="gradient-text">Elliot</span><br /><span className="hero-subtitle">Full Stack Developer</span></h1>
          <p className="hero-description">I craft premium digital experiences through clean code, thoughtful design, and modern technology.</p>
          <div className="hero-cta">
            <button className="btn btn-primary btn-glow" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Let's Talk</button>
            <button className="btn btn-outline" onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>View My Work</button>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-number">5+</span><span className="stat-label">Years Experience</span></div>
            <div className="stat-divider"></div>
            <div className="stat"><span className="stat-number">50+</span><span className="stat-label">Projects Completed</span></div>
            <div className="stat-divider"></div>
            <div className="stat"><span className="stat-number">30+</span><span className="stat-label">Happy Clients</span></div>
          </div>
        </div>

        <div className={`hero-image-wrapper ${loaded ? 'loaded' : ''}`}>
          <div className="hero-image-flipper">
            <div className="hero-image-inner">
              <div className="hero-image-face front">
                <img src={profileImg} alt="Elliot" />
                <div className="sound-wave"></div>
              </div>
              <div className="hero-image-face back">
                <img src={backImg} alt="Coding Setup" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-mouse"><div className="scroll-wheel"></div></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}