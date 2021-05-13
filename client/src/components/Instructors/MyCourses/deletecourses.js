import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
const Deletecourses = () => {
  let { deletecourses } = useParams();
  return (
    <div className="slice-wrapper">
      List all courses you made
      <h3>Requested topic ID: {deletecourses}</h3>;
    </div>
  );
};

export default Deletecourses;
