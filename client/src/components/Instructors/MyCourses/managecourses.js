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
      history.push(`/dashboard/manage_courses/${e.target.name}`);
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
    console.log("I am hit");
    //https://stackoverflow.com/questions/46592833/how-to-use-switch-statement-inside-a-react-component
    //https://stackoverflow.com/questions/42267342/showing-components-on-checkbox-click-in-react
    switch (Object.keys(options).toString()) {
      case "goals":
        return <Goals />;
        break;
      case "course_structure":
        return <CourseStructure />;
        break;
      case "promotions":
        return <Promotions />;
        break;
      case "setup":
        return <SetUp />;
        break;

      case "film":
        return <Film />;
        break;
      case "curriculum":
        return <Curriculum />;
        break;
      case "captions":
        return <Captions />;
        break;
      case "setup":
        return <SetUp />;
        break;
      case "basics":
        return <Basics />;
        break;
      case "pricing":
        return <Pricings />;
        break;
      case "messages":
        return <Messages />;
        break;

      default:
        return <Goals />;
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
                  checked={goals === "goals"}
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
                  checked={selectedOption === "course_structure"}
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
                  checked={selectedOption === "setup"}
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
                  checked={selectedOption === "film"}
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
                  checked={selectedOption === "curriculum"}
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
                  checked={selectedOption === "captions"}
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
                  checked={selectedOption === "basics"}
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
                  checked={selectedOption === "pricing"}
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
                  checked={selectedOption === "promotions"}
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
                  checked={selectedOption === "messages"}
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
