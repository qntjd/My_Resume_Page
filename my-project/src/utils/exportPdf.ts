import html2pdf from "html2pdf.js";

export const exportPdf = () => {
  const element = document.getElementById("resume");
  if (!element) return;

  html2pdf()
    .set({
      margin: 10,
      filename: "resume.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4" }
    })
    .from(element)
    .save();
};
