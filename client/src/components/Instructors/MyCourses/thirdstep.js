import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
const ThirdStep = () => {
  return (
    <div className="slice-wrapper">
      <p>choose cathoru</p>
      <div className="step">
        <NavLink to="/dashboard/add_course/4">Next</NavLink>
      </div>
    </div>
  );
};

export default ThirdStep;
