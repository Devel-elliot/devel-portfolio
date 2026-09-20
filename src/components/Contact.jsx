import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', projectType: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  // This is the validate function that was missing!
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
    // Note: We don't strictly validate projectType because it's optional
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Check for errors first using the validate function above
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // 2. Send the data to the backend
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // 3. Check if the backend said "Success"
      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', projectType: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Could not connect to the server. Is the backend running?');
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="section-header reveal">
        <span className="section-tag">Get In Touch</span>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">Have a project in mind? Let's create something amazing.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info reveal">
          <h3>Contact Information</h3>
          <p>Fill out the form or reach out directly through any of the channels below. I typically respond within 24 hours.</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-method-icon">
                <img src="https://img.icons8.com/fluency/48/000000/email.png" alt="Email" />
              </div>
              <div className="contact-method-text">
                <h4>Email</h4>
                <a href="mailto:elliottega4@gmail.com">elliottega4@gmail.com</a>
                <p style={{fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem'}}>elliottega4@gmail.com</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-method-icon">
                <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" />
              </div>
              <div className="contact-method-text">
                <h4>WhatsApp</h4>
                <a href="https://wa.me/2349047790893" target="_blank" rel="noopener noreferrer">+234 904 779 0893</a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-method-icon">
                <img src="https://img.icons8.com/color/48/000000/phone.png" alt="Call" />
              </div>
              <div className="contact-method-text">
                <h4>Call</h4>
                <a href="tel:+2349051225930">+234 905 122 5930</a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-method-icon">
                <img src="https://img.icons8.com/fluency/48/000000/marker.png" alt="Location" />
              </div>
              <div className="contact-method-text">
                <h4>Location</h4>
                <p>Afisiere Ughelli, Delta State, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper reveal">
          <h3>Send a Message</h3>
          {isSubmitted && <div className="success-message">✓ Message sent successfully! I'll get back to you soon.</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label>Your Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>
            
            <div className="form-group">
              <label>Project Type (Optional)</label>
              <select name="projectType" value={formData.projectType} onChange={handleChange}>
                <option value="">Select a project type</option>
                <option value="Website Development">Website Development</option>
                <option value="Web Application">Web Application</option>
                <option value="Mobile App">Mobile App</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Your Message *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows="5" />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}