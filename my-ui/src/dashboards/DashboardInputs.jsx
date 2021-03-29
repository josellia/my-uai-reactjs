import React, { useState } from "react";
import InputField from "../components/input/InputField";
import Validator from "../utils/Validator";

function DashboardInputs() {
  const [nameInput, setName] = useState("");

  const handleChange = (key) => (value) => {
    setName({ [key]: value });
  };
  return (
    <>
      <div className="container">
        <InputField
          type="text"
          value={nameInput}
          placeholder="Nome"
          validators={[
            { check: Validator.required, message: "Campo obrigatório" },
          ]}
          onChange={handleChange}
        ></InputField>
      </div>
    </>
  );
}

export default DashboardInputs;
