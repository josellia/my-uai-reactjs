import Navbar from "./components/menu/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import DashboardButtons from "./dashboards/DashboardButtons";
import DashboardInputs from "./dashboards/DashboardInputs";
import Home from "./pages/Home";
import DashboardForms from "./dashboards/DasboardForms";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dasboard-buttons" component={DashboardButtons} />
          <Route path="/dasboard-forms" component={DashboardForms} />
          <Route path="/dasboard-inputs" component={DashboardInputs} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
