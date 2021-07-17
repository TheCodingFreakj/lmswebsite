import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useSelector } from "react-redux";

import { userSelector } from "../store/instructor/instructor";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useSelector(userSelector);
  console.log(useSelector(userSelector));
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/teach", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

// const PrivateRoute = ({ component: Comp, token, path, ...rest }) => {

//   console.log()
//   return (
//     <Route
//       path={path}
//       {...rest}
//       render={(props) => {
//         return token ? (
//           <Comp {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: {
//                 prevLocation: path,
//                 error: "You need to login first!",
//               },
//             }}
//           />
//         );
//       }}
//     />
//   );
// };

export default PrivateRoute;
