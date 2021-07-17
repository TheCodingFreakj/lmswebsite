import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navlinks from "./components/Navigation/navlinks";
import Students from "./components/Students/students";
import Instructor from "./components/Instructors/instructor";
import Home from "./components/Home/home";
import InstructorDashboard from "./components/Instructors/dashboard";
import PrivateRoute from "./helpers/privateRoute";

import UploadTestVideo from "./components/courseComponents/testvideo";
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
          <>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/teach" exact>
              <Instructor />
            </Route>

            <Route path="/student-sign" exact>
              <Students />
            </Route>

            <PrivateRoute
              path="/teach/dashboard"
              component={InstructorDashboard}
              exact
            ></PrivateRoute>
            <PrivateRoute
              path="/dashboard/add_course"
              exact
              component={UpLoadCourses}
            ></PrivateRoute>
            <Route
              path="/dashboard/manage_courses"
              exact
              component={ManageCourses}
            ></Route>
            <Route
              path="/dashboard/all-courses"
              exact
              component={AllCourses}
            ></Route>

            <Route
              path="teaching/test-video?ref=setup_and_tv"
              exact
              component={UploadTestVideo}
            ></Route>
          </>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
////https://codesandbox.io/s/j7y1879179?file=/components/Step3.js:115-169
