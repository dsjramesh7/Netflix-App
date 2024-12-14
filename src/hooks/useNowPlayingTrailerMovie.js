import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingTrailerMovie = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const jsonData = await response.json();
    // console.log(jsonData);

    const filteredData = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    // console.log(filteredData);
    const getTrailer = filteredData.length
      ? filteredData[0]
      : jsonData.results[0];

    // console.log(getTrailer.key);
    // setTrailer(getTrailer.key); haam zindagi lol

    // now mentos zindagi ...
    dispatch(addMovieTrailer(getTrailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useNowPlayingTrailerMovie;
