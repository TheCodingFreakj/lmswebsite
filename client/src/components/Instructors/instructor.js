import React from "react";
import "./styles.css";
import {
  login_instructor,
  authSelector,
  clearState,
  register_instructor,
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
    errorbg: "",
    sucess: "",
    isInstrutor: true,
  });
  const registerdispatch = useDispatch();
  const [logindata, setlogindata] = React.useState({
    user_name: "",
    password: "",
    isInstrutor: true,
    errormsg: "",
    success: "",
  });

  const { user_name, password, isInstrutor, errormsg, success } = logindata;
  const logindispatch = useDispatch();

  let history = useHistory();
  const { isSuccess, isError, errorMessage, successMsg } =
    useSelector(authSelector);
  React.useEffect(() => {
    if (isSuccess) {
      setformData({ ...formData, sucess: successMsg });
      history.replace("/");
      registerdispatch(clearState());
    } else if (isError) {
      setformData({
        ...formData,
        errorbg: errorMessage,
      });

      registerdispatch(clearState());
    }
  }, [formData]);
  React.useEffect(() => {
    let mounted = true;

    if (mounted) {
      if (isSuccess) {
        history.replace("/teach/dashboard");

        setlogindata({ ...logindata, success: successMsg });
        logindispatch(clearState());
      } else if (isError) {
        setlogindata({
          ...logindata,
          errormsg: errorMessage,
        });
        logindispatch(clearState());
      }
    }
    return () => {
      mounted = false;
    };
  }, [logindata]);

  const handlechange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginhandlechange = (e) => {
    setlogindata({ ...logindata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerdispatch(register_instructor(formData));
    setformData("");
  };

  const handleloginSubmit = (e) => {
    e.preventDefault();
    logindispatch(login_instructor(logindata));
    setlogindata("");
  };
  return (
    <div className="component-wrapper">
      <div className="flex-container">
        <div className="flex-item">
          <h2>sign up</h2>
          {formData.sucess ? <h2>{formData.sucess}</h2> : null}
          {formData.errorbg ? <p>{formData.errorbg}</p> : null}
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
          {errormsg ? <p>{errormsg}</p> : null}
          {success ? <h2>{success}</h2> : null}
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

//https://redux.js.org/tutorials/essentials/part-6-performance-normalization
//https://redux-toolkit.js.org/api/createAsyncThunk
