import React from "react";
import "./styles.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MyCourses from "../Instructors/MyCourses/index";
import UpLoadCourses from "../Instructors/MyCourses/uploadCourses";
import Updatecourses from "../Instructors/MyCourses/updatecourses";
import Deletecourses from "../Instructors/MyCourses/deletecourses";
const InstructorDashboard = () => {
  let match = useRouteMatch();
  return (
    <div className="component-wrapper">
      <ul className="nav-links-inner">
        <li className="bullet-inner">
          <NavLink to="/student-sign">Sign as Student</NavLink>
          <NavLink to={`${match.url}/mycourses`}>mycourses</NavLink>
          <NavLink to={`${match.url}/uploadcourses`}>uploadcourses</NavLink>
          <NavLink to={`${match.url}/updatecourses`}>updatecourses</NavLink>
          <NavLink to={`${match.url}/deletecourses`}>deletecourses</NavLink>
        </li>
      </ul>

      <h2>This is InstructorDashboard </h2>

      <Switch>
        <Route path={`${match.path}/:mycourses`}>
          <MyCourses />
        </Route>

        <Route path={`${match.path}/:uploadcourses`}>
          <UpLoadCourses />
        </Route>

        <Route path={`${match.path}/:updatecourses`}>
          <Updatecourses />
        </Route>

        <Route path={`${match.path}/:deletecourses`}>
          <Deletecourses />
        </Route>
      </Switch>
    </div>
  );
};

export default InstructorDashboard;
