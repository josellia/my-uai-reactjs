import React, { useContext } from "react";
import { ThemeContext } from "./Theme";

const Form = (props) => {
  const context = useContext(ThemeContext);
  const renderForm = (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="Name" />
      <label htmlFor="name">Name</label>
      <input type="email" placeholder="Email" />
    </form>
  );
  const renderNotLogged = <h1>É necessário realizar o login</h1>;
  return <>{!context.token ? renderNotLogged : renderForm}</>;
};

export default Form;
