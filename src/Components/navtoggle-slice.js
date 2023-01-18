import { createSlice } from "@reduxjs/toolkit";

const navToggleSlice = createSlice({
  name: "navslice",
  initialState: {
    toggleNav: true
  },
  reducers: {
    toggleNav: (state) => {
      state.toggleNav = !state.toggleNav;
    },
    hideNav: (state) => {
      state.toggleNav = false;
    }
  },
});
export const { toggleNav, hideNav } = navToggleSlice.actions;
export default navToggleSlice.reducer;
