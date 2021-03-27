import React from "react";
import "./Button.css";
function ButtonDefault(props) {
  return (
    <>
      <button className={"btn-" + props.theme}>{props.children}</button>
    </>
  );
}

export default ButtonDefault;
