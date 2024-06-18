import React from "react";
import { TMDB_MovieUrl } from "../utils/constant";
import { useDispatch } from "react-redux";
import { SetOpen, getId } from "../redux/MovieSlice";

const MovieCard = ({ Poster_Path, movieId }) => {
  const dispatch = useDispatch();
  if (Poster_Path === null) return null;

  const handlerOpen = () => {
    dispatch(getId(movieId));
    dispatch(SetOpen(true));
    console.log("click movie");
  };

  return (
    <div className="w-48 pr-2" onClick={handlerOpen}>
      <img src={`${TMDB_MovieUrl}/${Poster_Path}`} alt="Movie_Poster" />
    </div>
  );
};

export default MovieCard;
