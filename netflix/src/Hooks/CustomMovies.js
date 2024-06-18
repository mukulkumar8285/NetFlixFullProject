import axios from "axios";
import { Upcoming_Playing_Movie, options } from "../utils/constant";
import { GetUpcominPlayingMovie } from "../redux/MovieSlice";
import { useDispatch } from "react-redux";

const UpcominPlayingMovies = async () => {
  const dispatch = useDispatch();

  try {
    const res = await axios.get(Upcoming_Playing_Movie, options);
    console.log(res.data.results);
    dispatch(GetUpcominPlayingMovie(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export default UpcominPlayingMovies;
