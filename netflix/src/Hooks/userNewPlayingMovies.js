import axios from "axios";
import { Now_Playing_Movie, options } from "../utils/constant";
import { GetNowPlayingMovie } from "../redux/MovieSlice";
import { useDispatch } from "react-redux";

const NowuserPlayingMovies = async () => {
    const dispatch = useDispatch();

  try {
    const res = await axios.get(Now_Playing_Movie, options);
    console.log(res.data.results);
    dispatch(GetNowPlayingMovie(res.data.results));
  } catch (error) {
    console.log(error);
  }
};


export default NowuserPlayingMovies;