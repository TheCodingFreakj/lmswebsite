import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupUser = createAsyncThunk(
  "users/signupUser",
  async (
    { email, password, phone, isInstrutor },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = axios({
        method: "post",
        url: `http://localhost:8080/api/v1/sign-up`,
        data: {
          email: email,
          password: password,
          phone: phone,
          isInstrutor: isInstrutor,
        },
      });

      return response; // Return a value synchronously using Async-await
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      const response = axios({
        method: "post",
        url: `http://localhost:8080/api/v1/sign-in`,
        data: {
          email: email,
          password: password,
        },
      });

      return response; // Return a value synchronously using Async-await
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: "",
    phone: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
    message: "",
    user: "",
    token: "",
  },
  reducers: {
    // Reducer comes here
  },

  extraReducers: {
    [signupUser.fulfilled]: (state, action) => {
      //console.log("this is action", action);
      state.isFetching = false;
      state.isSuccess = true;
      state.message = action.payload.data.message;
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      return state;
    },
    [signupUser.pending]: (state) => {
      //console.log("this is payload", state);
      state.isFetching = true;
      return state;
    },
    [signupUser.rejected]: (state, { payload }) => {
      // console.log("this is payload", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.data;
      return state;
    },

    [loginUser.fulfilled]: (state, action) => {
      // console.log("this is action", action);
      state.isFetching = false;
      state.isSuccess = true;
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      return state;
    },
    [loginUser.pending]: (state) => {
      // console.log("this is payload", state);
      state.isFetching = true;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      //console.log("this is payload", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.data;
      return state;
    },
  },
});

export const userSelector = (state) => state.user;

