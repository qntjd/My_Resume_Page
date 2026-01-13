import { resumeData } from "../data/resumeData";

const PrintResume = () => {
  return (
    <div className="print-resume">
      <h1>{resumeData.profile.name}</h1>
      {/* PDF에 최적화된 레이아웃 */}
    </div>
  );
};

export default PrintResume;
