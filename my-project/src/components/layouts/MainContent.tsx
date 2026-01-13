import Summary from "../resume/Summary";
import Projects from "../resume/Project";
import Experience from "../resume/Experience";
import Education from "../resume/Education";
import { resumeData } from "../../data/resumeData";

const MainContent = () => {
  return (
    <>
      <Summary text={resumeData.summary} />
      <Projects items={resumeData.projects} />
      <Experience items={resumeData.experience} />
      <Education items={resumeData.education} />
    </>
  );
};

export default MainContent;
