import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
const SetUp = () => {
  return (
    <div className="page_wrapper_setup">
      <h1>Free expert video help</h1>
      <p>Get personalized advice on your audio and video</p>
      <div className="btn_page2">
        <NavLink to="/dashboard/manage_courses/test-video">
          Set Up a Test Video
        </NavLink>
      </div>
    </div>
  );
};

export default SetUp;
