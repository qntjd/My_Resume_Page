import type { EducationItem } from "../../data/resumeData";

interface EducationProps {
  items: EducationItem[];
}

const Education = ({ items }: EducationProps) => {
  return (
    <section className="education">
      <h3 className="section-title">Education</h3>

      <ul className="timeline">
        {items.map((item, idx) => (
          <li key={idx} className="timeline-item">
            <span className="timeline-dot" />
            <div className="timeline-content">
              <span className="period">{item.period}</span>
              <h4>
                {item.institution}
                {item.major && ` · ${item.major}`}
              </h4>

              {item.description && (
                <ul>
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
