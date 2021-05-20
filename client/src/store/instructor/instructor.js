import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Slice
//https://blog.bitsrc.io/simplifying-redux-with-redux-toolkit-6236c28cdfcb
//https://www.softkraft.co/how-to-setup-redux-with-redux-toolkit/#how-to-setup-create-react-app-with-redux
//https://redux-toolkit.js.org/introduction/getting-started
//https://www.softkraft.co/how-to-setup-slices-with-redux-toolkit/#connecting-app-to-api

/******************LOGIN***********/

export const login_instructor = createAsyncThunk(
  "instructor/loginInstructorSuccess",
  async ({ user_name, password, isInstrutor }, thunkAPI) => {
    try {
      const options = {
        headers: {
          Accept: "application/json",
        },
      };

      const response = axios({
        method: "post",
        url: "http://localhost:3001/api/v1/signin",
        data: { user_name, password, isInstrutor },
        options,
      });

      console.log(response);
      // let res = "";
      // response.then((resolve) => {
      //   res = resolve.data;
      //   if (res.status === "success") {
      //     localStorage.setItem("token", res.data.token);
      //     return {
      //       ...res.data,
      //       user_name: res.data.user_name,
      //       password: res.data.password,
      //     };
      //   } else {
      //     return thunkAPI.rejectWithValue(res.data);
      //   }
      // });
    } catch (e) {
      console.error(e.response.data);
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
  },
  //Will handle the action type `'instructor/loginInstructorSuccess'
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login_instructor.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isError = false;
      state.isFetching = false;
      console.log(action.payload);
    });
    builder.addCase(login_instructor.pending, (state, action) => {
      state.isFetching = true;
      state.isError = false;
      console.log(action.payload);
    });
    builder.addCase(login_instructor.rejected, (state, action) => {
      state.isError = true;
      state.isFetching = false;
      console.log(action.payload);
    });
  },
});
export const authSelector = (state) => state.instructor;
// export const register_instructor =
//   ({ user_name, password, fname, lname, phone, isInstrutor }) =>
//   async (dispatch) => {
//     try {
//       const options = {
//         headers: {
//           Accept: "application/json",
//           // "Access-Control-Allow-Origin": "*",
//           // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//         },
//       };
//       axios({
//         method: "post",
//         url: "http://localhost:3001/api/v1/signup",
//         data: { user_name, password, fname, lname, phone, isInstrutor },
//         options,
//       }).then((response) => {
//         console.log(`statusCode: ${response.statusCode}`);
//         console.log(response.data);
//         dispatch(registerInstructorSuccess(response.data));
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

// export const get_all_instructors = () => async (dispatch) => {
//   try {
//     axios({
//       method: "get",
//       url: "http://localhost:3001/api/v1/get-all-instructors",
//     }).then((response) => {
//       console.log(`statusCode: ${response.statusCode}`);
//       console.log(response.data);
//       dispatch(getinstructors(response.data));
//     });
//   } catch (error) {
//     if (error.response) {
//       //The response status is an error code
//       console.log(
//         "The response status is an error code",
//         error.response.status
//       );
//     } else if (error.request) {
//       //Response not received though the request was sent
//       console.log(
//         "Response not received though the request was sent",
//         error.request
//       );
//     } else {
//       //An error occurred when setting up the request
//       console.log(
//         "An error occurred when setting up the request",
//         error.message
//       );
//     }
//   }
// };
// //https://cloudnweb.dev/2021/02/modern-react-redux-tutotials-redux-toolkit-login-user-registration/
// //https://redux.js.org/tutorials/essentials/part-2-app-structure
// //https://www.softkraft.co/how-to-setup-slices-with-redux-toolkit/
// //https://blog.bam.tech/developer-news/4-ways-to-dispatch-actions-with-redux
// //https://react-redux.js.org/using-react-redux/connect-mapdispatch

// ///error handling
// //https://www.pluralsight.com/guides/centralized-error-handing-with-react-and-redux
// //https://alexandrempsantos.com/sane-error-handling-react-redux/
