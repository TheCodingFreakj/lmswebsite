import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
const FirstStep = () => {
  return (
    <div className="slice-wrapper">
      <div className="form-outer">
        <form action="#">
          <div className="page slide-page">
            <div className="field">
              <div className="label">Course Name</div>
              <input type="text" />
            </div>

            <div className="field">
              <div className="label">Course Format</div>
              <input type="text" />
            </div>

            <div className="field">
              <div className="label">Number of Videos</div>
              <input type="text" />
            </div>

            <div className="step">
              <NavLink to="/dashboard/add_course/2">Next</NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FirstStep;
