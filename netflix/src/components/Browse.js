import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainList";
import Moviecontainer from "./MovieContainer";
import NowuserPlayingMovies from "../Hooks/userNewPlayingMovies";
import PopularPlayingMovieFun from "../Hooks/userPopularMovie";
import TopRatedMoviefun from "../Hooks/TopRatingMovie";
import UpcominPlayingMovies from "../Hooks/CustomMovies";
import SearchMovie from "./SearchMovie";

const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const Navigate = useNavigate();

  //My custom Hooks
  NowuserPlayingMovies();
  PopularPlayingMovieFun();
  TopRatedMoviefun();
  UpcominPlayingMovies();

  useEffect(() => {
    if (!user) {
      Navigate("/");
    }
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        {
          toggle ? <SearchMovie/> : <>(<MainContainer /><Moviecontainer />)</>
        }
        
      </div>
    </div>
  );
};

export default Browse;
