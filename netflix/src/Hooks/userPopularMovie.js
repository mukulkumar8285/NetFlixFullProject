import axios from "axios";
import { Popular_Playing_Movie, options } from "../utils/constant";
import { GetPopularPlayingMovie } from "../redux/MovieSlice";
import { useDispatch } from "react-redux";

const PopularPlayingMovieFun = async () => {
    const dispatch = useDispatch();

  try {
    const res = await axios.get(Popular_Playing_Movie, options);
    console.log(res.data.results);
    dispatch(GetPopularPlayingMovie(res.data.results));
  } catch (error) {
    console.log(error);
  }
};


export default PopularPlayingMovieFun;