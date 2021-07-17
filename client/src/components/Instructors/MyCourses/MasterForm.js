import React from "react";
import {
  Form,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";
import MultiStepProgressBar from "./MultiStepProgressBar";
import ThirdStep from "./thirdstep";
import FirstStep from "./firstStep";
import SecondStep from "./secondstep";
import FourthStep from "./fourthstep";
import "./styles.css";
const MasterForm = () => {
  const [coursename, setcoursename] = React.useState("");
  const [courseformat, secourseformat] = React.useState("");
  const [videos, setvideos] = React.useState("");
  const [title, settitle] = React.useState("");
  const [hour, sethour] = React.useState("");
  const [currentStepp, setcurrentStepp] = React.useState(1);

  const handleChange = (event) => {
    setcoursename(event.target.value);
  };
  const handleChange2 = (event) => {
    secourseformat(event.target.value);
  };

  const handleChange3 = (event) => {
    setvideos(event.target.value);
  };

  const handleChange4 = (event) => {
    settitle(event.target.value);
  };

  const handleChange5 = (event) => {
    sethour(event.target.value);
  };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  const _next = () => {
    let currentStep = currentStepp;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    setcurrentStepp(currentStep);
  };

  const _prev = () => {
    let currentStep = currentStepp;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;

    setcurrentStepp(currentStep);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //send the data to backebd
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Card>
        <CardBody>
          <CardTitle>
            <MultiStepProgressBar currentStep={currentStepp} />
          </CardTitle>
          <CardText />

          <FirstStep
            currentStep={currentStepp}
            handleChange={handleChange}
            handleChange3={handleChange3}
            handleChange2={handleChange2}
            coursename={coursename}
            courseformat={courseformat}
            videos={videos}
          />
          <SecondStep
            currentStep={currentStepp}
            handleChange={handleChange4}
            title={title}
          />
          <FourthStep
            currentStep={currentStepp}
            handleChange={handleChange5}
            hour={hour}
          />
        </CardBody>
        <CardFooter>
          <Button color="secondary float-left" onClick={_prev}>
            Previous
          </Button>
          <Button color="primary float-right" onClick={_next}>
            Next
          </Button>

          {currentStepp > 2 ? (
            <Button color="primary float-right">Submit</Button>
          ) : null}
        </CardFooter>
      </Card>
    </Form>
  );
};

export default MasterForm;
