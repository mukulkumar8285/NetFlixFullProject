import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTiltle = ({title , overview}) => {
  return (
    <div className="w-[vw] aspect-video absolute pt-[18%] text-white p-12">
      <h1 className="text-3xl font-bold mt-4">{title}</h1>
      <p className="w-[30%] mt-4">
        {overview}
      </p>
      <div className="flex mt-8">
        <button className="px-6 py-2 bg-white rounded-md text-black hover:bg-opacity-70 flex items-center">
          <FaPlay />
          <span className="ml-1 ">Play</span>
        </button>
        <button className="mx-2 px-6 py-2  rounded-md text-black bg-red-800 hover:bg-opacity-70 flex items-center">
            <IoInformationCircleOutline size="22px"/>
          <span className="ml-1 ">Watch More</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTiltle;
