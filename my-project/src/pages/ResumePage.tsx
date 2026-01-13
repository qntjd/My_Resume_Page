// import { resumeData } from "../data/resumeData";
// import Header from "../components/resume/Header";
// import TechStack from "../components/resume/TechStack";
// import Projects from "../components/resume/Project";
import { exportPdf } from "../utils/exportPdf";
import ResumeLayout from "../components/layouts/ResumeLayout";
import Sidebar from "../components/layouts/Sidebar";
import MainContent from "../components/layouts/MainContent";


const ResumePage = () => {
  return (
    <>
      <button onClick={exportPdf} className="no-print">
        PDF 다운로드
      </button>

      <div id="resume">
        {/* <Header profile={resumeData.profile} />
        <TechStack techStack={resumeData.techStack} />
        <Projects projects={resumeData.projects} /> */}
        <ResumeLayout
        sidebar={<Sidebar />}
        main={<MainContent />}
      />
      </div>

      
    </>
  );
};

export default ResumePage;
