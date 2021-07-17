import React from "react";
import "./styles.css";
import { FormGroup, Label, Input } from "reactstrap";

const FirstStep = (props) => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div className="slice-wrapper">
      <FormGroup>
        <Label for="email">Email</Label>
        <div className="field">
          <div className="label">Course Name</div>
          <Input
            type="text"
            name="coursename"
            id="coursename"
            placeholder="Enter your coursename"
            value={props.coursename} // Prop: The username input data
            onChange={props.handleChange} // Prop: Puts data into the state
          />
        </div>

        <div className="field">
          <div className="label">Course Format</div>
          <Input
            type="text"
            name="courseformat"
            id="courseformat"
            placeholder="Enter your courseformat"
            value={props.courseformat} // Prop: The username input data
            onChange={props.handleChange2} // Prop: Puts data into the state
          />
        </div>

        <div className="field">
          <div className="label">Number of Videos</div>
          <Input
            type="text"
            name="videos"
            id="videos"
            placeholder="Enter your videos"
            value={props.videos} // Prop: The username input data
            onChange={props.handleChange3} // Prop: Puts data into the state
          />
        </div>
      </FormGroup>
    </div>
  );
};

export default FirstStep;
