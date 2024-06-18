import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import MovieReducer from "./MovieSlice";
import SearchReducer from "./SearchSlice";

const store = configureStore({
  reducer: {
    app: userReducer,
    movie: MovieReducer,
    searchMovies: SearchReducer,
  },
});

export default store;
