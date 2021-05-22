import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navlinks from "./components/Navigation/navlinks";
import Students from "./components/Students/students";
import Instructor from "./components/Instructors/instructor";
import Home from "./components/Home/home";
import InstructorDashboard from "./components/Instructors/dashboard";
import PrivateRoute from "./helpers/privateRoute";
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
          <PrivateRoute
            exact
            path="/teach/dashboard"
            component={InstructorDashboard}
          ></PrivateRoute>
          {/* https://stackoverflow.com/questions/57408430/warning-you-should-not-use-route-component-and-route-render-in-the-same-rou */}
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
