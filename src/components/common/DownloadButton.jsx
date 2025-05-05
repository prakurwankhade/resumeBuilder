import React from "react";
import { jsPDF } from "jspdf";

const DownloadButton = ({ formData }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Basic Resume Layout
    doc.setFont("helvetica", "normal");

    // Personal Information
    doc.setFontSize(16);
    doc.text(`Name: ${formData.personalInfo.name}`, 20, 20);
    doc.text(`Email: ${formData.personalInfo.email}`, 20, 30);

    // Education Section
    doc.setFontSize(14);
    doc.text("Education:", 20, 40);
    formData.education.forEach((edu, index) => {
      doc.text(
        `${edu.institution} | ${edu.degree} | ${edu.year}`,
        20,
        50 + index * 10
      );
    });

    // Skills Section
    doc.setFontSize(14);
    doc.text("Skills:", 20, 70 + formData.education.length * 10);
    formData.skills.forEach((skill, index) => {
      doc.text(skill, 20, 80 + (formData.education.length + index) * 10);
    });

    // Experience Section
    doc.setFontSize(14);
    doc.text("Experience:", 20, 100 + (formData.education.length + formData.skills.length) * 10);
    formData.experience.forEach((exp, index) => {
      doc.text(
        `${exp.company} | ${exp.role} | ${exp.duration}`,
        20,
        110 + (formData.education.length + formData.skills.length + index) * 10
      );
      doc.text(exp.description, 20, 120 + (formData.education.length + formData.skills.length + index) * 10);
    });

    // Contact Information
    doc.setFontSize(14);
    doc.text("Contact Information:", 20, 140 + (formData.education.length + formData.skills.length + formData.experience.length) * 10);
    doc.text(`LinkedIn: ${formData.contact.linkedIn}`, 20, 150);
    doc.text(`GitHub: ${formData.contact.github}`, 20, 160);
    doc.text(`Portfolio: ${formData.contact.portfolio}`, 20, 170);
    doc.text(`Email: ${formData.contact.email}`, 20, 180);

    // Save the PDF
    doc.save("resume.pdf");
  };

  return (
    <button
      onClick={generatePDF}
      className="mt-6 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
    >
      Download Resume as PDF
    </button>
  );
};

export default DownloadButton;
