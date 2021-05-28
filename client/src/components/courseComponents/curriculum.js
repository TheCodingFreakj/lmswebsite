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
  const [show_video, setshow_video] = React.useState(false);
  const [show__v_l, setshow__v_l] = React.useState(false);
  const [show_article, setshow_article] = React.useState(false);
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
    setshow(true);
  };

  const lectureBlock = () => {
    return (
      <div className="lectureBlock">
        <div className="div_inner" onClick={() => setshow_video(true)}>
          {show_video ? (
            <div className="inner_div_video">{openvideodiv()}</div>
          ) : (
            <p>video</p>
          )}
        </div>
        <div className="div_inner" onClick={() => setshow__v_l(true)}>
          {show__v_l ? (
            <div className="inner_div__v_l">{openvideodiv_v_l()}</div>
          ) : (
            <p>video and lecture</p>
          )}
        </div>
        <div className="div_inner" onClick={() => setshow_article(true)}>
          {show_article ? (
            <div className="inner_div_article">{openvideodiv_article()}</div>
          ) : (
            <p>article</p>
          )}
        </div>
      </div>
    );
  };
  const openvideodiv = () => {
    return <div>This is div</div>;
  };

  const openvideodiv_v_l = () => {
    return <div>openvideodiv_v_l</div>;
  };

  const openvideodiv_article = () => {
    return <div>openvideodiv_article</div>;
  };

  const handleRemove = () => {
    setshow(false);
    window.location.reload();
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

            <div className="dropdown_2">
              <span className="dropbtn" onClick={showlecturediv}>
                +lectures
              </span>
              <button
                className="btn_page2 page_3"
                type="button"
                onClick={() => handleRemove()}
              >
                X
              </button>
              <div className="view_1">
                <div className="lecture_block">
                  {show ? lectureBlock() : null}
                </div>
              </div>
            </div>
            <div className="dropdown">
              <span className="dropbtn">content</span>
              <div className="dropdown-content">
                <button className="brn" onClick={opentexteditor}>
                  + Description
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
