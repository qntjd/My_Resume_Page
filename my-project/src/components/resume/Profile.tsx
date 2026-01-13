type ProfileProps = {
  profile: {
    name: string;
    title: string;
    location: string;
    email: string;
    github: string;
    portfolio: string;
    blog: string;
  };
};

const Profile = ({ profile }: ProfileProps) => {
  return (
    <section style={{ marginBottom: "32px" }}>
      <h1 style={{ fontSize: "24px" }}>{profile.name}</h1>
      <p style={{ color: "var(--secondary)", marginBottom: "12px" }}>
        {profile.title}
      </p>

      <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
        <li>📍 {profile.location}</li>
        <li>✉️ {profile.email}</li>
        <li>
          📚{" "}
          <a href={profile.blog} target="_blank" rel="noreferrer">
            Blog
          </a>
        </li>
        <li>
          🔗{" "}
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          🔗{" "}
          <a href={profile.portfolio} target="_blank" rel="noreferrer">
            Notion_portfolio
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Profile;
