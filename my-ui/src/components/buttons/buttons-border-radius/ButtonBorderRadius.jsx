import React from "react";

import PropTypes from "prop-types";
import "./style.css";

const ButtonBorderRadius = ({ type, description }) => {
  return (
    <div>
      <button type={type} className="btn-radius">
        {description}
      </button>
    </div>
  );
};

ButtonBorderRadius.protoTypes = {
  type: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonBorderRadius.defautProps = {
  type: "submit",
  onClick: () => {},
};
export default ButtonBorderRadius;
