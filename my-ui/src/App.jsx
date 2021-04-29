import Navbar from "./components/menu/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import DashboardButtons from "./dashboards/DashboardButtons";

import Home from "./pages/Home";
import DashboardForms from "./dashboards/DasboardForms";

import { DashboardTables } from "./dashboards/DashboardTables";
import DashboardEstudos from "./dashboards/DashboardEstudos";
import DashboardProjetos from "./dashboards/DashboardProjetos";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={DashboardProjetos} />
          <Route path="/dasboard-buttons" component={DashboardButtons} />
          <Route path="/dasboard-forms" component={DashboardForms} />
          <Route path="/dasboard-estudos" component={DashboardEstudos} />
          <Route path="/dasboard-tables" component={DashboardTables} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
