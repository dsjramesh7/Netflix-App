import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{description}</p>
      <div className="flex gap-2">
        <button className="bg-gray-500 text-xl bg-opacity-50 rounded-lg text-white font-bold p-4 px-12">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-xl bg-opacity-50 rounded-lg text-white font-bold p-4 px-12">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
