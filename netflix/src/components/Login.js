import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { ApiEndPoint } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";



const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((store)=> store.app.isLoading);

  const loginhandler = () => {
    setIsLogin(!isLogin);
  };

  const getinputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    if (isLogin) {
      //login
      const user = { email, password };

      try {
        
        const res = await axios.post("/api/v1/user/login", user,{
          headers:{
            "Content-Type" : 'application/json'
          },
          withCredentials:true,
        });
      
        if (res.data.success) {
          console.log(res);
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user))
        Navigate("/browse");
        console.log(res.data);
      }  catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || 'An error occurred');
      } else if (error.request) {
        toast.error('No response from server. Please try again later.');
      } else {
        toast.error('An unexpected error occurred.');
      }
      console.error(error);
    } 
      finally{
        dispatch(setLoading(false))
      }
    } else {
      //Register
      dispatch(setLoading(true))
      const user = { fullName, email, password };

      try {
        const res = await axios.post("/api/v1/user/register", user ,{
          headers:{
            "Content-Type" : 'application/json'
          },
          withCredentials:true,
        });
        console.log(ApiEndPoint);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
        console.log(res);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
      finally{
        dispatch(setLoading(false))
      }
    }

    setFullName("");
    setpassword("");
    setemail("");
  };
  return (
    <div>
      <Header />
      <div className="w-full absolute">
        <img
          className="bg-cover z-1 w-[100vw] h-[100vh]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Image_me"
        />
      </div>
      <form
        onSubmit={getinputData}
        className="flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute bg-black opacity-85"
      >
        <h1 className="text-3xl text-white mb-5 font-bold">
          {isLogin ? "Login" : "Signup"}
        </h1>

        <div className="flex flex-col">
          {/* <label className="text-white"> Full Name</label> */}
          {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Name"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            />
          )}

          {/* <label className="text-white"> email</label> */}
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Email"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
          {/* <label className="text-white"> Password</label> */}
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
          <button className="bg-red-800 text-white px-4 py-2 mt-4 mb-3">
            {!isLogin ? "Signup" : "Login"}
          </button>
          <p className="text-white">
            {isLogin ? "New to Netflix?" : "Already have an account?"}
            <span
              onClick={loginhandler}
              className="ml-3 font-large"
              style={{ color: "blue" }}
            >
              {`${isLoading ? "Loading..." : (isLogin ? "Signup" : "Login" )}`}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
