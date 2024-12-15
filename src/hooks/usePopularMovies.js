import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  //fetch data from tmdb api and update it to the store
  const getMoviesData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    // console.log(response);
    const json = await response.json();
    // console.log(json);
    const movieData = json.results;
    // console.log("ppopi", movieData);

    dispatch(addPopularMovies(movieData));
  };

  useEffect(() => {
    getMoviesData();
  }, []);
};

export default usePopularMovies;
