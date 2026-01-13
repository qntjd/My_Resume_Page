type HeaderProps = {
  profile: {
    name: string;
    title: string;
    summary: string;
  };
};

const Header = ({ profile }: HeaderProps) => {
  return (
    <header style={{ marginBottom: "40px" }}>
      <h1>{profile.name}</h1>
      <h3>{profile.title}</h3>
      <p style={{ marginTop: "12px", maxWidth: "700px" }}>
        {profile.summary}
      </p>
    </header>
  );
};


export default Header;
