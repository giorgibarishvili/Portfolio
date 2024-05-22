// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <HomePage />
      {/* <Switch>
        <Route />
      </Switch> */}
    </Router>
  );
}

export default App;
