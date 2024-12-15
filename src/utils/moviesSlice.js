import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPopularMovies: null,
    nowPlayingMovieTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },

    addMovieTrailer: (state, action) => {
      state.nowPlayingMovieTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieTrailer, addPopularMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;
