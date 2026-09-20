import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCategories = [
  { title: 'Frontend', skills: [{ name: 'React / Next.js', level: 95 }, { name: 'JavaScript / TypeScript', level: 90 }, { name: 'HTML / CSS / Tailwind', level: 95 }] },
  { title: 'Backend', skills: [{ name: 'Node.js / Express', level: 85 }, { name: 'Python / Django', level: 75 }, { name: 'PostgreSQL / MongoDB', level: 80 }] },
  { title: 'Design & Tools', skills: [{ name: 'Figma / UI Design', level: 90 }, { name: 'Git / GitHub', level: 95 }, { name: 'Docker / AWS', level: 70 }] },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="section-header reveal">
        <span className="section-tag">My Expertise</span>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">The tools and technologies I use to bring ideas to life.</p>
      </div>

      <div className="skills-container">
        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div key={cat.title} className="skill-category reveal" style={{ transitionDelay: `${index * 0.15}s` }}>
              <h3>{cat.title}</h3>
              <div className="skill-list">
                {cat.skills.map(skill => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}