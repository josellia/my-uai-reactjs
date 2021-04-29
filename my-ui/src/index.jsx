import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundary from "./teste/estudos-praticos/hooks/ErrorBounsary";

const main = (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
ReactDOM.render(main, document.querySelector("#root"));
