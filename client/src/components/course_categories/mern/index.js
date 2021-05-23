import React from "react";
import { useParams } from "react-router-dom";
const Mern = () => {
  let { mern } = useParams();
  return (
    <div className="slice-wrapper">
      List all courses you made
      <h3>Requested topic ID: {mern}</h3>;
    </div>
  );
};

export default Mern;
