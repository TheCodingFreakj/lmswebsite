import { configureStore } from "@reduxjs/toolkit";
import { authslice } from "./instructor/instructor";

const store = configureStore({
  reducer: {
    instructor: authslice.reducer,
  },
});
export default store;
