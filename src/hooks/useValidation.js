import { useState } from "react";

const useValidation = (formValues, position) => {
    const [errors, setErrors] = useState({});
  
    const validateForm = () => {
      let validationErrors = {};
  
      if (!formValues.fullName) {
        validationErrors.fullName = "Full Name is required.";
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formValues.email || !emailRegex.test(formValues.email)) {
        validationErrors.email = "A valid Email is required.";
      }
  
      if (!formValues.phoneNumber) {
        validationErrors.phoneNumber = "Phone Number is required.";
      }
  
      if (position === "developer" || position === "designer") {
        if (!formValues.relevantExperience || formValues.relevantExperience <= 0) {
          validationErrors.relevantExperience = "Relevant Experience is required and must be greater than 0.";
        }
      }
  
      if (position === "designer") {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!formValues.portfolioUrl || !urlRegex.test(formValues.portfolioUrl)) {
          validationErrors.portfolioUrl = "A valid Portfolio URL is required.";
        }
      }
  
      if (position === "manager") {
        if (!formValues.managementExperience) {
          validationErrors.managementExperience = "Management Experience is required.";
        }
      }
  
      const selectedSkills = Object.values(formValues.additionalSkills).some((value) => value);
      if (!selectedSkills) {
        validationErrors.additionalSkills = "At least one skill must be selected.";
      }
  
      if (!formValues.interviewTime) {
        validationErrors.interviewTime = "Preferred Interview Time is required.";
      }
  
      setErrors(validationErrors);
      return Object.keys(validationErrors).length === 0;
    };
  
    return { errors, validateForm };
  };
  
  export default useValidation;
  