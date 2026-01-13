type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <section style={{ marginBottom: "40px" }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};


export default Section;
