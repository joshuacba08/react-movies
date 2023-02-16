import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: {
      avatar:"",
      email: "",
      fname: "",
      id: "",
      lname: "",
      password: "",
    },
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem('user');
      state.isAuthenticated = false;
      state.user = {
        avatar:"",
        email: "",
        fname: "",
        id: "",
        lname: "",
        password: "",
      }
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
