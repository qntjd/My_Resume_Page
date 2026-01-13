type Props = {
  sidebar: React.ReactNode;
  main: React.ReactNode;
};

const ResumeLayout = ({ sidebar, main }: Props) => {
  return (
    <div className="layout">
      <aside className="sidebar">{sidebar}</aside>
      <main className="main">{main}</main>
    </div>
  );
};

export default ResumeLayout;
