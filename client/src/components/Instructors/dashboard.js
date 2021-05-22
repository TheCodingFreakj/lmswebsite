import React from "react";
import "./styles.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MyCourses from "../Instructors/MyCourses/index";
import UpLoadCourses from "../Instructors/MyCourses/uploadCourses";
import Updatecourses from "../Instructors/MyCourses/updatecourses";
import Deletecourses from "../Instructors/MyCourses/deletecourses";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../../store/instructor/instructor";
const InstructorDashboard = () => {
  let history = useHistory();
  let match = useRouteMatch();
  const { user_name } = useSelector(authSelector);

  const logout = () => {
    localStorage.removeItem("token");
    history.replace("/teach");
  };
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
      {/* //include this form
//https://www.freecodecamp.org/news/build-a-multi-step-registration-app-with-animated-transitions-using-mern-stack/ */}
      <h2>Welcom {user_name} To your dashboard</h2>

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
      <button className="signout" onClick={logout}>
        Sign out
      </button>
    </div>
  );
};

export default InstructorDashboard;
