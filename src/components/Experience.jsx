import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  { date: '2023 - Present', title: 'Senior Full-Stack Developer', company: 'Tech Innovators Ltd', desc: 'Leading the development of scalable web applications, mentoring junior developers, and architecting cloud solutions.' },
  { date: '2021 - 2023', title: 'UI/UX Engineer & Developer', company: 'Digital Agency Pro', desc: 'Designed and built user-centric interfaces for high-profile clients, improving conversion rates by 40%.' },
  { date: '2019 - 2021', title: 'Frontend Developer', company: 'StartUp Hub', desc: 'Developed responsive web applications using React and Redux, collaborating closely with design and backend teams.' },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="section-header reveal">
        <span className="section-tag">My Journey</span>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">A timeline of my professional growth and contributions.</p>
      </div>

      <div className="timeline-container">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item reveal ${index % 2 === 0 ? 'odd' : 'even'}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.date}</div>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}