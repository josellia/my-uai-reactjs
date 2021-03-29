import React from "react";
import ButtonDefault from "../components/buttons/buttons-default/ButtonDefault";
import "./style.css";

function DashboardButtons() {
  return (
    <>
      <div className="container">
        <h2>Buttons default</h2>
        <div className="content">
          <div className="content-item">
            <ButtonDefault theme="default">Default</ButtonDefault>
          </div>
          <div className="content-item">
            <ButtonDefault theme="primary ">Primary</ButtonDefault>
          </div>
          <div className="content-item">
            <ButtonDefault theme="secondary ">Secondary</ButtonDefault>
          </div>
        </div>
        <h2>Buttons with border radius</h2>
      </div>
    </>
  );
}

export default DashboardButtons;
