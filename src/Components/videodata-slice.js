import { createSlice } from "@reduxjs/toolkit";

const VideoDataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    videodata: [],
  },
  reducers: {
    cacheVideoData: (state, action) => {
      state.videodata = action.payload;
    },
  },
});
export const { cacheVideoData } = VideoDataSlice.actions;
export default VideoDataSlice.reducer;
