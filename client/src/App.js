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
            <Route
              path="/dashboard/add_course"
              exact
              component={UpLoadCourses}
            ></Route>
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
//https://www.pluralsight.com/guides/centralized-error-handing-with-react-and-redux

/*************Prrivbate route */
//https://codesandbox.io/s/130qolmq9q
//https://stackoverflow.com/questions/61679854/private-route-with-redux-and-react-router
//https://medium.com/@eymaslive/securing-react-redux-application-public-private-routes-337f0ab19b3
