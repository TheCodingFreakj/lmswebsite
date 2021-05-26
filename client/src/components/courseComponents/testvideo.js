import React from "react";
import { useLocation } from "react-router-dom";

const UploadTestVideo = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  return <div>{query}</div>;
};

export default UploadTestVideo;
