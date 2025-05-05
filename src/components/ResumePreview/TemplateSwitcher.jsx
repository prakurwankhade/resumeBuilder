// src/components/ResumePreview/TemplateSwitcher.jsx
import React from 'react';

const TemplateSwitcher = ({ currentTemplate, onTemplateChange }) => {
  return (
    <div className="flex justify-center space-x-4 mt-8">
      <button
        onClick={() => onTemplateChange(1)}
        className={`px-6 py-2 rounded-lg text-white ${currentTemplate === 1 ? 'bg-blue-600' : 'bg-gray-500 hover:bg-gray-600'}`}
      >
        Template 1
      </button>
      <button
        onClick={() => onTemplateChange(2)}
        className={`px-6 py-2 rounded-lg text-white ${currentTemplate === 2 ? 'bg-blue-600' : 'bg-gray-500 hover:bg-gray-600'}`}
      >
        Template 2
      </button>
    </div>
  );
};

export default TemplateSwitcher;
