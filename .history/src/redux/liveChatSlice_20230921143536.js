import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: JSON.parse(localStorage.getItem("darkMode")) || false,
  loggedIn: JSON.parse(localStorage.getItem("liveChatLoggedIn")) || false,
  userInfo: null,
};

export const liveChatSlice = createSlice({
  name: "liveChat",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = !state.mode;
      localStorage.setItem("darkMode", JSON.stringify(state.mode));
    },
    toggleLoggedIn: (state) => {
      state.loggedIn = !state.mode;
      localStorage.setItem("darkMode", JSON.stringify(state.mode));
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { toggleDarkMode, addUser, removeUser } = liveChatSlice.actions;
export default liveChatSlice.reducer;
