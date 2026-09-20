import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from './Icons';
import { blogPosts } from '../data/blog';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(slug));

  if (!post) {
    return (
      <div style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '2rem',
        padding: '2rem'
      }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>Post not found</h2>
        <Link to="/" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="blog-post-page">
      <div className="blog-post-header">
        <Link to="/#blog" className="back-to-blog">
          <ArrowLeft size={20} />
          Back to Blog
        </Link>
      </div>

      <div className="blog-post-hero">
        <div className="blog-post-image">
          <img src={post.image} alt={post.title} />
        </div>
      </div>

      <div className="blog-post-container">
        <div className="blog-post-meta">
          <span className="blog-category">{post.category}</span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="blog-post-title">{post.title}</h1>

        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="blog-post-footer">
          <h3>Share this article</h3>
          <div className="share-links">
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`} 
               target="_blank" 
               rel="noopener noreferrer"
               className="share-btn twitter">
              Twitter
            </a>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${encodeURIComponent(post.title)}`} 
               target="_blank" 
               rel="noopener noreferrer"
               className="share-btn linkedin">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}