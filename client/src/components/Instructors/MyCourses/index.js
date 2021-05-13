import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
const MyCourses = () => {
  let { mycourses } = useParams();
  return (
    <div className="slice-wrapper">
      List all courses you made
      <h3>Requested topic ID: {mycourses}</h3>;
    </div>
  );
};

export default MyCourses;
