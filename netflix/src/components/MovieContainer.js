import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Moviecontainer = () => {
const movie = useSelector((state) => state.movie);
console.log(movie);

  return (
    <div className='bg-black'>
        <div className='-mt-52 relative z-10'>
        <MovieList title={"Popular Movie"} movies={movie.PopularPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movie.TopRatedPlayinMovie}/>
        <MovieList title={"Upcoming"} movies={movie.CustomPlayingMovie}/>
        <MovieList title={"Now Playing"} movies={movie.nowPlayingMovie}/>

        </div>
     
    </div>
  )
}

export default Moviecontainer