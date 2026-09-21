import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import profileImg from '../assets/profileimage.jpeg';

const backImg = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=600&fit=crop'; 

export default function Hero() {
  const ref = useScrollReveal();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="hero" ref={ref}>
      {/* ... (Keep your background video code here exactly as it was) ... */}
      <div className="hero-video-container">
        <video autoPlay loop muted playsInline className="hero-video" poster="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop">
          <source src="https://videos.pexels.com/video-files/3195974/3195974-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>
      
      <div className="hero-container">
        <div className={`hero-content ${loaded ? 'loaded' : ''}`}>
          {/* ... (Keep your text, buttons, and stats exactly as they were) ... */}
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

        {/* NEW 3D FLIP IMAGE SECTION */}
        <div className={`hero-image-wrapper ${loaded ? 'loaded' : ''}`}>
          <div className="hero-image-flipper">
            <div className="hero-image-inner">
              {/* Front Side (Your Profile) */}
              <div className="hero-image-face front">
                <img src={profileImg} alt="Elliot" />
                <div className="sound-wave"></div>
              </div>
              {/* Back Side (The Flip Image) */}
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