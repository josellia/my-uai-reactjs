import React from "react";
import { useForm } from "react-hook-form";
import ButtonBorderRadius from "../buttons/buttons-border-radius/ButtonBorderRadius";

import "../forms/forms-styles/FormWidthHook.css";

const FormWithHook = ({ template, onSubmit }) => {
  let { register, handleSubmit } = useForm();
  let { fields } = template;

  const renderFields = (fields) => {
    return fields.map((field) => {
      let { label, type, name } = field;
      return (
        <div key={name}>
          <label htmlFor={name} className="label-hook">
            {label}
          </label>
          <input
            className="form-control-input"
            type={type}
            name={name}
            id={name}
            {...register(name)}
          />
        </div>
      );
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-field">
        <div>
          {renderFields(fields)}

          <div className="content-button">
            <ButtonBorderRadius type="submit" description="Save" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormWithHook;
