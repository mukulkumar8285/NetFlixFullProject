import React, { useEffect } from "react";
import axios from "axios";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { GetTrailerMovie } from "../redux/MovieSlice";

const UserMovieById = async (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );
        console.log("User Movie Here", res.data.results);
        const trailer = res?.data?.results?.filter((item) => {
          return item.type === "Trailer";
        });
        dispatch(
          GetTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0])
        );
      } catch (error) {
        console.log("UserMovieById", error);
      }
    };
    getMovieById();
  }, []);
};

export default UserMovieById;
