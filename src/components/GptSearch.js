import React from "react";
import GptSearchInputBar from "./GptSearchInputBar";
import GptMovieRecommendation from "./GptMovieRecommendation";

const GptSearch = () => {
  return (
    <div
      className="h-screen w-full"
      style={{
        background:
          "url(https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg)",
      }}
    >
      <GptSearchInputBar />
      <GptMovieRecommendation />
    </div>
  );
};

export default GptSearch;
