
import PropTypes from 'prop-types';

const StepSocialLinks = ({ formData, setFormData, prevStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value
      }
    }));
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Social Links</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn URL"
          value={formData.socialLinks.linkedin || ''}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="github"
          placeholder="GitHub URL"
          value={formData.socialLinks.github || ''}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="portfolio"
          placeholder="Portfolio URL"
          value={formData.socialLinks.portfolio || ''}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <div className="flex justify-start mt-6 ">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

StepSocialLinks.propTypes = {
  formData: PropTypes.shape({
    socialLinks: PropTypes.shape({
      linkedin: PropTypes.string,
      github: PropTypes.string,
      portfolio: PropTypes.string,
    }),
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default StepSocialLinks;
