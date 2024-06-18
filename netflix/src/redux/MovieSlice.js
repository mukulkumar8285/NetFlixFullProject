import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "MovieSlice",
  initialState: {
    nowPlayingMovie: null,
    PopularPlayingMovies: null,
    TopRatedPlayinMovie: null,
    CustomPlayingMovie: null,
    toggle: false,
    trailerMovie: null,
    isOpen: false,
    id: "",
  },
  reducers: {
    GetNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    GetPopularPlayingMovie: (state, action) => {
      state.PopularPlayingMovies = action.payload;
    },
    GetTopRatedPlayingMovie: (state, action) => {
      state.TopRatedPlayinMovie = action.payload;
    },
    GetUpcominPlayingMovie: (state, action) => {
      state.CustomPlayingMovie = action.payload;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
    GetTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
    SetOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    getId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const {
  GetNowPlayingMovie,
  GetPopularPlayingMovie,
  GetTopRatedPlayingMovie,
  GetUpcominPlayingMovie,
  setToggle,
  GetTrailerMovie,
  SetOpen,
  getId,
} = MovieSlice.actions;

export default MovieSlice.reducer;
