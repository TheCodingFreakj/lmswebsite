import React from "react";
import "./style.css";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react
//https://stackoverflow.com/questions/23116591/how-to-include-a-font-awesome-icon-in-reacts-render
const Curriculum = () => {
  const [showdiv, setshowdiv] = React.useState(false);
  const [showdiv2, setshowdiv2] = React.useState(false);
  const [show, setshow] = React.useState(false);
  const opentexteditor = (e) => {
    setshowdiv(!showdiv);
  };
  const showeditor = () => {
    return <div>I am a text editor</div>;
  };

  const opentexteditor2 = (e) => {
    setshowdiv2(!showdiv2);
  };
  const showeditor2 = () => {
    return <div>I am a text edito2r</div>;
  };

  const showlecturediv = () => {
    setshow(!show);
  };

  const lectureBlock = () => {
    return (
      <div className="lectureBlock">
        <div className="div_inner">
          <p>video</p>
        </div>
        <div className="div_inner">
          <p>video and lecture</p>
        </div>
        <div className="div_inner">
          <p>article</p>
        </div>
      </div>
    );
  };
  return (
    <div className="curriculum_container">
      <div className="btn_page2">
        <button>Bulk Uploader</button>
      </div>
      <h1>Curriculum</h1>
      <p>
        Start putting together your course by creating sections, lectures and
        practice (quizzes, coding exercises and assignments). If you’re
        intending to offer your course for free, the total length of video
        content must be less than 2 hours.
      </p>

      <div className="inner_box_3">
        <div className="content_upload_inner">
          <span>section1</span>
          <span>Introuction</span>
          <div className="inner_form_6">
            <span>Lecture1</span>
            <span>Introuction</span>
            <div className="dropdown">
              <span className="dropbtn" onClick={showlecturediv}>
                +lectures
              </span>

              <div className="lecture_block">
                {show ? lectureBlock() : null}
              </div>
            </div>
            <div className="dropdown">
              <span className="dropbtn">content</span>
              <div className="dropdown-content">
                <button className="brn" onClick={opentexteditor}>
                  + Description{" "}
                </button>
                <div className="textEdtorcontener">
                  {showdiv ? showeditor() : null}
                </div>
                <button className="brn" onClick={opentexteditor2}>
                  + Resources
                </button>
                <div className="textEdtorcontener">
                  {showdiv2 ? showeditor2() : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
