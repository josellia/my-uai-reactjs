import Navbar from "./components/menu/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
