// src/components/Form/StepSkills.jsx
import React, { useState } from 'react';

const StepSkills = ({ formData, setFormData, nextStep, prevStep }) => {
  const [skills, setSkills] = useState(formData.skills || []);
  const [skill, setSkill] = useState('');

  const handleAddSkill = () => {
    if (skill) {
      setSkills([...skills, skill]);
      setSkill('');
    }
  };

  const handleNext = () => {
    setFormData({
      ...formData,
      skills
    });
    nextStep();
  };

  const handlePrev = () => {
    prevStep();
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Skills</h2>

      <div className="mb-4">
        <label htmlFor="skill" className="block text-sm font-medium text-gray-600">Add Skill</label>
        <input
          type="text"
          id="skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Enter skill"
        />
      </div>

      <div className="mb-6">
        <button
          type="button"
          onClick={handleAddSkill}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add Skill
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Your Skills</h3>
        <ul className="list-disc pl-5 mt-4">
          {skills.length > 0 ? (
            skills.map((skill, index) => (
              <li key={index} className="text-gray-700">{skill}</li>
            ))
          ) : (
            <p className="text-gray-500">No skills added yet.</p>
          )}
        </ul>
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

export default StepSkills;
