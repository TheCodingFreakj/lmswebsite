import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
//import student from "./user/student";
import instructor from "./instructor/instructor";

const reducer = combineReducers({
  // student,
  instructor,
});
const store = configureStore({
  reducer,
});
export default store;
