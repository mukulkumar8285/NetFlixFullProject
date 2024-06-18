import React from "react";
import UserMovieById from "../Hooks/UserMovieById";

import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerMovie = useSelector((state) => state.movie.trailerMovie);
  console.log("Title Movie", trailerMovie);
  UserMovieById(movieId);
  console.log("userMovieId ", movieId);

  return (
    <div className="w-[vw] overflow-hidden">
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
        title="YouTube video player"
        frameborder="0"
        
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
