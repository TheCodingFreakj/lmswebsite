import React from "react";
import "./styles.css";

import { Redirect, useHistory, useLocation } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  signupUser,
  userSelector,
  loginUser,
} from "../../store/instructor/instructor";
import { unwrapResult } from "@reduxjs/toolkit";
const Instructor = () => {
  const registerdispatch = useDispatch();
  const logindispatch = useDispatch();
  const [formData, setformData] = React.useState({
    email: "",
    password: "",
    phone: "",
    isInstrutor: true,
  });

  const [logindata, setlogindata] = React.useState({
    email: "",
    password: "",
  });
  const [error, seterror] = React.useState();

  let history = useHistory();
  const { isFetching, isSuccess, isError, errorMessage, user, token } =
    useSelector(userSelector);
  //console.log(useSelector(userSelector));

  const handlechange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginhandlechange = (e) => {
    setlogindata({ ...logindata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const awl2 = await registerdispatch(signupUser(formData));
      const originalPromiseResult2 = unwrapResult(awl2);
      let { from } = location.state || {
        from: { pathname: "/teach/dashboard" },
      };

      history.replace(from);
    } catch (rejectedValueOrSerializedError) {
      // handle error here
      console.log(rejectedValueOrSerializedError);
      seterror(rejectedValueOrSerializedError.message);
    }
  };
  let location = useLocation();
  const handleloginSubmit = async (e) => {
    e.preventDefault();

    try {
      const awl = await logindispatch(loginUser(logindata));
      const originalPromiseResult = unwrapResult(awl);
      // console.log(originalPromiseResult);

      let { from } = location.state || {
        from: { pathname: "/teach/dashboard" },
      };

      history.replace(from);
    } catch (rejectedValueOrSerializedError) {
      seterror(rejectedValueOrSerializedError.message);
    }
  };
  return (
    <div className="component-wrapper">
      <div className="flex-container">
        <div className="flex-item">
          <h2>sign up</h2>

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formData.email || ""}
              required
              onChange={handlechange}
            ></input>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password || ""}
              required
              onChange={handlechange}
            ></input>
            <label>Phone</label>
            <input
              type="number"
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
          {error ? <p>{error}</p> : null}
          <form onSubmit={handleloginSubmit}>
            <label>email</label>
            <input
              type="text"
              name="email"
              value={logindata.email || ""}
              required
              onChange={loginhandlechange}
            ></input>

            <label>Password</label>
            <input
              type="text"
              name="password"
              value={logindata.password || ""}
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

export default withRouter(Instructor);

//https://redux.js.org/tutorials/essentials/part-6-performance-normalization
//https://redux-toolkit.js.org/api/createAsyncThunk
