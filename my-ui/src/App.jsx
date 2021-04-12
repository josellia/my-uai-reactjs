import Navbar from "./components/menu/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import DashboardButtons from "./dashboards/DashboardButtons";
import DashboardInputs from "./dashboards/DashboardInputs";
import Home from "./pages/Home";
import DashboardForms from "./dashboards/DasboardForms";
import Contact from "./teste/project-one/Contact";
import { DashboardTables } from "./dashboards/DashboardTables";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/test" component={Contact} />
          <Route path="/dasboard-buttons" component={DashboardButtons} />
          <Route path="/dasboard-forms" component={DashboardForms} />
          <Route path="/dasboard-inputs" component={DashboardInputs} />
          <Route path="/dasboard-tables" component={DashboardTables} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
