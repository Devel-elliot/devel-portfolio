import { useState, useEffect } from 'react'
import { Home, User, Briefcase, Folder, Code, Newspaper, Mail, Github, Linkedin, Twitter } from './Icon'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'services', label: 'Services', icon: Briefcase },
  { id: 'portfolio', label: 'Portfolio', icon: Folder },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'blog', label: 'Blog', icon: Newspaper },
  { id: 'contact', label: 'Contact', icon: Mail },
]

const socials = [
  { name: 'GitHub', icon: Github, url: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
]

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'skills', 'blog', 'contact']
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
      })
    }
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="brand">
          <h2>DEVEL</h2>
          <p>Developer / UI/UX Engineer</p>
        </div>

        <nav className="nav-menu">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.id}
                whileHover={{ x: 4 }}
                onClick={() => scrollToSection(item.id)}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </motion.button>
            )
          })}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="socials">
          <p>FOLLOW ME</p>
          <div className="social-icons">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </aside>
  )
}