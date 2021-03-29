import React, { useState } from "react";
import PropTypes from "prop-types";
import ValidateInput from "../../utils/Validator";
import "./InputField.css";

const InputField = ({
  value,
  type,
  label,
  placeholder,
  validators,
  onChange,
}) => {
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const { value } = e.target.value;
    setError(ValidateInput(validators, value));
    onChange(value);
  };
  return (
    <>
      {label && <label htmlFor="input-field">{label}</label>}

      {type === "textarea" ? (
        <textarea
          type={type}
          className="textarea-control"
          placeholder={placeholder}
          value={value}
          defaultValue={value}
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          type={type}
          value={value}
          className="input-control"
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
      {error && <span className="field-danger">{error.message}</span>}
    </>
  );
};
InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  validators: PropTypes.array,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  label: "",
  label: "",
  placeholder: "",
  type: "text",
  validators: [],
};
export default InputField;
