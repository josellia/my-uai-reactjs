import React from "react";
import { useForm } from "react-hook-form";
import ButtonDefault from "../buttons/buttons-default/ButtonDefault";
import "../forms/forms-styles/FormWidthHook.css";

const FormWithHook = ({ template }) => {
  let { register, handleSubmit } = useForm();
  let { fields } = template;

  const renderFields = (fields) => {
    return fields.map((field) => {
      let { label, type, name } = field;
      return (
        <div key={name}>
          <label htmlFor="firstname" className="label-hook">
            {label}
          </label>
          <input
            className="form-control-input"
            type={type}
            name={name}
            id={name}
            {...register("firstname")}
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
            <ButtonDefault type="submit" theme="default"></ButtonDefault>
          </div>
        </div>
      </form>
    </div>
  );
};

const onSubmit = (values) => {
  console.log(values);
};
export default FormWithHook;
