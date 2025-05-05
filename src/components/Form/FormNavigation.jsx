import React from "react";
import PropTypes from 'prop-types';

const FormNavigation = ({ currentStep, maxStep, handleNextStep, handlePrevStep, handleSubmit }) => {
  return (
    <div className="form-navigation">
      <button
        type="button"
        className="prev-btn"
        onClick={handlePrevStep}
        disabled={currentStep === 1}
      >
        Back
      </button>
      {currentStep === maxStep ? (
        <button type="button" className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      ) : (
        <button type="button" className="next-btn" onClick={handleNextStep}>
          Next
        </button>
      )}
    </div>
  );
};

FormNavigation.propTypes = {
  currentStep: PropTypes.number.isRequired,
  maxStep: PropTypes.number.isRequired,
  handleNextStep: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormNavigation;
