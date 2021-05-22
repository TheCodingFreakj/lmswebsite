import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Slice
//https://blog.bitsrc.io/simplifying-redux-with-redux-toolkit-6236c28cdfcb
//https://www.softkraft.co/how-to-setup-redux-with-redux-toolkit/#how-to-setup-create-react-app-with-redux
//https://redux-toolkit.js.org/introduction/getting-started
//https://www.softkraft.co/how-to-setup-slices-with-redux-toolkit/#connecting-app-to-api

/******************LOGIN***********/

export const register_instructor = createAsyncThunk(
  "instructor/signupInstructorSuccess",
  async (formdata, thunkAPI) => {
    try {
      const options = {
        headers: {
          Accept: "application/json",
          // Content_Type: "application/json",
        },
      };

      const response = axios({
        method: "post",
        url: "http://localhost:3001/api/v1/signup",
        data: formdata,
        options,
      });
   
      return response;
    } catch (e) {
      
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const login_instructor = createAsyncThunk(
  "instructor/loginInstructorSuccess",
  async (logindata, thunkAPI) => {
    try {
      const options = {
        headers: {
          Accept: "application/json",
          // Content_Type: "application/json",
        },
      };

      const response = axios({
        method: "post",
        url: "http://localhost:3001/api/v1/signin",
        data: logindata,
        options,
      });

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
export const authslice = createSlice({
  name: "instructor",
  initialState: {
    user_name: "",
    fname: "",
    lname: "",
    phone: "",
    email: "",
    password: "",
    isInstrutor: true,
    isError: false,
    isFetching: false,
    errorMessage: "",
    isSuccess: false,
    successMsg: "",
  },
  //Will handle the action type `'instructor/loginInstructorSuccess'
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login_instructor.fulfilled, (state, action) => {
      console.log(action);
      state.isSuccess = true;
      state.isError = false;
      state.isFetching = false;
      localStorage.setItem("token", action.payload.data.data.token);
      state.user_name = action.payload.data.data.user_name;
      state.fname = action.payload.data.data.fname;
      state.lname = action.payload.data.data.lname;
      state.email = action.payload.data.data.email;
      state.password = action.payload.data.data.password;
      state.phone = action.payload.data.data.phone;

      return state;
    });
    builder.addCase(login_instructor.pending, (state, action) => {
      state.isFetching = true;
      state.isError = false;
      return state;
    });
    builder.addCase(
      login_instructor.rejected,
      (state, { meta, payload, error }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = error.message;
        return state;
      }
    );

    builder.addCase(register_instructor.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isError = false;
      state.isFetching = false;
      localStorage.setItem("token", action.payload.data.data.token);
      state.user_name = action.payload.data.data.user_name;
      state.fname = action.payload.data.data.fname;
      state.lname = action.payload.data.data.lname;
      state.email = action.payload.data.data.email;
      state.password = action.payload.data.data.password;
      state.phone = action.payload.data.data.phone;
      state.successMsg = action.payload.data.status;

      return state;
    });
    builder.addCase(register_instructor.pending, (state) => {
      state.isFetching = true;
      state.isError = false;
      return state;
    });
    builder.addCase(
      register_instructor.rejected,
      (state, { meta, payload, error }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = error.message;
        return state;
      }
    );
  },
});
export const { clearState } = authslice.actions;
export const authSelector = (state) => state.instructor;
//https://cloudnweb.dev/2021/02/modern-react-redux-tutotials-redux-toolkit-login-user-registration/#signup-functionality
//https://github.com/ganeshmani/redux-toolkit-user-flow/blob/master/src/App.js
// //https://cloudnweb.dev/2021/02/modern-react-redux-tutotials-redux-toolkit-login-user-registration/
// //https://redux.js.org/tutorials/essentials/part-2-app-structure
// //https://www.softkraft.co/how-to-setup-slices-with-redux-toolkit/
// //https://blog.bam.tech/developer-news/4-ways-to-dispatch-actions-with-redux
// //https://react-redux.js.org/using-react-redux/connect-mapdispatch

// ///error handling
// //https://www.pluralsight.com/guides/centralized-error-handing-with-react-and-redux
// //https://alexandrempsantos.com/sane-error-handling-react-redux/
