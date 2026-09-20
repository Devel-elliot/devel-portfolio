import { useState, useEffect } from 'react';
import { Github, ArrowUp, TikTok } from './Icons';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  
  const bgImages = [
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop'
  ];

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    
    const interval = setInterval(() => setImgIndex(prev => (prev + 1) % bgImages.length), 5000);
    return () => { window.removeEventListener('scroll', handleScroll); clearInterval(interval); };
  }, [bgImages.length]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className="footer">
        <div className="footer-carousel">
          {bgImages.map((img, i) => <img key={i} src={img} alt="" className={i === imgIndex ? 'active' : ''} />)}
        </div>
        <div className="footer-overlay"></div>

        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-brand">
              <h2>DEVEL</h2>
              <p>Crafting premium digital experiences through clean code, thoughtful design, and modern technology.</p>
              <div className="footer-social">
                <a href="https://github.com/Devel-elliot" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.tiktok.com/@elliotweb.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <TikTok size={20} />
                </a>
                <a href="https://wa.me/2349047790893" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Navigation</h4>
              <ul>
                <li><button onClick={() => document.getElementById('home').scrollIntoView({behavior:'smooth'})}>Home</button></li>
                <li><button onClick={() => document.getElementById('about').scrollIntoView({behavior:'smooth'})}>About</button></li>
                <li><button onClick={() => document.getElementById('services').scrollIntoView({behavior:'smooth'})}>Services</button></li>
                <li><button onClick={() => document.getElementById('portfolio').scrollIntoView({behavior:'smooth'})}>Portfolio</button></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>More</h4>
              <ul>
                <li><button onClick={() => document.getElementById('experience').scrollIntoView({behavior:'smooth'})}>Experience</button></li>
                <li><button onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>Contact</button></li>
                <li><a href="/#blog" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>Blog</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Contact</h4>
              <ul>
                <li><span style={{color: 'var(--text-secondary)'}}>elliottega4@gmail.com</span></li>
                <li><span style={{color: 'var(--text-secondary)'}}>+234 904 779 0893</span></li>
                <li><span style={{color: 'var(--text-secondary)'}}>Delta State, Nigeria</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 DEVEL. All rights reserved.</p>
            <button className="back-to-top" onClick={scrollToTop}>
              Back to Top <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>

      {showTop && (
        <button className="back-to-top-fixed" onClick={scrollToTop} aria-label="Back to top">
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
}