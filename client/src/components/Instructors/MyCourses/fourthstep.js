import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
const FourthStep = () => {
  return (
    <div className="slice-wrapper">
      <div className="form-outer">
        <form action="#">
          <div className="page slide-page">
            <div className="field">
              <div className="label">How many hour the lector would be</div>
              <input type="text" />
            </div>

            <div className="step">
              <NavLink to="/dashboard/manage_courses">Create Course</NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FourthStep;