import React from "react";

const VideoContainer = () => {
  return (
    <div className="col-span-10">
      <iframe
        width="1000"
        height="500"
        src="https://www.youtube.com/embed/ehkh9pk6GNg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
