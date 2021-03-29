import React from "react";
import "./Button.css";
const ButtonDefault = (props) => {
  return (
    <>
      <button className={"btn-" + props.theme}>{props.children}</button>
    </>
  );
};

export default ButtonDefault;
