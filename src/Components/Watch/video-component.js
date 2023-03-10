import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideNav } from "../navtoggle-slice";
import LivechatComponent from "./livechat-component";
import VideoContainer from "./video-container";
import CommentSectionComponent from "./comments-section";

const VideoComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideNav());
  }, []);
  return (
    <div className="col-span-11 m-4 p-4">
      <div className="grid grid-flow-col grid-cols-12">
        <VideoContainer />
        <LivechatComponent />
      </div>
      <div>
        <CommentSectionComponent />
      </div>
    </div>
  );
};

export default VideoComponent;
