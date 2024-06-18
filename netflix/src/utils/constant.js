const ApiEndPoint = "https://net-flix-full-project.vercel.app/api/v1/user";
// const ApiEndPoint = `${window.location.origin}/api/v1/user`;


const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDg0MWE0MDE0OWM0ZWQ3MGQ3ZTk2MDgyYTgyMGNkYiIsInN1YiI6IjY2NmVjM2MwOGVjMDM0Y2IyNTQ3Y2UyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YDB9gQrKFD4OzYzcYg59xqbVk8KwpN6T2_kHta3dxoI",
  },
};

const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
const Popular_Playing_Movie = "https://api.themoviedb.org/3/movie/popular";
const TopRated_Playing_Movie = "https://api.themoviedb.org/3/movie/top_rated";
const Upcoming_Playing_Movie = "https://api.themoviedb.org/3/movie/upcoming";


const TMDB_MovieUrl = "https://image.tmdb.org/t/p/w500";

module.exports = {
  ApiEndPoint,
  options,
  Now_Playing_Movie,
  Popular_Playing_Movie,
  TopRated_Playing_Movie,
  Upcoming_Playing_Movie,
  TMDB_MovieUrl,
  
};
