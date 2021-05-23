import React from "react";
import "./styles.css";
// import { Switch, Route, useRouteMatch } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import Webdesign from "../course_categories/web-design/index";
// import Wordpress from "../course_categories/worpress/index";
// import Pern from "../course_categories/pern/index";
// import Mern from "../course_categories/mern/index";

const Home = () => {
  // let match = useRouteMatch();
  // console.log(match);
  return (
    <div className="component-wrapper">
      {/* <ul className="nav-links-inner">
        <li className="bullet-inner">
          <NavLink to={`${match.url}/webdesign`}>web-design</NavLink>
          <NavLink to={`${match.url}/wordpress`}>wordpress</NavLink>
          <NavLink to={`${match.url}/mern`}>mern</NavLink>
          <NavLink to={`${match.url}/pern`}>pern</NavLink>
        </li>
      </ul> */}

      <h2>This is home page</h2>

      {/* <Switch>
        <Route path={`${match.path}/:webdesign`}>
          <Webdesign />
        </Route>

        <Route path={`${match.path}/:wordpress`}>
          <Wordpress />
        </Route>

        <Route path={`${match.path}/:mern`}>
          <Mern />
        </Route>

        <Route path={`${match.path}/:pern`}>
          <Pern />
        </Route>
      </Switch> */}
    </div>
  );
};

export default Home;
