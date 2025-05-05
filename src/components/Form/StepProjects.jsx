import React, { useState } from 'react';
import PropTypes from 'prop-types';

const StepProjects = ({ formData, setFormData, nextStep, prevStep }) => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectLink, setProjectLink] = useState('');

  const handleAddProject = () => {
    if (projectName && projectDescription) {
      const newProject = {
        projectName,
        projectDescription,
        projectLink
      };

      setFormData({
        ...formData,
        projects: [...formData.projects, newProject]
      });

      setProjectName('');
      setProjectDescription('');
      setProjectLink('');
    }
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Projects</h2>

      <div className="mb-4">
        <label htmlFor="projectName" className="block text-sm font-medium text-gray-600">Project Name</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Enter project name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-600">Project Description</label>
        <textarea
          id="projectDescription"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Describe your project"
          rows="4"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="projectLink" className="block text-sm font-medium text-gray-600">Project Link (Optional)</label>
        <input
          type="url"
          id="projectLink"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Enter project URL (optional)"
        />
      </div>

      <div className="mb-6">
        <button
          type="button"
          onClick={handleAddProject}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add Project
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Your Projects</h3>
        <ul className="list-disc pl-5 mt-4">
          {formData.projects.length > 0 ? (
            formData.projects.map((project, index) => (
              <li key={index} className="mb-2">
                <strong className="text-gray-800">{project.projectName}</strong>
                <p className="text-sm text-gray-600">{project.projectDescription}</p>
                {project.projectLink && (
                  <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    View Project
                  </a>
                )}
              </li>
            ))
          ) : (
            <p className="text-gray-500">No projects added yet.</p>
          )}
        </ul>
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
          onClick={nextStep}
          className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

StepProjects.propTypes = {
  formData: PropTypes.shape({
    projects: PropTypes.arrayOf(PropTypes.shape({
      projectName: PropTypes.string,
      projectDescription: PropTypes.string,
      projectLink: PropTypes.string,
    })),
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default StepProjects;
