import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PromotionSearch from "./promotion/Search/Search";

const Root = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={PromotionSearch} />
        </Switch>
      </Router>
    </div>
  );
};

export default Root;
