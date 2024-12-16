import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute text-white pt-[20%] px-24 bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{description}</p>
      <div className="flex gap-2">
        <button className="bg-white text-xl  rounded-lg text-black  font-bold p-4 px-12 hover:bg-opacity-80">
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
