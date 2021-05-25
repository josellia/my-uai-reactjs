import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const redirectHome = () => {
    history.push("/");
  };
  return (
    <div className="container">
      <h1>404 - Not Found!</h1>
      <button onClick={redirectHome}>Redirect</button>
    </div>
  );
};

export default NotFound;
