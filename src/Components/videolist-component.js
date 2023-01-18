import React from "react";
import { useEffect } from "react";
import { getVideoData } from "../Services/getVideosData";
import CardComponent from "./card-component";
import { cacheVideoData } from "./videodata-slice";
import { useDispatch, useSelector } from "react-redux";

const VideoList = () => {

  const dispatch = useDispatch();
  const videodata = useSelector(store => 
    store.videoDataSlice.videodata
  )

  useEffect(() => {
    !videodata.length && getVideosData();
  }, [videodata]);

  async function getVideosData() {
    const data = await getVideoData();
    dispatch(cacheVideoData(data?.items));
  }

  return (
    <div className="flex flex-wrap">
      {videodata.map((e) => {
        return <CardComponent data={e}  key={e.etag}/>;
      })}
    </div>
  );
};

export default VideoList;
