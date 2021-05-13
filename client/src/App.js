import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navlinks from "./components/Navigation/navlinks";
import Students from "./components/Students/students";
import Instructor from "./components/Instructors/instructor";
import Home from "./components/Home/home";
import InstructorDashboard from "./components/Instructors/dashboard";
const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <button className="main-nav-menu-button">
            <span />
            <span />
            <span />
          </button>
          <nav>
            <Navlinks />
          </nav>
        </div>
        <Switch>
          <Route path="/teach/dashboard">
            <InstructorDashboard />
          </Route>
          <Route path="/teach">
            <Instructor />
          </Route>

          <Route path="/student-sign">
            <Students />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
