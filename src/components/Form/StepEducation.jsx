import React, { useState } from 'react';
import PropTypes from 'prop-types';

const StepEducation = ({ formData, setFormData, nextStep, prevStep }) => {
  const [educationEntry, setEducationEntry] = useState({
    institution: '',
    degree: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationEntry(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, educationEntry]
    });
    setEducationEntry({
      institution: '',
      degree: '',
      startDate: '',
      endDate: ''
    });
    nextStep();
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Education</h2>

      <div className="mb-4">
        <label htmlFor="institution" className="block text-sm font-medium text-gray-600">Institution</label>
        <input
          type="text"
          id="institution"
          name="institution"
          value={educationEntry.institution}
          onChange={handleChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Enter your institution name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="degree" className="block text-sm font-medium text-gray-600">Degree</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={educationEntry.degree}
          onChange={handleChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Enter your degree"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-600">Start Date</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={educationEntry.startDate}
          onChange={handleChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="endDate" className="block text-sm font-medium text-gray-600">End Date</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={educationEntry.endDate}
          onChange={handleChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 text-white bg-gray-400 rounded-md hover:bg-gray-500 focus:outline-none"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleAddEducation}
          className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

StepEducation.propTypes = {
  formData: PropTypes.shape({
    education: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default StepEducation;
