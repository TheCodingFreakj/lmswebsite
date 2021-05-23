import React from "react";
import { useParams } from "react-router-dom";
const Wordpress = () => {
  let { wordpress } = useParams();
  return (
    <div className="slice-wrapper">
      List all courses you made
      <h3>Requested topic ID: {wordpress}</h3>;
    </div>
  );
};

export default Wordpress;
