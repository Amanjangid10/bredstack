import React from "react";

import { devops } from "../Data.jsx";

import devopsImg from "./img/devopsImg.png";

export default function Devops() {
  return (
    <div className="">
      <div className="flex  md:flex-row sm:flex-col justify-around  gap-8">
        <div className=" md:w-1/2  rounded-lg">
          <div
            className=" grid grid-cols-3 gap-5 h-full justify-center rounded-lg item-center "
            style={{ fontFamily: "Gilroy-Bold" }}
          >
            <button className="relative  flex flex-col justify-center items-center border-2 p-3 gap-2 bg-custom_bluelight rounded-lg md:h-full ">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={devops[0].img} className="w-2/5" />
              <h1 className="text-sm">{devops[0].title}</h1>
            </button>
            <button className=" relative flex flex-col justify-center items-center border-2 p-3 gap-2  bg-custom_bluelight rounded-lg md:h-full">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={devops[1].img} className="w-2/5" />
              <h1 className="text-sm">{devops[1].title} </h1>
            </button>
            <button className="relative flex flex-col justify-center items-center border-2 p-3 gap-2  bg-custom_bluelight rounded-lg md:h-full">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={devops[2].img} className="w-2/5" />
              <h1 className="text-sm">{devops[2].title}</h1>
            </button>
            <button className="relative flex flex-col justify-center items-center border-2 p-3 gap-2  bg-custom_bluelight rounded-lg md:h-full">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={devops[3].img} className="w-2/5" />
              <h1 className="text-sm">{devops[3].title}</h1>
            </button>
            <button className="relative flex flex-col justify-center items-center border-2 p-3 gap-2  bg-custom_bluelight rounded-lg md:h-full">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={devops[4].img} className="w-2/5" />
              <h1 className="text-sm">{devops[4].title}</h1>
            </button>
            <button className="relative flex flex-col justify-center items-center border-2 p-3 gap-2  bg-custom_bluelight rounded-lg md:h-full">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={devops[5].img} className="w-2/5" />
              <h1 className="text-sm">{devops[5].title}</h1>
            </button>
            <button className="relative flex flex-col justify-center items-center border-2 p-3 gap-2  bg-custom_bluelight rounded-lg md:h-full">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={devops[6].img} className="w-2/5" />
              <h1 className="text-sm">{devops[6].title}</h1>
            </button>
            <button className="relative flex flex-col justify-center items-center border-2 p-3 gap-2  bg-custom_bluelight rounded-lg md:h-full">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={devops[7].img} className="w-2/5" />
              <h1 className="text-sm">{devops[7].title}</h1>
            </button>
            <button className="relative flex flex-col justify-center items-center border-2 p-3 gap-2  bg-custom_bluelight rounded-lg md:h-full">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={devops[8].img} className="w-2/5" />
              <h1 className="text-sm">{devops[8].title}</h1>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 lg:p-20 md:p-10 sm:p-5 bg-custom_blue rounded-lg">
          <h1 className="text-white md:text-3xl">
            Your desired tech to develop your digital venture effectively.
          </h1>
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
