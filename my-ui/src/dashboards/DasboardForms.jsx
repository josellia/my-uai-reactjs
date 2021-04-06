import React from "react";
import FormWithHook from "../components/forms/form-hooks/FormWithHook";

const DashboardForms = () => {
  let template = {
    fields: [
      { label: "First name", type: "text", name: "firstname" },
      { label: "Second name", type: "text", name: "secondname" },
      { label: "E-mail", type: "text", name: "email" },
    ],
  };
  return (
    <>
      <div className="container">
        <FormWithHook template={template} onSubmit={onSubmit} />
      </div>
    </>
  );
};

const onSubmit = (values) => {
  console.log(values);
};
export default DashboardForms;
