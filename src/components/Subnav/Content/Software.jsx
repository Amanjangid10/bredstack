import React from "react";

import { software, front } from "../Data.jsx";

import softwareImg from "./img/softwareImg.png";
import CustomButton from "../../CustomComponents/CustomButton.jsx";

export default function Software() {
  return (
    <div className="flex md:flex-row sm:flex-col justify-around  gap-5 ">
      <div className="flex md:w-1/2 flex-col justify-around gap-1 sm:w-full">
        <div className="flex gap-1">
          <div className="relative flex flex-col gap-2 p-2  w-1/2  border-2 border-gray-100  rounded-lg">
            <input
              type="checkbox"
              className="absolute top-2 right-2  z-100 opacity-50"
            />
            <img src={software[0].img} alt="tech1" className="w-10" />
            <div className="text-left">
              <p className="text-xs">{software[0].title}</p>
            </div>
          </div>
          <div className="flex  flex-col justify-between gap-1 w-1/2 ">
            <div className="relative flex items-center  md:h-1/2 md:w-full  sm:flex-col md:flex-row p-2   gap-2 border-2 border-gray-100  rounded-lg">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={software[1].img} alt="tech1" className="h-8 w-fit" />
              <div className="text-left">
                <p className="text-xs">{software[1].title} </p>
              </div>
            </div>
            <div className="relative flex items-center  md:h-1/2 md:w-full   sm:flex-col md:flex-row  p-2 gap-2 border-2 border-gray-100  rounded-lg">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={software[2].img} alt="tech1" className="h-8 w-fit" />
              <div className="text-left">
                <p className="text-xs">{software[2].title}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="flex flex-col  justify-between gap-1 w-1/2  ">
            <div className="relative flex items-center md:h-1/2  md:w-full  md:flex-row sm:flex-col  p-2 gap-2 border-2 border-gray-100  rounded-lg">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={software[4].img} alt="tech1" className="h-10 w-fit" />
              <div className="text-left">
                <p className="text-xs ">{software[4].title}</p>
              </div>
            </div>

            <div className="relative flex items-center md:h-1/2 md:w-full  md:flex-row sm:flex-col  p-2 gap-2 border-2 border-gray-100  rounded-lg">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={software[0].img} alt="tech1" className="w-10" />
              <div className="text-left">
                <p className="text-xs">{software[0].title}</p>
              </div>
            </div>
          </div>
          <div className="relative flex  flex-col w-1/2 p-2 gap-2 border-2 border-gray-100  rounded-lg">
            <input
              type="checkbox"
              className="absolute top-2 right-2  z-100 opacity-50"
            />
            <img src={software[3].img} alt="tech1" className="w-12" />
            <div className="text-left">
              <p className="text-xs">{software[3].title}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <CustomButton label={"Continue"} />
        </div>
      </div>
      <div className="md:w-1/2 lg:p-20 md:p-10 sm:p-5 bg-custom_blue rounded-lg">
        <h1 className="text-white md:text-3xl">
          Your desired tech to develop your digital venture effectively.
        </h1>
      </div>
    </div>
  );
}
