import axios from "axios";
import React, { useState } from "react";
import { TMDB_MovieUrl, options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { GetSearchState } from "../redux/SearchSlice";
import { setLoading } from "../redux/userSlice";
import MovieList from "./MovieList";

const SearchMovie = () => {
  const isloading = useSelector((state) => state.app.isloading);
  const {MovieName ,searchedMovie } = useSelector((state) => state.searchMovies);
  const [searchMovie, setSearchMovie] = useState("");
  // const [MovieData, setMovieData] = useState([]);
  const dispatch = useDispatch();

  const SubmitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      console.log(res.data.results);
      const movies = res?.data?.results;
      dispatch(GetSearchState({ searchMovie, movies }));
      // setMovieData(res.data.results);
    } catch (error) {
      console.log("Error", error);
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  };

  //
  return (
    <div className="bg-black h-[100%] ">
      <div className="flex justify-center pt-[10%] w-[100%]">
        <form onSubmit={SubmitHandler} className="w-[50%]">
          <div className="flex justify-center shadow-md border-2 border-gray-200 rounded-md w-[100%]">
            <input
              className="w-full outline-none text-lg p-2"
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
              type="text"
              placeholder="Search Movie..."
            />
            <button className="bg-red-800 px-4 py-2 rounded-md text-white">
              {isloading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>
      <div className="flex overflow-x-auto no-scrollbar ">
      <MovieList title={MovieName} searchMovie={true} movies={searchedMovie}/>
      </div>
    </div>
  );
};

export default SearchMovie;
