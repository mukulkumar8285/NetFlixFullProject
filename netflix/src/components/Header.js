import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ApiEndPoint } from "../utils/constant";
import { useLocation , useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setUser } from "../redux/userSlice";
import { GetHeader ,  setToggle } from "../redux/MovieSlice";


const Header = () => {
  const store = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
 const store = useSelector((store) => store.movie.HeaderShow);
const [userName , SetUserName] = useState(null);

  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
 
  useEffect(() => {
    if (user) {
    saveToLocalStorage('NameData', user);
    }
  }, [!user]);
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('NameData'));
    if (storedUserData) {
      SetUserName(storedUserData.fullName); // Set fullName from localStorage to state
      console.log("i am runung")
      console.log(storedUserData?.fullName)
    }
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Location = useLocation();

  
  const logouthandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("https://net-flix-full-project.vercel.app/api/v1/user/logout", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(res);
      if (res.data.success) {
        console.log(res);
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
      console.log(res.data);
      localStorage.removeItem("token");
      localStorage.removeItem("NameData");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("logout error", error);
    }
  };

  const SearchToggle = ()=>{
    dispatch(setToggle())
    if(toggle== false){
      navigate("/browse")
    }
  }
   if(Location.pathname === "/"){
    dispatch(GetHeader(false));
  }else{
    dispatch(GetHeader(true));
  }
  return (
    <div className="absolute z-10 flex w-[100%] items-center justify-between px-6 bg-gradient-to-b from-black">
      <img
        className="w-56"
        src="https://freevector.co/wp-content/uploads/2009/01/netflix-2.png"
        alt="netflix-log"
      />
      {store && (
        <div className="flex items-center">
          <IoIosArrowDropdown size={"24px"} className="text-white" />
          <h1 className="text-lg font-bold text-white">{userName || user?.fullName}</h1>
          <div className="ml-4">
            <button
              onClick={logouthandler}
              className="bg-red-800 text-white px-4 py-2 rounded-md"
            >
              Logout
            </button>
            <button onClick={SearchToggle} className="bg-red-800 text-white px-4 py-2 ml-2 rounded-md">
              {
                toggle ?  "Home" : "Search Movie" 
              }
             
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
