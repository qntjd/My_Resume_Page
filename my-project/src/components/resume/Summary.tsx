interface SummaryProps {
  text: string;
}

const Summary = ({ text }: SummaryProps) => {
  return (
    <section className="summary">
      <h3 className="section-title">Summary</h3>
      <p>{text}</p>
    </section>
  );
};

export default Summary;
