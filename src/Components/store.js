import { configureStore } from "@reduxjs/toolkit";
import navToggleSlice from "./navtoggle-slice";

const store = configureStore({
    reducer: {
        navToggleSlice: navToggleSlice
    }
})

export default store;