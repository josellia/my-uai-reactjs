import React from "react";
import "./Button.css";
const ButtonDefault = ({ theme, description }) => {
  return (
    <div className="generic-style">
      {/* <button className={"btn-" + props.theme}>{props.children}</button> */}
      <button className={"btn-" + theme}>{description}</button>
    </div>
  );
};

export default ButtonDefault;
