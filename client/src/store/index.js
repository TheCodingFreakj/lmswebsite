import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import student from "./user/student";

const reducer = combineReducers({
  student,
});
const store = configureStore({
  reducer,
});
export default store;
