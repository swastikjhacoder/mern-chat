import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: JSON.parse(localStorage.getItem("darkMode")) || false,
  loggedIn: JSON.parse(localStorage.getItem("liveChatLoggedIn")) || false,
  userInfo: null,
  background: JSON.parse(localStorage.getItem("backgroundColor")) || "#fff",
};

export const liveChatSlice = createSlice({
  name: "liveChat",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = !state.mode;
      if (!state.mode) {
        state.background = "#fff";
      } else {
        state.background = "#081b29";
      }
      localStorage.setItem("darkMode", JSON.stringify(state.mode));
      localStorage.setItem("backgroundColor", JSON.stringify(state.background));
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { toggleDarkMode, toggleLoggedIn, addUser, removeUser } =
  liveChatSlice.actions;
export default liveChatSlice.reducer;
