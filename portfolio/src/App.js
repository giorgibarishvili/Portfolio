// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./HomePage";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={HomePage} />
        <Route path="/About" Component={About}/>
      </Routes>
      {/* <HomePage /> */}
      {/* <Switch>
        <Route />
      </Switch> */}
    </Router>
  );
}

export default App;
