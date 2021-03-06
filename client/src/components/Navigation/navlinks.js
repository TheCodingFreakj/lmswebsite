import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
//https://reactrouter.com/web/guides/quick-start
const Navlinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/student-sign">Sign as Student</NavLink>
        <NavLink to="/teach">Teach Here</NavLink>
        <NavLink to="/home" exact>
          Home
        </NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;
