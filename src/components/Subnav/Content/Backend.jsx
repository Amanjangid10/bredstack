import React from "react";

import { back, front } from "../Data.jsx";
import CustomButton from "../../CustomComponents/CustomButton.jsx";

import backendImg from "./img/backendImg.png";

export default function Backend() {
  return (
    <div className="flex lg:flex-row sm:flex-col justify-around  gap-5 ">
      <div className="flex flex-col items-center gap-5 lg:w-2/3">
        <div className="flex md:flex-row  sm:flex-col justify-between gap-1 sm:w-full">
          <div className="flex md:flex-col sm:flex-row gap-1 md:w-1/4 ">
            <div className="relative flex flex-col gap- p-2  md:h-1/2  border-2 border-gray-100  rounded-lg">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 "
              />
              <img src={front[0].img} alt="tech1" className="w-10" />
              <div className="text-left" style={{ fontFamily: "Gilroy-Bold" }}>
                <p className="text-sm">{front[0].title}</p>
              </div>
              <p className="text-xs text-gray-500">
                Design build and launch here
              </p>
            </div>
            <div className="relative flex  flex-col  p-2 md:h-1/2 border-2 border-gray-100  rounded-lg">
              <input
                type="checkbox"
                className="absolute top-2 right-2  z-100 opacity-50"
              />
              <img src={front[3].img} alt="tech1" className="w-10" />
              <div className="text-left">
                <p className="text-xs">{front[3].title}</p>
              </div>
              <p className="text-xs text-gray-500">
                Design build and launch here
              </p>
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-row gap-1 md:w-1/4 ">
            <div className="flex flex-col  justify-between gap-1 h-1/2  ">
              <div className="relative flex lg:items-center md:h-1/2    md:flex-row sm:flex-col  p-2 gap-2 border-2 border-gray-100  rounded-lg">
                <input
                  type="checkbox"
                  className="absolute top-2 right-2  z-100 opacity-50"
                />
                <img src={front[4].img} alt="tech1" className="w-10 h-fit" />
                <div className="text-left">
                  <p className="text-xs ">{front[4].title}</p>
                  <p className="text-xs text-gray-500">
                    Design build and launch here
                  </p>
                </div>
              </div>
              <div className="relative flex lg:items-center  md:h-1/2 md:w-full  md:flex-row sm:flex-col  p-2 gap-2 border-2 border-gray-100  rounded-lg">
                <input
                  type="checkbox"
                  className="absolute top-2 right-2  z-100 opacity-50"
                />
                <img src={front[0].img} alt="tech1" className="w-10 h-fit" />
                <div className="text-left">
                  <p className="text-xs">{front[0].title}</p>
                  <p className="text-xs text-gray-500">
                    Design build and launch here
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  flex-col justify-between gap-1 h-1/2 ">
              <div className="relative flex lg:items-center  md:h-1/2 md:w-full  sm:flex-col md:flex-row p-2   gap-2 border-2 border-gray-100  rounded-lg">
                <input
                  type="checkbox"
                  className="absolute top-2 right-2  z-100 opacity-50"
                />
                <img src={front[1].img} alt="tech1" className="w-10" />
                <div className="text-left">
                  <p className="text-xs">{front[1].title} </p>
                  <p className="text-xs text-gray-500">
                    Design build and launch here
                  </p>
                </div>
              </div>
              <div className="relative flex lg:items-center  md:h-1/2 md:w-full   sm:flex-col md:flex-row  p-2 gap-2 border-2 border-gray-100  rounded-lg">
                <input
                  type="checkbox"
                  className="absolute top-2 right-2  z-100 opacity-50"
                />
                <img src={front[2].img} alt="tech1" className="w-10" />
                <div className="text-left">
                  <p className="text-xs">{front[2].title}</p>
                  <p className="text-xs text-gray-500">
                    Design build and launch here
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  md:flex-col sm:flex-row gap-1 md:w-1/4 ">
            <div className="flex flex-col  justify-between gap-1   ">
              <div className="relative flex lg:items-center md:h-1/2  md:w-full  md:flex-row sm:flex-col  p-2 gap-2 border-2 border-gray-100  rounded-lg">
                <input
                  type="checkbox"
                  className="absolute top-2 right-2  z-100 opacity-50"
                />
                <img src={front[4].img} alt="tech1" className="w-10" />
                <div className="text-left">
                  <p className="text-xs ">{front[4].title}</p>
                  <p className="text-xs text-gray-500">
                    Design build and launch here
                  </p>
                </div>
              </div>

              <div className="relative flex lg:items-center md:h-1/2 md:w-full  md:flex-row sm:flex-col  p-2 gap-2 border-2 border-gray-100  rounded-lg">
                <input
                  type="checkbox"
                  className="absolute top-2 right-2  z-100 opacity-50"
                />
                <img src={front[0].img} alt="tech1" className="w-10" />
                <div className="text-left">
                  <p className="text-xs">{front[0].title}</p>
                  <p className="text-xs text-gray-500">
                    Design build and launch here
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  flex-col justify-between gap-1 ">
              <div className="relative flex lg:items-center  md:h-1/2 md:w-full  sm:flex-col md:flex-row p-2   gap-2 border-2 border-gray-100  rounded-lg">
                <input
                  type="checkbox"
                  className="absolute top-2 right-2  z-100 opacity-50"
                />
                <img src={front[1].img} alt="tech1" className="w-10" />
                <div className="text-left">
                  <p className="text-xs">{front[1].title} </p>
                  <p className="text-xs text-gray-500">
                    Design build and launch here
                  </p>
                </div>
              </div>
              <div className="relative flex lg:items-center  md:h-1/2 md:w-full   sm:flex-col md:flex-row  p-2 gap-2 border-2 border-gray-100  rounded-lg">
                <input
                  type="checkbox"
                  className="absolute top-2 right-2  z-100 opacity-50"
                />
                <img src={front[2].img} alt="tech1" className="w-10" />
                <div className="text-left">
                  <p className="text-xs">{front[2].title}</p>
                  <p className="text-xs text-gray-500">
                    Design build and launch here
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  md:flex-col sm:flex-row gap-1 md:w-1/4 ">
            <div className="flex flex-col  justify-between gap-1   ">
              <div className="relative flex lg:items-center md:h-1/2  md:w-full  md:flex-row sm:flex-col  p-2 gap-2 border-2 border-gray-100  rounded-lg">
                <input
                  type="checkbox"
                  className="absolute top-2 right-2  z-100 opacity-50"
                />
                <img src={front[4].img} alt="tech1" className="w-10" />
                <div className="text-left">
                  <p className="text-xs ">{front[4].title}</p>
                  <p className="text-xs text-gray-500">
                    Design build and launch here
                  </p>
                </div>
              </div>

              <div className="relative flex lg:items-center md:h-1/2 md:w-full  md:flex-row sm:flex-col  p-2 gap-2 border-2 border-gray-100  rounded-lg">
                <input
                  type="checkbox"
                  className="absolute top-2 right-2  z-100 opacity-50"
                />
                <img src={front[0].img} alt="tech1" className="w-10" />
                <div className="text-left">
                  <p className="text-xs">{front[0].title}</p>
                  <p className="text-xs text-gray-500">
                    Design build and launch here
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  flex-col justify-between gap-1 ">
              <div className="relative flex lg:items-center  md:h-1/2 md:w-full  sm:flex-col md:flex-row p-2   gap-2 border-2 border-gray-100  rounded-lg">
                <input
                  type="checkbox"
                  className="absolute top-2 right-2  z-100 opacity-50"
                />
                <img src={front[1].img} alt="tech1" className="w-10" />
                <div className="text-left">
                  <p className="text-xs">{front[1].title} </p>
                  <p className="text-xs text-gray-500">
                    Design build and launch here
                  </p>
                </div>
              </div>
              <div className="relative flex lg:items-center  md:h-1/2 md:w-full   sm:flex-col md:flex-row  p-2 gap-2 border-2 border-gray-100  rounded-lg">
                <input
                  type="checkbox"
                  className="absolute top-2 right-2  z-100 opacity-50"
                />
                <img src={front[2].img} alt="tech1" className="w-10" />
                <div className="text-left">
                  <p className="text-xs">{front[2].title}</p>
                  <p className="text-xs text-gray-500">
                    Design build and launch here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <CustomButton label={"Continue"} />
        </div>
      </div>
      <div className=" lg:w-1/3 text-center lg:p-10 md:p-10 sm:p-5 bg-custom_blue rounded-lg">
        <h1 className="text-white md:text-3xl">
          Your desired tech to develop your digital venture effectively.
        </h1>
      </div>
    </div>
  );
}
