import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
const SecondStep = () => {
  return (
    <div className="slice-wrapper">
      <div className="form-outer">
        <form action="#">
          <div className="page slide-page">
            <div className="field">
              <div className="label">Your Title</div>
              <input type="text" />
            </div>

            <div className="step">
              <NavLink to="/dashboard/add_course/3">Next</NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecondStep;
