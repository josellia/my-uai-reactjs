import React, { useState } from "react";
import FormWithHook from "../components/forms/FormWithHook";

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
        <FormWithHook template={template}></FormWithHook>
      </div>
    </>
  );
};

export default DashboardForms;
