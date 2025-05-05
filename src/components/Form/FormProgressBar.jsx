// src/components/Form/FormProgressBar.jsx
import React from 'react';

const FormProgressBar = ({ currentStep }) => {
  // Calculate the percentage of progress based on the current step
  const progress = (currentStep - 1) * 20;

  return (
    <div className="w-full mb-6">
      <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
        <div
          className="h-2.5 bg-green-500 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-center mt-2 text-gray-700 text-sm">{`Step ${currentStep} of 5`}</p>
    </div>
  );
};

export default FormProgressBar;
