import { motion } from 'framer-motion'
import { X, Calendar, Clock } from './Icon'

export default function BlogModal({ post, onClose }) {
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
          <img src={post.image} alt={post.title} />
        </div>

        <div className="project-modal-details">
          <div className="blog-meta" style={{ marginBottom: '1rem' }}>
            <span className="blog-category">{post.category}</span>
            <span><Calendar size={14} /> {post.date}</span>
            <span><Clock size={14} /> {post.readTime}</span>
          </div>

          <h2>{post.title}</h2>
          
          <div 
            className="blog-content-full"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{ marginTop: '2rem' }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}