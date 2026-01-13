import Section from "../common/Section";

type Props = {
  techStack: {
    frontend: string[];
    backend: string[];
    etc: string[];
  };
};

const badgeStyle = {
  display: "inline-block",
  padding: "6px 12px",
  border: "1px solid var(--border)",
  borderRadius: "999px",
  marginRight: "8px",
  marginBottom: "8px",
  fontSize: "14px"
};

const TechStack = ({ techStack }: Props) => {
  return (
    <Section title="Tech Stack">
      {Object.entries(techStack).map(([key, items]) => (
        <div key={key} style={{ marginBottom: "12px" }}>
          <strong>{key.toUpperCase()}</strong>
          <div>
            {items.map((tech) => (
              <span key={tech} style={badgeStyle}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
};


export default TechStack;
