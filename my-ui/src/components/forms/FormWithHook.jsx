import React from "react";
import { useForm } from "react-hook-form";

const FormWithHook = ({ template }) => {
  let { register, handleSubmit } = useForm();
  let { fields } = template;

  const renderFields = (fields) => {
    return fields.map((field) => {
      let { label, type, name } = field;
      return (
        <div key={name}>
          <label htmlFor="firstname">{label}</label>
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {renderFields(fields)}

          <button type="submit" className="btn-form">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

const onSubmit = (values) => {
  console.log(values);
};
export default FormWithHook;
