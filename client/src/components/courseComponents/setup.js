import React from "react";
import "./style.css";
import { NavLink, useRouteMatch } from "react-router-dom";
const SetUp = () => {
  let match = useRouteMatch();
  console.log(match);
  return (
    <div className="page_wrapper_setup">
      <h1>Free expert video help</h1>
      <p>Get personalized advice on your audio and video</p>
      <div className="btn_page2">
        <NavLink to="teaching/test-video?ref=setup_and_tv">
          Set Up a Test Video
        </NavLink>
      </div>
    </div>
  );
};

export default SetUp;
