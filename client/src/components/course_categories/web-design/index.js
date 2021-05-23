import React from "react";
import { useParams } from "react-router-dom";
const Webdesign = () => {
  let { webdesign } = useParams();
  return (
    <div className="slice-wrapper">
      List all courses you made
      <h3>Requested topic ID: {webdesign}</h3>;
    </div>
  );
};

export default Webdesign;