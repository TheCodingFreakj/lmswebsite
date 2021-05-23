import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navlinks from "./components/Navigation/navlinks";
import Students from "./components/Students/students";
import Instructor from "./components/Instructors/instructor";
import Home from "./components/Home/home";
import InstructorDashboard from "./components/Instructors/dashboard";
import PrivateRoute from "./helpers/privateRoute";
import AllCourses from "./components/Instructors/MyCourses/allcourses";
import ManageCourses from "./components/Instructors/MyCourses/managecourses";
import UpLoadCourses from "./components/Instructors/MyCourses/uploadCourses";
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
            path="/teach/dashboard"
            component={InstructorDashboard}
          ></PrivateRoute>

          <PrivateRoute
            path="/dashboard/add_course"
            component={UpLoadCourses}
          ></PrivateRoute>
          <PrivateRoute
            path="/dashboard/manage_courses"
            component={ManageCourses}
          ></PrivateRoute>
          <PrivateRoute
            path="/dashboard/all-courses"
            component={AllCourses}
          ></PrivateRoute>
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
