import React from "react";
import Spinner from "../../public/imgs/spinner.gif";
import "./spinner.css";

const FullPageLoader = () => {
  return (
    <div className="fp-container">
      <img
        src={Spinner}
        alt="Imagem load de carregamento"
        className="fp-loader"
      />
    </div>
  );
};

export default FullPageLoader;
