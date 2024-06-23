import { useState } from "react";

const useForm = (initialState, callback) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormValues({
      ...formValues,
      additionalSkills: {
        ...formValues.additionalSkills,
        [name]: checked,
      },
    });
  };

  const handleSubmit = () => {
    callback();
  };

  return {
    formValues,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
  };
};

export default useForm;
