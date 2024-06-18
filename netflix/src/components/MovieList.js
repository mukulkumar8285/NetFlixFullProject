import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies,searchMovie }) => {
  // Default value for movies
  return (
    <div className="p-8">
      <h1 className="text-3xl py-3 text-white">{title}</h1>
      <div className="flex overflow-x-auto cursor-pointer no-scrollbar">
        <div className={`${searchMovie ? "flex-wrap flex  gap-4" : "flex"}`} items-center>
          {movies && movies.map((movie) => (
            <MovieCard key={movie.id} movieId={movie.id} Poster_Path={movie.poster_path} /> // Pass movie prop to MovieCard
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
