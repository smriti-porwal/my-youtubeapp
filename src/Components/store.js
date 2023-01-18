import { configureStore } from "@reduxjs/toolkit";
import navToggleSlice from "./navtoggle-slice";
import videodataSlice from "./videodata-slice";

const store = configureStore({
    reducer: {
        navToggleSlice: navToggleSlice,
        videoDataSlice: videodataSlice
    }
})

export default store;