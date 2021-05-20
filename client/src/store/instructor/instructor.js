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
      if (action.payload.data.status === "success") {
        localStorage.setItem("token", action.payload.data.data.token);
        state.user_name = action.payload.data.data.user_name;
        state.fname = action.payload.data.data.fname;
        state.lname = action.payload.data.data.lname;
        state.email = action.payload.data.data.email;
        state.password = action.payload.data.data.password;
        state.phone = action.payload.data.data.phone;
      }
      return state;
    });
    builder.addCase(login_instructor.pending, (state, action) => {
      state.isFetching = true;
      state.isError = false;
      return state;
    });
    builder.addCase(login_instructor.rejected, (state, action) => {
      //const { requestId } = action.meta.arg;
      console.log("this is hitting");
      console.log(action);
      // if (state.requestStatus === "rejected") {
      //   state.isFetching = false;
      //   state.isError = true;
      //   state.currentRequestId = requestId;
      //   return state;
      // }
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
