import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../../store/instructor/instructor";
import { NavLink } from "react-router-dom";
//import AllCourses from "../Instructors/MyCourses/allcourses";
//import ManageCourses from "../Instructors/MyCourses/managecourses";
const InstructorDashboard = () => {
  let history = useHistory();
  const { user_name } = useSelector(authSelector);

  const logout = () => {
    localStorage.removeItem("token");
    history.replace("/teach");
  };
  return (
    <div className="component-wrapper">
      <div className="dashboard-header">
        <h2>Welcom {user_name} To your dashboard</h2>
        <button className="signout" onClick={logout}>
          Sign out
        </button>
      </div>
      <div className="dashboard_content">
        <div className="btn_inner">
          <NavLink to="/dashboard/add_course">Add New Courses</NavLink>
        </div>
        <div className="btn_inner">
          <NavLink to="/dashboard/all-courses">See all courses</NavLink>
        </div>
        <div className="search">
          <input type="text" className="btn_inner" />
          <button className="btn_inner" onClick={logout}>
            search your course
          </button>
        </div>
      </div>

      <div className="render_components">Here render latest course</div>

      <div className="render_components">Tools</div>
    </div>
  );
};

export default InstructorDashboard;
