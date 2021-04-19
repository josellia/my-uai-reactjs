import React, { useContext } from "react";
import Form from "./Form";

import { ThemeContext } from "./Theme";

const Card = (props) => {
  const theme = useContext(ThemeContext);
  console.log("theme:values", theme);
  return (
    <>
      <Form></Form>
      <button style={{ background: theme.background, color: theme.color }}>
        Save using theme
      </button>
    </>
  );
};

export default Card;
