import React from "react";

import { app } from "../Data.jsx";

import appImg from "./img/appImg.png";

export default function AppDev() {
  return (
    <div className="">
      <div className="flex  md:flex-row sm:flex-col justify-around  gap-8">
        <div className=" md:w-1/2  rounded-lg">
          <div
            className=" grid grid-cols-2 gap-5 h-full justify-center rounded-lg item-center "
            style={{ fontFamily: "Gilroy-Bold" }}
          >
            <button className="relative  flex flex-col justify-center items-center border-2 p-3 gap-2 bg-custom_bluelight rounded-lg md:h-24 md:h-24  ">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={app[0].img} className="w-2/5" />
              <h1 className="text-sm">{app[0].title}</h1>
            </button>
            <button className=" relative flex flex-col justify-center items-center border-2 p-3 gap-2  bg-custom_bluelight rounded-lg md:h-24">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={app[1].img} className="w-2/5" />
              <h1 className="text-sm">{app[1].title}</h1>
            </button>
            <button className="relative flex flex-col justify-center items-center border-2 p-3 gap-2  bg-custom_bluelight rounded-lg md:h-24">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={app[2].img} className="w-2/5" />
              <h1 className="text-sm">{app[2].title}</h1>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 h-auto flex items-center justify-center">
          <img src={appImg} />
        </div>
        {/* <div className="flex flex-col text-left md:w-1/2 sm:w-full gap-4">
          <div className=" w-fit px-2 py-1 bg-white text-custom_blue rounded-md ">
            <h1 style={{ fontFamily: "Gilroy-Bold" }}>EASY ADMIN</h1>
          </div>
          <h1
            className="text-4xl text-white text-left"
            style={{ fontFamily: "Gilroy-Bold" }}
          >
            Take the pain out of company admin
          </h1>
          <p className="text-sm  text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            odit quibusdam architecto, eum delectus unde officia, fugit,
          </p>
          <div className="bg-gray-200 w-full h-0.5 rounded-lg"></div>
          <div className="flex bg-custom_blue justify-around mt-3 p-2 rounded-lg">
            <div className=" flex gap-2">
              <div className="flex flex-col gap-2">
                <h1
                  className="text-xl text-white"
                  style={{ fontFamily: "Gilroy-Bold" }}
                >
                  Easy payment
                </h1>
                <p className="text-sm  text-slate-100">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-4">
                <h1 className="text-lg  text-white font-bold">
                  Fully integrated
                </h1>
                <p className="text-sm text-slate-100">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
