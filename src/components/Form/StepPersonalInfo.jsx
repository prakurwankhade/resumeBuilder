import React from 'react';
import PropTypes from 'prop-types';

const StepPersonalInfo = ({ formData, handleInputChange, nextStep }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
      <form>
        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextStep}
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </form>
    </div>
  );
};

StepPersonalInfo.propTypes = {
  formData: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default StepPersonalInfo;
