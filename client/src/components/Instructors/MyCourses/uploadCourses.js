import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
const UpLoadCourses = () => {
  let { uploadcourses } = useParams();
  return (
    <div className="slice-wrapper">
      List all courses you made
      <h3>Requested topic ID: {uploadcourses}</h3>;
    </div>
  );
};

export default UpLoadCourses;
