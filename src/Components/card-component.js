import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ data }) => {
  const { snippet, id } = data;
  const { thumbnails, channelTitle, title } = snippet;
  return (
    <div className="flex flex-col w-72 m-7 p-1 shadow-lg">
      <Link to={`watch?v=${id}`}>
        <div>
          <img
            className="w-96 h-40"
            src={thumbnails?.default?.url}
            alt="video"
          ></img>
        </div>
        <div>
          <h1 className="font-bold">{channelTitle}</h1>
          <h2 className="text-sm">{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default CardComponent;
