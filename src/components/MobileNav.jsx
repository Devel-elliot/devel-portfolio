import { useState } from 'react'
import { Menu, X, Home, User, Briefcase, Folder, Code, Newspaper, Mail } from './Icon'  // ← CHANGE THIS LINE
import { motion, AnimatePresence } from 'framer-motion'
const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'services', label: 'Services', icon: Briefcase },
  { id: 'portfolio', label: 'Portfolio', icon: Folder },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'blog', label: 'Blog', icon: Newspaper },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
      })
      setIsOpen(false)
    }
  }

  return (
    <>
      <header className="mobile-header">
        <div className="mobile-logo">DEVEL</div>
        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="mobile-menu open"
          >
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-item"
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}