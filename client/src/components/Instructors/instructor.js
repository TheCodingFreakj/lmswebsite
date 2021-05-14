import React from "react";
import "./styles.css";
import register_instructor from "../../store/instructor/instructor";
import { useDispatch } from "react-redux";
const Instructor = () => {
  const [formData, setformData] = React.useState({
    username: "",
    fname: "",
    lname: "",
    phone: "",
    email: "",
    password: "",
    role: "instructor",
  });
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  // console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch the action of posting data here and get the message
    dispatch(register_instructor(formData));
    setformData("");
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
              name="username"
              value={formData.username}
              required
              onChange={handlechange}
            ></input>

            <label>First Name</label>
            <input
              type="text"
              id="form-field"
              name="fname"
              value={formData.fname}
              required
              onChange={handlechange}
            ></input>

            <label>Last Name </label>
            <input
              type="text"
              id="form-field"
              name="lname"
              value={formData.lname}
              required
              onChange={handlechange}
            ></input>
            <label>Email</label>
            <input
              type="text"
              id="form-field"
              name="email"
              value={formData.email}
              required
              onChange={handlechange}
            ></input>
            <label>Password</label>
            <input
              type="text"
              id="form-field"
              name="password"
              value={formData.password}
              required
              onChange={handlechange}
            ></input>
            <label>Phone</label>
            <input
              type="number"
              id="form-field"
              name="phone"
              value={formData.phone}
              required
              onChange={handlechange}
            ></input>
            <input type="submit" className="favorite styled" />
          </form>
        </div>
        <div className="flex-item">
          <h2>login</h2>
          <form id="form-id">
            <label>Name</label>
            <input
              type="text"
              id="form-field"
              // name="username"
              // value={formData.username}
              required
              // onChange={handlechange}
            ></input>

            <label>Email</label>
            <input
              type="text"
              id="form-field"
              name="email"
              // value={formData.email}
              // required
              // onChange={handlechange}
            ></input>
            <label>Password</label>
            <input
              type="text"
              id="form-field"
              name="password"
              // value={formData.password}
              // required
              // onChange={handlechange}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
