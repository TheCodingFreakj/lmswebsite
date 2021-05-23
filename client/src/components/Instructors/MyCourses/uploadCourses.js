import React from "react";
import "./styles.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import FirstStep from "../../Instructors/MyCourses/firstStep";
import SecondStep from "../../Instructors/MyCourses/secondstep";
import ThirdStep from "../../Instructors/MyCourses/thirdstep";
import FourthStep from "../../Instructors/MyCourses/fourthstep";
const UpLoadCourses = () => {
  return (
    <div className="slice-wrapper">
      <div className="multi-step-form">
        <h1>Complete your Details</h1>
        <div className="steps">
          <div className="step">
            <NavLink to="/dashboard/add_course/1">Step1</NavLink>
          </div>
          <div className="step">
            <NavLink to="/dashboard/add_course/2">Step2</NavLink>
          </div>
          <div className="step">
            <NavLink to="/dashboard/add_course/3">Step3</NavLink>
          </div>
          <div className="step">
            <NavLink to="/dashboard/add_course/4">Step4</NavLink>
          </div>
        </div>
      </div>

      <div className="container">
        <Switch>
          <Route
            component={FirstStep}
            path="/dashboard/add_course/1"
            exact={true}
          />
          <Route
            component={SecondStep}
            path="/dashboard/add_course/2"
            exact={true}
          />
          <Route
            component={ThirdStep}
            path="/dashboard/add_course/3"
            exact={true}
          />

          <Route
            component={FourthStep}
            path="/dashboard/add_course/4"
            exact={true}
          />
        </Switch>
      </div>
    </div>
  );
};

export default UpLoadCourses;
