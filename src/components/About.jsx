import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="about" ref={ref}>
      <div className="section-header reveal">
        <span className="section-tag">About Me</span>
        <h2 className="section-title">Turning Vision Into Reality</h2>
        <p className="section-subtitle">A passionate developer dedicated to building exceptional digital products.</p>
      </div>

      <div className="about-container">
        <div className="about-image-wrapper reveal">
          <div className="about-image-bg"></div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" alt="Workspace" />
          </div>
        </div>

        <div className="about-content reveal">
          <h3>I build products that are <span className="highlight">useful, beautiful, and fast.</span></h3>
          <p className="about-text">
            With over 5 years of experience in full-stack development and UI/UX design, I specialize in creating seamless digital experiences. From concept to deployment, I ensure every pixel serves a purpose and every line of code is optimized for performance.
          </p>
          <p className="about-text">
            I work closely with startups, agencies, and established brands to transform complex problems into elegant, user-centric solutions.
          </p>

          <div className="about-features">
            <div className="about-feature">
              <h4>50+</h4>
              <p>Projects Delivered</p>
            </div>
            <div className="about-feature">
              <h4>30+</h4>
              <p>Happy Clients</p>
            </div>
            <div className="about-feature">
              <h4>5+</h4>
              <p>Years Experience</p>
            </div>
            <div className="about-feature">
              <h4>100%</h4>
              <p>Commitment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}