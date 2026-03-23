// React import removed
import './Projects.css';

const projects = [
  { image: '/project1.png', category: 'Commercial', title: 'Apex Tower' },
  { image: '/project2.png', category: 'Residential', title: 'Serenity Villa' },
  { image: '/project3.png', category: 'Renovation', title: 'The Foundry Hub' }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="services-header center fade-in visible">
          <h4 className="section-subtitle">FEATURED WORK</h4>
          <h2 className="section-title">Projects We're Proud Of</h2>
        </div>
        
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div 
              className="project-card fade-in visible" 
              key={idx}
              style={{ transitionDelay: `${idx * 0.2}s` }}
            >
              <img src={proj.image} alt={proj.title} className="project-img" />
              <div className="project-overlay">
                <span className="project-category">{proj.category}</span>
                <h3 className="project-title">{proj.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
