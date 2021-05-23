import React from "react";
import { useParams } from "react-router-dom";
const Pern = () => {
  let { pern } = useParams();
  return (
    <div className="slice-wrapper">
      List all courses you made
      <h3>Requested topic ID: {pern}</h3>;
    </div>
  );
};

export default Pern;