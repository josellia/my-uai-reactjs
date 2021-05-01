import React from "react";
import { useParams } from "react-router-dom";

const FormPromotion = () => {
  const { id } = useParams();

  return <div className="container">Form {id && <div> id: {id}</div>}</div>;
};

export default FormPromotion;
