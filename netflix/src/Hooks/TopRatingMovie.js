import axios from "axios";
import { TopRated_Playing_Movie, options } from "../utils/constant";
import { GetTopRatedPlayingMovie } from "../redux/MovieSlice";
import { useDispatch } from "react-redux";

const TopRatedMoviefun = async () => {
    const dispatch = useDispatch();

  try {
    const res = await axios.get(TopRated_Playing_Movie, options);
    console.log(res.data.results);
    dispatch(GetTopRatedPlayingMovie(res.data.results));
  } catch (error) {
    console.log(error);
  }
};


export default TopRatedMoviefun;