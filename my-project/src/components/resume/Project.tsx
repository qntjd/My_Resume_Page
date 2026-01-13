import type { ProjectItem } from "../../data/resumeData";

interface ProjectsProps {
  items: ProjectItem[];
}

const Projects = ({ items }: ProjectsProps) => {
  return (
    <section className="projects">
      <h3 className="section-title">Projects</h3>

      <div className="project-list">
        {items.map((project, idx) => (
          <div key={idx} className="project-card">
            <h4>{project.title}</h4>
            <p className="project-desc">{project.description}</p>

            <ul>
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <div className="project-footer">
              <div className="tech-tags">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
