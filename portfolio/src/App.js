// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import About from "./components/About";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact Component={HomePage} />
        <Route path="/About" Component={About} />
        <Route path="/Projects" Component={Projects} />
      </Routes>
    </AnimatePresence>
  );
};
function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      {/* <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/About" Component={About}/>
        </Routes> */}
      {/* <HomePage /> */}
      {/* <Switch>
          <Route />
        </Switch> */}
    </Router>
  );
}

export default App;
