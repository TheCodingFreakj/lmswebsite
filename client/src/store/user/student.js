// import { createSlice } from "@reduxjs/toolkit";
// // Slice
// //https://blog.bitsrc.io/simplifying-redux-with-redux-toolkit-6236c28cdfcb
// //https://www.softkraft.co/how-to-setup-redux-with-redux-toolkit/#how-to-setup-create-react-app-with-redux
// //https://redux-toolkit.js.org/introduction/getting-started
// const slice = createSlice({
//   name: "student",
//   initialState: {
//     student: null,
//   },
//   reducers: {
//     registerStudent: (state, action) => {
//       console.log(state);
//       console.log(action.payload); // show the message
//       state.student = action.payload; //{payload:  msg}
//     },
//     loginStudentSuccess: (state, action) => {
//       console.log(state);
//       console.log(action.payload); //get the user and message
//       state.student = action.payload; //{payload: user, msg}
//     },
//     logoutStudentSuccess: (state, action) => {
//       console.log(state);
//       console.log(action.payload); //message
//       state.student = null; //{payload:  msg}
//     },
//     fetchStudentprofile: (state, action) => {
//       console.log(state);
//       console.log(action.payload); // get the detials of the student
//       state.student = action.payload; //{payload:  student info}
//     },
//     updateStudentprofile: (state, action) => {
//       console.log(state);
//       console.log(action.payload); // get the details and show and update and repost
//       state.student = action.payload; //{payload:  msg}
//     },
//     deleteStudentprofile: (state, action) => {
//       console.log(state);
//       console.log(action.payload); // delete
//       state.student = action.payload; //{payload:  msg}
//     },
//   },
// });
// export default slice.reducer;

// // Actions
// const {
//   registerStudent,
//   loginStudentSuccess,
//   logoutStudentSuccess,
//   fetchStudentprofile,
//   updateStudentprofile,
//   deleteStudentprofile,
// } = slice.actions;
// export const register =
//   ({ student_name, password, fname, lname, phone, email }) =>
//   async (dispatch) => {
//     try {
//       // make an axios request to the backend to post these students
//       dispatch(register({ student_name }));
//     } catch (e) {
//       return console.error(e.message);
//     }
//   };

// export const login =
//   ({ username, password }) =>
//   async (dispatch) => {
//     try {
//       dispatch(loginSuccess({ username }));
//     } catch (e) {
//       return console.error(e.message);
//     }
//   };
// export const logout = () => async (dispatch) => {
//   try {
//     // const res = await api.post('/api/auth/logout/')
//     return dispatch(logoutSuccess());
//   } catch (e) {
//     return console.error(e.message);
//   }
// };
