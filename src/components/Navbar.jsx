import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Folder, Code, Mail, Menu, X } from './Icons';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'portfolio', label: 'Portfolio', icon: Folder },
    { id: 'experience', label: 'Experience', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;
      sections.forEach(section => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      <nav className={`floating-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className={`nav-logo ${scrolled ? 'hidden' : ''}`}>
          <span className="logo-d">D</span>
          <span className="logo-e">E</span>
          <span className="logo-v">V</span>
          <span className="logo-apostrophe">'</span>
          <span className="logo-e2">E</span>
          <span className="logo-l">L</span>
        </div>
        
        <div className="nav-pill">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button key={item.id} className={`nav-pill-item ${isActive ? 'active' : ''}`} onClick={() => scrollTo(item.id)}>
                <div className="nav-bubble"><Icon size={22} /></div>
                <span className="nav-label">{item.label}</span>
              </button>
            );
          })}
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {isDarkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-logo">DEV'EL</div>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button key={item.id} className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`} onClick={() => scrollTo(item.id)}>
                <Icon size={24} /> <span>{item.label}</span>
              </button>
            );
          })}
          <button className="mobile-nav-item" onClick={toggleTheme} style={{marginTop: '2rem'}}>
             {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      )}
    </>
  );
}