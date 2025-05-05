import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import StepPersonalInfo from '../components/Form/StepPersonalInfo';
import StepEducation from '../components/Form/StepEducation';
import StepSkills from '../components/Form/StepSkills';
import StepExperience from '../components/Form/StepExperience';
import StepProjects from '../components/Form/StepProjects';
import StepContact from '../components/Form/StepContact';
import StepSocialLinks from '../components/Form/StepSocialLinks';
import ResumeTemplate1 from '../components/ResumePreview/ResumeTemplate1';
import FormNavigation from '../components/Form/FormNavigation';

const ResumeBuilderPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    schoolName: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    skills: [],
    experience: [],
    projects: [],
    contactInfo: '',
    socialLinks: {},
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [generatePDF, setGeneratePDF] = useState(false);

  const nextStep = () => {
    if (currentStep < 7) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    setGeneratePDF(true);
  };

  // 📄 PDF Generation logic
  useEffect(() => {
    if (generatePDF) {
      const resumeElement = document.getElementById('resume-content');
      if (!resumeElement) {
        alert("Resume preview not found. Make sure it's rendered with id='resume-content'.");
        setGeneratePDF(false);
        return;
      }

      html2canvas(resumeElement, { scale: 2 })
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');
          const imgWidth = 210;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
          pdf.save('resume.pdf');
        })
        .catch((error) => {
          console.error('PDF generation failed:', error);
          alert('Something went wrong while generating the PDF.');
        })
        .finally(() => setGeneratePDF(false));
    }
  }, [generatePDF]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Resume Builder</h1>

      {currentStep === 1 && <StepPersonalInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />}
      {currentStep === 2 && <StepEducation formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {currentStep === 3 && <StepSkills formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {currentStep === 4 && <StepExperience formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {currentStep === 5 && <StepProjects formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {currentStep === 6 && <StepContact formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {currentStep === 7 && (
        <>
          <StepSocialLinks
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
          />
          <div id="resume-content" className="mt-8 border rounded-lg shadow p-6 bg-white">
            <ResumeTemplate1 resumeData={formData} />
          </div>
        </>
      )}

      <FormNavigation
        currentStep={currentStep}
        maxStep={7}
        handleNextStep={nextStep}
        handlePrevStep={prevStep}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ResumeBuilderPage;
