import React from "react";

import { app } from "../Data.jsx";

import appImg from "./img/appImg.png";
import CustomButton from "../../CustomComponents/CustomButton.jsx";

export default function AppDev() {
  return (
    <div className="flex flex-col justify-around  gap-8">
      <div className="flex md:flex-row sm:flex-col justify-around gap-2 w-full">
        <div className="relative flex flex-col md:md:w-1/5 p-2  md:w-1/5  border-2 border-gray-100  rounded-lg">
          <input
            type="checkbox"
            className="absolute top-2 right-2  z-100 opacity-50"
          />
          <img src={app[0].img} alt="tech1" className="w-10" />
          <div className="text-left">
            <p style={{ fontFamily: "Gilroy-Bold" }}>{app[0].title}</p>
          </div>
        </div>
        <div className="flex  md:flex-col justify-between gap-2 md:w-1/5 ">
          <div className="relative flex  md:h-1/2 md:w-full sm:w-1/2 sm:flex-col md:flex-row p-2   gap-2 border-2 border-gray-100  rounded-lg">
            <input
              type="checkbox"
              className="absolute top-2 right-2  z-100 opacity-50"
            />
            <img src={app[1].img} alt="tech1" className="h-8 w-fit" />
            <div className="text-left">
              <p className="font-bold">{app[1].title}</p>
            </div>
          </div>
          <div className="relative flex md:h-1/2 md:w-full sm:w-1/2  sm:flex-col md:flex-row  p-2 gap-2 border-2 border-gray-100  rounded-lg">
            <input
              type="checkbox"
              className="absolute top-2 right-2  z-100 opacity-50"
            />
            <img src={app[2].img} alt="tech1" className="h-8 w-fit" />
            <div className="text-left">
              <p className="font-bold">{app[2].title}</p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col md:w-1/5 p-2 gap-2  border-2 border-gray-100  rounded-lg">
          <input
            type="checkbox"
            className="absolute top-2 right-2  z-100 opacity-50"
          />
          <img src={app[0].img} alt="tech1" className="w-10" />
          <div className="text-left">
            <p style={{ fontFamily: "Gilroy-Bold" }}>{app[0].title}</p>
          </div>
        </div>

        <div className="flex md:flex-col sm:flex-row justify-between gap-2  md:w-1/5  ">
          <div className="relative flex md:h-1/2  md:w-full sm:w-1/2 md:flex-row sm:flex-col  p-2 gap-2 border-2 border-gray-100  rounded-lg">
            <input
              type="checkbox"
              className="absolute top-2 right-2  z-100 opacity-50"
            />
            <img src={app[2].img} alt="tech1" className="h-10 w-fit" />
            <div className="text-left">
              <p style={{ fontFamily: "Gilroy-Bold" }}>{app[2].title}</p>
            </div>
          </div>

          <div className="relative flex md:h-1/2 md:w-full sm:w-1/2 md:flex-row sm:flex-col  p-2 gap-2 border-2 border-gray-100  rounded-lg">
            <input
              type="checkbox"
              className="absolute top-2 right-2  z-100 opacity-50"
            />
            <img src={app[0].img} alt="tech1" className="w-12" />
            <div className="text-left">
              <p style={{ fontFamily: "Gilroy-Bold" }}>{app[0].title}</p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col md:w-1/5  p-2 gap-2 border-2 border-gray-100  rounded-lg">
          <input
            type="checkbox"
            className="absolute top-2 right-2  z-100 opacity-50"
          />
          <img src={app[1].img} alt="tech1" className="w-12" />
          <div className="text-left">
            <p style={{ fontFamily: "Gilroy-Bold" }}>{app[1].title}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div>
          <CustomButton label={"Continue"} />
        </div>
        <div className=" lg:p-20 md:p-10 sm:p-5 bg-custom_blue rounded-lg">
          <h1 className="text-white md:text-3xl">
            Your desired tech to develop your digital venture effectively.
          </h1>
        </div>
      </div>
    </div>
  );
}
