import React from "react";

import { software } from "../Data.jsx";

import softwareImg from "./img/softwareImg.png";

export default function Software() {
  return (
    <div className="">
      <div className="flex  md:flex-row sm:flex-col justify-around  gap-8">
        <div className=" md:w-1/2  rounded-lg">
          <div
            className=" grid grid-cols-2 gap-5 h-full justify-center rounded-lg item-center "
            style={{ fontFamily: "Gilroy-Bold" }}
          >
            <button className="relative  flex flex-col justify-center items-center border-2 p-3 gap-2 bg-custom_bluelight rounded-lg md:h-full ">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={software[0].img} className="w-2/5" />
              <h1 className="text-sm">{software[0].title}</h1>
            </button>
            <button className=" relative flex flex-col justify-center items-center border-2 p-3 gap-2  bg-custom_bluelight rounded-lg md:h-full">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={software[1].img} className="w-2/5" />
              <h1 className="text-sm">{software[1].title} </h1>
            </button>
            <button className="relative flex flex-col justify-center items-center border-2 p-3 gap-2  bg-custom_bluelight rounded-lg md:h-full">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={software[2].img} className="w-2/5" />
              <h1 className="text-sm">{software[2].title}</h1>
            </button>
            <button className="relative flex flex-col justify-center items-center border-2 p-3 gap-2  bg-custom_bluelight rounded-lg md:h-full">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={software[3].img} className="w-2/5" />
              <h1 className="text-sm">{software[3].title}</h1>
            </button>
            <button className="relative flex flex-col justify-center items-center border-2 p-3 gap-2  bg-custom_bluelight rounded-lg md:h-full">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={software[4].img} className="w-2/5" />
              <h1 className="text-sm">{software[4].title}</h1>
            </button>
            <button className="relative flex flex-col justify-center items-center border-2 p-3 gap-2  bg-custom_bluelight rounded-lg md:h-full">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={software[5].img} className="w-2/5" />
              <h1 className="text-sm">{software[5].title}</h1>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 lg:p-20 md:p-10 sm:p-5 bg-custom_blue rounded-lg">
          <h1 className="text-white md:text-3xl">
            Your desired tech to develop your digital venture effectively.
          </h1>
        </div>
      </div>
    </div>
  );
}
