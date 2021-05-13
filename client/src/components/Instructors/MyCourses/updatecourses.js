import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
const Updatecourses = () => {
  let { updatecourses } = useParams();
  return (
    <div className="slice-wrapper">
      List all courses you made
      <h3>Requested topic ID: {updatecourses}</h3>;
    </div>
  );
};

export default Updatecourses;