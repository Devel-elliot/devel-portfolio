import { motion } from 'framer-motion'
import { X, ExternalLink, Github } from './Icon'

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-backdrop"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="modal-content project-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="project-modal-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-modal-details">
          <h2>{project.title}</h2>
          <span className="category">{project.category}</span>

          <h4>Overview</h4>
          <p>{project.overview}</p>

          <h4>The Problem</h4>
          <p>{project.problem}</p>

          <h4>The Solution</h4>
          <p>{project.solution}</p>

          <h4>Key Features</h4>
          <ul>
            {project.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h4>Technologies</h4>
          <div className="project-tech" style={{ marginBottom: '1.5rem' }}>
            {project.technologies.map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>

          <h4>Role & Duration</h4>
          <p><strong>Role:</strong> {project.role}</p>
          <p><strong>Duration:</strong> {project.duration}</p>

          <div className="project-links" style={{ marginTop: '2rem' }}>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink size={16} /> Live Demo
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Github size={16} /> View Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}