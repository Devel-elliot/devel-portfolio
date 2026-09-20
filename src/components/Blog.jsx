import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { blogPosts } from '../data/blog';

export default function Blog() {
  const ref = useScrollReveal();

  return (
    <section id="blog" className="blog" ref={ref}>
      <div className="section-header reveal">
        <span className="section-tag">Blog</span>
        <h2 className="section-title">Latest Articles</h2>
        <p className="section-subtitle">Thoughts, tutorials, and insights on design and development.</p>
      </div>

      <div className="blog-container">
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={post.id} className="blog-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="blog-image">
                <div className="blog-image-bg" style={{ backgroundImage: `url(${post.image})` }}></div>
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more">
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}