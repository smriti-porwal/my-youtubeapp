import React from "react";
import { useSearchParams } from 'react-router-dom';

const VideoContainer = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("v");
    const src = `https://www.youtube.com/embed/${id}`;
  return (
    <div className="col-span-10">
      <iframe
        width="1000"
        height="500"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
