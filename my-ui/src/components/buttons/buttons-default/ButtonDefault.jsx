import React from "react";
import "./Button.css";
const ButtonDefault = (props) => {
  return (
    <div className="generic-style">
      <button className={"btn-" + props.theme}>{props.children}</button>
    </div>
  );
};

export default ButtonDefault;
