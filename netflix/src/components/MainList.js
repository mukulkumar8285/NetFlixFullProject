import React, { useState } from "react";
import VideoTiltle from "./VideoTiltle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovie);
  // const [count , setcount] = useState(4);
  if (!movie) return;
  console.log(movie);
  // setInterval(()=>{
    // setcount(count+1)
  // } , 10000)
  // if(movie.length < count){
  //   setcount(0);
  // }
  const { overview, id, title } = movie[4] || {};

  return (
    <div>
      <VideoTiltle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
