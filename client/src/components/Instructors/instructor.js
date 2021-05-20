import React from "react";
import "./styles.css";
import {
  login_instructor,
  authSelector,
} from "../../store/instructor/instructor";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Instructor = () => {
  const [formData, setformData] = React.useState({
    user_name: "",
    fname: "",
    lname: "",
    phone: "",
    email: "",
    password: "",
    isInstrutor: true,
  });
  let history = useHistory();
  const { isSuccess, isError } = useSelector(authSelector);

  React.useEffect(() => {
    let mounted = true;
    if (isSuccess) {
      history.replace("/teach/dashboard");
    }

    return () => {
      mounted = false;
    };
  }, [isSuccess]);
  const [logindata, setlogindata] = React.useState({
    user_name: "",
    password: "",
    isInstrutor: true,
  });

  const { user_name, password, isInstrutor } = logindata;
  const logindispatch = useDispatch();
  // const registerdispatch = useDispatch();

  React.useEffect(() => {}, []);
  const handlechange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginhandlechange = (e) => {
    setlogindata({ ...logindata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch the action of posting data here and get the message
    //registerdispatch(register_instructor(formData));
    setformData("");
  };

  const handleloginSubmit = (e) => {
    e.preventDefault();
    //dispatch the action of posting data here and get the message
    //get the data

    logindispatch(login_instructor(logindata));
    setlogindata("");
  };
  return (
    <div className="component-wrapper">
      <div className="flex-container">
        <div className="flex-item">
          <h2>sign up</h2>
          <form id="form-id" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              id="form-field"
              name="user_name"
              value={formData.user_name || ""}
              required
              onChange={handlechange}
            ></input>

            <label>First Name</label>
            <input
              type="text"
              id="form-field"
              name="fname"
              value={formData.fname || ""}
              required
              onChange={handlechange}
            ></input>

            <label>Last Name </label>
            <input
              type="text"
              id="form-field"
              name="lname"
              value={formData.lname || ""}
              required
              onChange={handlechange}
            ></input>
            <label>Email</label>
            <input
              type="text"
              id="form-field"
              name="email"
              value={formData.email || ""}
              required
              onChange={handlechange}
            ></input>
            <label>Password</label>
            <input
              type="text"
              id="form-field"
              name="password"
              value={formData.password || ""}
              required
              onChange={handlechange}
            ></input>
            <label>Phone</label>
            <input
              type="number"
              id="form-field"
              name="phone"
              value={formData.phone || ""}
              required
              onChange={handlechange}
            ></input>
            <input type="submit" className="favorite styled" />
          </form>
        </div>
        <div className="flex-item">
          <h2>login</h2>
          <form id="form-id" onSubmit={handleloginSubmit}>
            <label>Name</label>
            <input
              type="text"
              id="form-field"
              name="user_name"
              value={user_name || ""}
              required
              onChange={loginhandlechange}
            ></input>

            <label>Password</label>
            <input
              type="text"
              id="form-field"
              name="password"
              value={password || ""}
              required
              onChange={loginhandlechange}
            ></input>

            <input
              type="hidden"
              id="form-field"
              name="isInstrutor"
              value={isInstrutor || ""}
              required
              onChange={loginhandlechange}
            ></input>
            <input type="submit" className="favorite styled" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
