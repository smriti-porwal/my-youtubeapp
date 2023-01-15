import React from "react";
import { useEffect, useState } from "react";
import { getVideoData } from "../Services/getVideosData";
import CardComponent from "./card-component";

const VideoList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getVideosData();
  }, []);
  async function getVideosData() {
    const data = await getVideoData();
    console.log(data);
    setData(data?.items);
  }
  return (
    <div className="flex flex-wrap">
      {data.map((e) => {
        return <CardComponent data={e}  key={e.etag}/>;
      })}
    </div>
  );
};

export default VideoList;
