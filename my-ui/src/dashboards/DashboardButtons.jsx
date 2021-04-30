import React from "react";
import ButtonDefault from "../components/buttons/buttons-default/ButtonDefault";
import "./style.css";

const DashboardButtons = () => {
  return (
    <div className="container">
      <h2>Default Buttons</h2>
      <div className="content">
        <div className="content-item">
          <ButtonDefault theme="default" description="Default" />
        </div>
        <div className="content-item">
          <ButtonDefault theme="primary" description="Primary" />
        </div>
        <div className="content-item">
          <ButtonDefault theme="secondary" description="Secondary" />
        </div>
      </div>
      {/* <h2>Buttons with border radius</h2> */}
    </div>
  );
};

export default DashboardButtons;
