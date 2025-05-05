// src/components/ResumePreview/ResumeTemplate2.jsx
import React from 'react';

const ResumeTemplate2 = ({ formData }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 shadow-lg rounded-lg">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-800">{formData.fullName}</h1>
          <p className="text-xl text-gray-600">{formData.profession}</p>
        </div>
        <div className="text-right">
          <p className="text-lg text-gray-600">{formData.email}</p>
          <p className="text-lg text-gray-600">{formData.phone}</p>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">About Me</h2>
        <p className="text-lg text-gray-600">{formData.aboutMe}</p>
      </section>

      <section className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Education</h2>
          {formData.education.length > 0 ? (
            formData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <p className="font-semibold text-gray-800">{edu.degree} - {edu.institution}</p>
                <p className="text-gray-600">{edu.startYear} - {edu.endYear}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No education details provided.</p>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Skills</h2>
          {formData.skills.length > 0 ? (
            <ul className="list-disc pl-5 text-gray-600">
              {formData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No skills provided.</p>
          )}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Work Experience</h2>
        {formData.experience.length > 0 ? (
          formData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold text-gray-800">{exp.jobTitle} - {exp.company}</p>
              <p className="text-gray-600">{exp.startYear} - {exp.endYear}</p>
              <ul className="list-disc pl-5 text-gray-600">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No work experience provided.</p>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Social Links</h2>
        {Object.keys(formData.socialLinks).length > 0 ? (
          <ul className="list-disc pl-5 text-gray-600">
            {Object.entries(formData.socialLinks).map(([type, url], index) => (
              <li key={index} className="text-blue-600 hover:underline">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {type.charAt(0).toUpperCase() + type.slice(1)}: {url}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No social links provided.</p>
        )}
      </section>
    </div>
  );
};

export default ResumeTemplate2;
