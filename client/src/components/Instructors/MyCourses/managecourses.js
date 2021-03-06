import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import Goals from "../../courseComponents/goals";
import CourseStructure from "../../courseComponents/coursestructure";
import Basics from "../../courseComponents/basics";
import Captions from "../../courseComponents/captions";
import Curriculum from "../../courseComponents/curriculum";
import Film from "../../courseComponents/film";
import Messages from "../../courseComponents/messages";
import Pricings from "../../courseComponents/pricing";
import SetUp from "../../courseComponents/setup";
import Promotions from "../../courseComponents/promotions";
const ManageCourses = () => {
  const [selectedOption, setselectedOption] = React.useState({
    goals: "",
    course_structure: "",
    setup: "",
    film: "",
    curriculum: "",
    captions: "",
    basics: "",
    pricing: "",
    promotions: "",
    messages: "",
  });

  const {
    goals,
    course_structure,
    setup,
    film,
    curriculum,
    captions,
    basics,
    pricing,
    promotions,
    messages,
  } = selectedOption;
  let history = useHistory();
  const handleOptionChange = (e) => {
    if (e.target.checked === true) {
      //history.push(`/dashboard/manage_courses/${e.target.name}`);
      setselectedOption({
        [e.target.name]: e.target.value,
      });
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    history.replace("/teach");
  };
  const showComponents = (options) => {
    console.log(Object.keys(options).toString());
    switch (Object.keys(options).toString()) {
      case "goals":
        return <Goals />;

      case "course_structure":
        return <CourseStructure />;

      case "promotions":
        return <Promotions />;

      case "setup":
        return <SetUp />;

      case "film":
        return <Film />;

      case "curriculum":
        return <Curriculum />;

      case "captions":
        return <Captions />;

      case "basics":
        return <Basics />;

      case "pricing":
        return <Pricings />;

      case "messages":
        return <Messages />;
      default:
        return <Curriculum />;
    }
  };
  return (
    <div className="slice-wrapper">
      <button className="signout" onClick={logout}>
        Sign out
      </button>
      <div className="manage-courses">
        <div className="left_container">
          <div className="inner-bucker">
            <h3>Plan your course</h3>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="goals"
                  value="goals"
                  checked={selectedOption.goals === "goals"}
                  onChange={handleOptionChange}
                />
                Target Audience
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="course_structure"
                  value={course_structure}
                  checked={
                    selectedOption.course_structure === "course_structure"
                  }
                  onChange={handleOptionChange}
                />
                course-structure
              </label>
            </div>

            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="setup"
                  value={setup}
                  checked={selectedOption.setup === "setup"}
                  onChange={handleOptionChange}
                />
                Audio Video setup
              </label>
            </div>
          </div>

          <div className="inner-bucker">
            <h3>Create content</h3>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="film"
                  value={film}
                  checked={selectedOption.film === "film"}
                  onChange={handleOptionChange}
                />
                film And Editing
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="curriculum"
                  value={curriculum}
                  checked={selectedOption.curriculum === "curriculum"}
                  onChange={handleOptionChange}
                />
                curriculum
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="captions"
                  value={captions}
                  checked={selectedOption.captions === "captions"}
                  onChange={handleOptionChange}
                />
                captions
              </label>
            </div>
          </div>
          <div className="inner-bucker">
            <h3>Publish</h3>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="basics"
                  value={basics}
                  checked={selectedOption.basics === "basics"}
                  onChange={handleOptionChange}
                />
                Landing Page
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name={pricing}
                  value="pricing"
                  checked={selectedOption.pricing === "pricing"}
                  onChange={handleOptionChange}
                />
                pricing
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="promotions"
                  value={promotions}
                  checked={selectedOption.promotions === "promotions"}
                  onChange={handleOptionChange}
                />
                promotions
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="messages"
                  value={messages}
                  checked={selectedOption.messages === "messages"}
                  onChange={handleOptionChange}
                />
                messages
              </label>
            </div>
          </div>
        </div>
        <div className="right_container">
          <div className="inner-right">
            {selectedOption ? showComponents(selectedOption) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;
//https://stackoverflow.com/questions/50755113/react-router-navigate-to-another-page-on-radio-button-selection
//https://dev.to/projectescape/programmatic-navigation-in-react-3p1l#:~:text=import%20%7B%20Redirect%20%7D%20from%20%22react,the%20state%20of%20the%20component.&text=Whenever%20you%20want%20to%20redirect,rendering%20the%20component.
