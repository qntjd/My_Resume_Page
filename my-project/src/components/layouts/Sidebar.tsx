import Profile from "../resume/Profile";
import TechStack from "../resume/TechStack";
import { resumeData } from "../../data/resumeData";

const Sidebar = () => {
  return (
    <>
      <Profile profile={resumeData.profile} />
      <TechStack techStack={resumeData.techStack} />
      
      
    </>
  );
};

export default Sidebar;
