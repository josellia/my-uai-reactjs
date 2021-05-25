import Navbar from "./components/menu/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import DashboardButtons from "./dashboards/DashboardButtons";

import Home from "./pages/Home";
import DashboardForms from "./dashboards/DasboardForms";

import { DashboardTables } from "./dashboards/DashboardTables";
import DashboardEstudos from "./dashboards/DashboardEstudos";
import DashboardProjetos from "./dashboards/DashboardProjetos";
import FormPromotion from "./teste/project-one/pages/promotion/Form/FormPromotion";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <BrowserRouter> */}
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/projects" component={DashboardProjetos} />
          {/* Routes test */}
          <Route path="/create-promotion" component={FormPromotion} />
          <Route path="/edit-promotion/:id" component={FormPromotion} />

          <Route path="/dasboard-buttons" component={DashboardButtons} />
          <Route path="/dasboard-forms" component={DashboardForms} />
          <Route path="/dasboard-estudos" component={DashboardEstudos} />
          <Route path="/dasboard-tables" component={DashboardTables} />
          <Route path="" component={NotFound} />
        </Switch>
        {/* </BrowserRouter> */}
      </Router>
    </div>
  );
};

export default App;
