import { useScrollReveal } from '../hooks/useScrollReveal';
import profileImg from '../assets/profileimage.jpeg';

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section id="home" className="hero" ref={ref}>
      {/* Background Video */}
      <video
        className="hero-video-bg"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-abstract-tech-background-3846/1080p.mp4"
          type="video/mp4"
        />
        {/* Alternative coding video */}
        <source
          src="https://cdn.coverr.co/videos/coverr-code-animation-6543/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content reveal">
          <div className="hero-badge">Available for Projects</div>
          <h1 className="hero-title">
            Where Design <br />
            <span className="gradient"> Meets </span> Code.
          </h1>
          <p className="hero-subtitle">Full-Stack Developer & UI/UX Engineer</p>
          <p className="hero-description">
            I build high-performance, scalable web applications and intuitive user interfaces that help businesses grow and stand out in the digital landscape.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Let's Talk
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper reveal">
          <div className="hero-image-container">
            <img 
              src={profileImg} 
              alt="Developer Portrait" 
              className="hero-image" 
            />
            <div className="hero-image-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}