import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import MasterForm from "./MasterForm";
import { Container, Row, Col } from "reactstrap";

const UpLoadCourses = () => {
  let history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    history.replace("/teach");
  };
  return (
    <Container>
      <Row>
        <button className="signout" onClick={logout}>
          Sign out
        </button>
        <Col>
          <MasterForm />
        </Col>
      </Row>
    </Container>
  );
};

export default UpLoadCourses;
//https://css-tricks.com/the-magic-of-react-based-multi-step-forms/
