import React, { useState } from 'react';
import StepPersonalInfo from './components/Form/StepPersonalInfo';
import StepEducation from './components/Form/StepEducation';
import StepSkills from './components/Form/StepSkills';
import StepProjects from './components/Form/StepProjects';
import StepExperience from './components/Form/StepExperience';
import StepContact from './components/Form/StepContact';
import StepSocialLinks from './components/Form/StepSocialLinks';
import FormNavigation from './components/Form/FormNavigation';
import ResumeTemplate1 from './components/ResumePreview/ResumeTemplate1';
import ResumeTemplate2 from './components/ResumePreview/ResumeTemplate2';
import TemplateSwitcher from './components/ResumePreview/TemplateSwitcher';

const ResumeBuilderPage = () => {
  const maxStep = 7;
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    title: '',
    email: '',
    phone: '',
    website: '',
    linkedin: '',
    education: [],
    experience: [],
    skills: [],
    projects: [],
    socialLinks: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, maxStep));
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted! Check console for data.');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepPersonalInfo formData={formData} handleInputChange={handleInputChange} nextStep={handleNextStep} />;
      case 2:
        return <StepEducation formData={formData} setFormData={setFormData} nextStep={handleNextStep} prevStep={handlePrevStep} />;
      case 3:
        return <StepSkills formData={formData} setFormData={setFormData} nextStep={handleNextStep} prevStep={handlePrevStep} />;
      case 4:
        return <StepProjects formData={formData} setFormData={setFormData} nextStep={handleNextStep} prevStep={handlePrevStep} />;
      case 5:
        return <StepExperience formData={formData} setFormData={setFormData} nextStep={handleNextStep} prevStep={handlePrevStep} />;
      case 6:
        return <StepContact formData={formData} setFormData={setFormData} nextStep={handleNextStep} prevStep={handlePrevStep} />;
      case 7:
        return <StepSocialLinks formData={formData} setFormData={setFormData} nextStep={handleNextStep} prevStep={handlePrevStep} />;
      default:
        return null;
    }
  };

  const [selectedTemplate, setSelectedTemplate] = useState('template1');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex flex-1 flex-col md:flex-row p-4 space-x-0 md:space-x-8">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Build Your Resume</h2>
          {renderStep()}
          <FormNavigation
            currentStep={currentStep}
            maxStep={maxStep}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg mt-8 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">Preview Your Resume</h2>
          <TemplateSwitcher selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
          {selectedTemplate === 'template1' ? (
            <ResumeTemplate1 resumeData={formData} />
          ) : (
            <ResumeTemplate2 resumeData={formData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilderPage;
