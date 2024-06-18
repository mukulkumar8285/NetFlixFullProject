import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    MovieName: null,
    searchedMovie: null,
  },
  reducers: {
    GetSearchState: (state, action) => {
      state.MovieName = action.payload.searchMovie;
      state.searchedMovie = action.payload.movies;
    },
  },
});

export const { GetSearchState } = SearchSlice.actions;

export default SearchSlice.reducer;
