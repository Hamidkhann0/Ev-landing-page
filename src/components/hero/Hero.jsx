import React from "react";
import arrow_btn from "../../assets/arrow_btn.png";
import pausebtn from "../../assets/pause_icon.png";
import playbtn from "../../assets/play_icon.png";

const hero = ({
  herodata,
  herocount,
  setherocount,
  playstatus,
  setplaystatus,
}) => {
  return (
    <div className="m-20">
      <div className="text-white text-6xl/relaxed font-semibold ">
        <p>{herodata.text1}</p>
        <p>{herodata.text2}</p>
      </div>

      <div className="flex items-center gap-10 w-fit mb-5 mt-10 py-1 px-5 bg-white rounded-4xl cursor-pointer">
        <p className="text-gray-500 font-medium">Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>

      <div className="flex justify-between mt-30">
        <ul className="flex gap-5 items-center ml-3">
          <li
            onClick={() => setherocount(0)}
            aria-label="select slide 1"
            className={`w-3 h-3 rounded-full cursor-pointer ${
              herocount === 0 ? "bg-orange-300" : "bg-white"
            }`}
          ></li>

          <li
            onClick={() => setherocount(1)}
            aria-label="select slide 2"
            className={`w-3 h-3 rounded-full cursor-pointer ${
              herocount === 1 ? "bg-orange-300" : "bg-white"
            }`}
          ></li>

          <li
            onClick={() => setherocount(2)}
            aria-label="select slide 3"
            className={`w-3 h-3 rounded-full cursor-pointer ${
              herocount === 2 ? "bg-orange-300" : "bg-white"
            }`}
          ></li>
        </ul>

        <div className="flex items-center gap-5 cursor-pointer">
          <img
            onClick={() => {
              setplaystatus(!playstatus);
            }}
            src={playstatus ? pausebtn : playbtn}
            alt=""
          />
          <p className="text-white">See the video</p>
        </div>
      </div>
    </div>
  );
};

export default hero;
