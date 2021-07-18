import React from "react";
import "./style.css";
import { NavLink, useRouteMatch } from "react-router-dom";
import axios from "axios";
const SetUp = () => {
  const [addvideo, setaddvideo] = React.useState("");
  let match = useRouteMatch();
  console.log(match);
  const handlsChange = (e) => {
    setaddvideo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!addvideo) return;
    console.log(addvideo);
    const formData = new FormData();
    formData.append("videouploaded", addvideo);
    const response = await axios({
      method: "POST",
      url: `http://localhost:8080/api/v1/upload`,
      formData,
      headers: {
        contentType: "multipart/form-data",
      },
    });
  };

  return (
    <div className="page_wrapper_setup">
      <h1>Free expert video help</h1>
      <p>Get personalized advice on your audio and video</p>

      <div className="btn_page2">
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            id="img"
            name="video"
            accept="video/*"
            onChange={handlsChange}
          />
          <button type="submit"> Set Up a Test Video</button>
        </form>
      </div>
    </div>
  );
};

export default SetUp;
