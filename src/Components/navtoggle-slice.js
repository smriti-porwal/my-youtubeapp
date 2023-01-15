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
  },
});
export const { toggleNav } = navToggleSlice.actions;
export default navToggleSlice.reducer;
