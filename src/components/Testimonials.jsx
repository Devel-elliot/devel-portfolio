import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronLeft, ChevronRight } from './Icons';

const testimonials = [
  { id: 1, text: "An exceptional developer who truly understands both the technical and design aspects. The project was delivered ahead of schedule and the quality was top-notch.", name: "Chinedu Okafor", role: "CEO, TechCorp" },
  { id: 2, text: "The attention to detail and commitment to quality is unmatched. Our platform's performance improved drastically after the redesign. Highly recommended!", name: "Adebayo Adeleke", role: "Product Manager, Nexus" },
  { id: 3, text: "Professional, communicative, and highly skilled. He understood our vision perfectly and translated it into a digital reality that our customers love.", name: "Tega Avwereta", role: "Founder, StartUp Hub" },
];

export default function Testimonials() {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials" ref={ref}>
      <div className="section-header reveal">
        <span className="section-tag">Testimonials</span>
        <h2 className="section-title">What Clients Say</h2>
      </div>

      <div className="testimonials-container reveal">
        <div className="testimonial-carousel">
          <div className="testimonial-slide" key={testimonials[current].id}>
            <p className="testimonial-quote">{testimonials[current].text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonials[current].name.charAt(0)}</div>
              <div className="author-info">
                <h4>{testimonials[current].name}</h4>
                <p>{testimonials[current].role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-nav">
          <button className="carousel-btn" onClick={prev}><ChevronLeft /></button>
          <button className="carousel-btn" onClick={next}><ChevronRight /></button>
        </div>
      </div>
    </section>
  );
}