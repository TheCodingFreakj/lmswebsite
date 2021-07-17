import React from "react";
import "./styles.css";
import { FormGroup, Label, Input } from "reactstrap";
const SecondStep = (props) => {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="slice-wrapper">
      <FormGroup>
        <Label for="username">Username</Label>
        <div className="field">
          <div className="label">Your Title</div>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter your title"
            value={props.title} // Prop: The username input data
            onChange={props.handleChange} // Prop: Puts data into the state
          />
        </div>
      </FormGroup>
    </div>
  );
};

export default SecondStep;
