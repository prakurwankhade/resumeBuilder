// src/components/Form/StepExperience.jsx
import React, { useState } from 'react';

const StepExperience = ({ formData, setFormData, nextStep, prevStep }) => {
  const [companyName, setCompanyName] = useState(formData.companyName || '');
  const [role, setRole] = useState(formData.role || '');
  const [startDate, setStartDate] = useState(formData.startDate || '');
  const [endDate, setEndDate] = useState(formData.endDate || '');
  const [responsibilities, setResponsibilities] = useState(formData.responsibilities || '');

  const handleNext = () => {
    setFormData({
      ...formData,
      companyName,
      role,
      startDate,
      endDate,
      responsibilities
    });
    nextStep();
  };

  const handlePrev = () => {
    prevStep();
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Experience</h2>

      <div className="mb-4">
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-600">Company Name</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Enter company name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="role" className="block text-sm font-medium text-gray-600">Role</label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Enter your role"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-600">Start Date</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="endDate" className="block text-sm font-medium text-gray-600">End Date</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="responsibilities" className="block text-sm font-medium text-gray-600">Responsibilities</label>
        <textarea
          id="responsibilities"
          value={responsibilities}
          onChange={(e) => setResponsibilities(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Describe your responsibilities"
          rows="4"
        />
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={handlePrev}
          className="px-4 py-2 text-white bg-gray-400 rounded-md hover:bg-gray-500 focus:outline-none"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepExperience;
