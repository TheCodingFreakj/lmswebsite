import React from "react";
import "./styles.css";
import { FormGroup, Label, Input } from "reactstrap";
const FourthStep = (props) => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <div className="slice-wrapper">
      <FormGroup>
        <Label for="password">How many hour the lector would be</Label>
        <Input
          type="text"
          name="hour"
          id="hour"
          placeholder="Enter your hour"
          value={props.hour} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </div>
  );
};

export default FourthStep;
