import type { ExperienceItem } from "../../data/resumeData";


interface ExperienceProps {
  items: ExperienceItem[];
}

const Experience = ({ items }: ExperienceProps) => {
  return (
    <section className="experience">
      <h3 className="section-title">Experience</h3>

      <ul className="timeline">
        {items.map((item, idx) => (
          <li key={idx} className="timeline-item">
            <span className="timeline-dot" />
            <div className="timeline-content">
              <span className="period">{item.period}</span>
              <h4>
                {item.title} · {item.organization}
              </h4>
              <ul>
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
