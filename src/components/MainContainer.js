import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // console.log(movies);

  if (movies === null) return;

  const randomNumberGenerator = () => {
    return Math.floor(Math.random() * movies.length);
  };

  const mainMovies = movies[randomNumberGenerator()];
  // console.log(mainMovies);

  const { original_title, overview, id } = mainMovies;
  return (
    <div className="hidden sm:block">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieId={id} title={original_title} />
    </div>
  );
};

export default MainContainer;
