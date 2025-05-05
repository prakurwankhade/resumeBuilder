import React from 'react';

const ResumeTemplate1 = ({ resumeData }) => {
  const validResumeData = resumeData && typeof resumeData === 'object' ? resumeData : {};

  // Convert socialLinks object to array for rendering
  const socialLinksArray = validResumeData.socialLinks && typeof validResumeData.socialLinks === 'object'
    ? Object.entries(validResumeData.socialLinks).map(([platform, url]) => ({ platform, url }))
    : [];

  return (
    <div className="bg-white text-black p-8 max-w-3xl mx-auto rounded-lg shadow-md">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">{validResumeData.fullName}</h1>
        <p className="text-xl">{validResumeData.title}</p>
      </div>

      {/* Contact Info Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p>Email: {validResumeData.email || ''}</p>
        <p>Phone: {validResumeData.phone || ''}</p>
        <p>Website: {validResumeData.website || ''}</p>
        <p>LinkedIn: {validResumeData.linkedin || ''}</p>
      </div>

      {/* Education Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Education</h2>
        {Array.isArray(validResumeData.education) && validResumeData.education.length > 0 ? (
          validResumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl">{edu.degree} - {edu.institution}</h3>
              <p>{edu.startDate} - {edu.endDate}</p>
            </div>
          ))
        ) : (
          <p>No education data available.</p>
        )}
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Experience</h2>
        {Array.isArray(validResumeData.experience) && validResumeData.experience.length > 0 ? (
          validResumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl">{exp.jobTitle} at {exp.company}</h3>
              <p>{exp.startDate} - {exp.endDate}</p>
              <p>{exp.description}</p>
            </div>
          ))
        ) : (
          <p>No experience data available.</p>
        )}
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        {Array.isArray(validResumeData.skills) && validResumeData.skills.length > 0 ? (
          <ul className="list-disc pl-5">
            {validResumeData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p>No skills data available.</p>
        )}
      </div>

      {/* Projects Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        {Array.isArray(validResumeData.projects) && validResumeData.projects.length > 0 ? (
          validResumeData.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl">{project.projectName}</h3>
              <p>{project.projectDescription}</p>
              <p>Technologies: {Array.isArray(project.technologies) ? project.technologies.join(', ') : ''}</p>
            </div>
          ))
        ) : (
          <p>No project data available.</p>
        )}
      </div>

      {/* Social Links Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Social Links</h2>
        {socialLinksArray.length > 0 ? (
          <ul className="list-disc pl-5">
            {socialLinksArray.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  {link.platform}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No social links available.</p>
        )}
      </div>
    </div>
  );
};

export default ResumeTemplate1;
