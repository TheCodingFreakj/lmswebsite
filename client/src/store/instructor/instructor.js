import { createSlice } from "@reduxjs/toolkit";
// Slice
//https://blog.bitsrc.io/simplifying-redux-with-redux-toolkit-6236c28cdfcb
//https://www.softkraft.co/how-to-setup-redux-with-redux-toolkit/#how-to-setup-create-react-app-with-redux
//https://redux-toolkit.js.org/introduction/getting-started
//https://www.softkraft.co/how-to-setup-slices-with-redux-toolkit/#connecting-app-to-api
const slice = createSlice({
  name: "instructor",
  initialState: {
    instructor: {},
  },
  reducers: {
    registerInstructor: (state, action) => {
      console.log(state);
      console.log(action.payload); // show the message
      //   state.instructor = action.payload; //{payload:  msg}
    },
    loginInstructorSuccess: (state, action) => {
      console.log(state);
      console.log(action.payload); //get the user and message
      //   state.instructor = action.payload; //{payload: user, msg}
    },
    logoutInstructorSuccess: (state, action) => {
      console.log(state);
      console.log(action.payload); //message
      //state.instructor = null; //{payload:  msg}
    },
    fetchInstructorprofile: (state, action) => {
      console.log(state);
      console.log(action.payload); // get the detials of the student
      //state.instructor = action.payload; //{payload:  student info}
    },
    updateInstructorprofile: (state, action) => {
      console.log(state);
      console.log(action.payload); // get the details and show and update and repost
      //state.instructor = action.payload; //{payload:  msg}
    },
    deleteInstructorprofile: (state, action) => {
      console.log(state);
      console.log(action.payload); // delete
      //.instructor = action.payload; //{payload:  msg}
    },
  },
});
export default slice.reducer;

// Actions
const {
  registerInstructor,
  loginInstructoSuccess,
  logoutInstructorSuccess,
  fetchInstructorprofile,
  updateInstructorprofile,
  deleteInstructorprofile,
} = slice.actions;
export const register_instructor = (formData) => async (dispatch) => {
  try {
    //provide the reducer typ

    dispatch(registerInstructor(formData));
    // make an axios request to the backend to post these students
    //   dispatch(registerInstructor({ student_name }));
  } catch (e) {
    return console.error(e.message);
  }
};

// export const login_instructor =
//   ({ username, password }) =>
//   async (dispatch) => {
//     try {
//       dispatch(loginSuccess({ username }));
//     } catch (e) {
//       return console.error(e.message);
//     }
//   };
// export const logout_instructor = () => async (dispatch) => {
//   try {
//     // const res = await api.post('/api/auth/logout/')
//     return dispatch(logoutSuccess());
//   } catch (e) {
//     return console.error(e.message);
//   }
// };
