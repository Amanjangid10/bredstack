import React from "react";
import Image1 from "./constants/Image1.png";
import Image2 from "./constants/Image2.png";
import Image3 from "./constants/Image3.png";
import Image4 from "./constants/Image4.png";

export default function ServiceSection() {
  return (
    <div className="flex justify-center items-center my-20  ">
      <div className="flex flex-col justify-center items-center gap-20  lg:max-w-7xl lg:px-28 md:px-0 md:max-w-2xl sm:px-5">
        <div className="flex md:flex-row  sm:flex-col justify-between items-center gap-10 ">
          <img src={Image1} className="md:w-1/2 sm:w-full h-full rounded-lg" />
          <div className="md:w-1/2 sm:w-full flex flex-col  gap-4">
            <h1 className=" md:text-2xl" style={{ fontFamily: "Gilroy-Bold" }}>
              Track your progress with <br /> our advanced site
            </h1>
            <p className="text-sm">
              We share all your work progress along with improvement points
              making sure you stay in demand.
            </p>
            <a
              href="#"
              className="text-custom_blue"
              style={{ fontFamily: "Gilroy-Bold" }}
            >
              Start a free trial
            </a>
          </div>
        </div>
        <div className="flex md:flex-row  sm:flex-col justify-between items-center gap-10 ">
          <div className="md:block sm:hidden md:w-1/2 sm:w-full flex flex-col  gap-4">
            <h1 className=" md:text-2xl" style={{ fontFamily: "Gilroy-Bold" }}>
              Track your progress with <br /> our advanced site
            </h1>
            <p className="text-sm">
              We share all your work progress along with improvement points
              making sure you stay in demand.
            </p>
            <a
              href="#"
              className="text-custom_blue"
              style={{ fontFamily: "Gilroy-Bold" }}
            >
              Start a free trial
            </a>
          </div>
          <div className="flex items-center md:w-1/2 sm:w-full h-full rounded-lg">
            <img
              src={Image2}
              className=" z-10 w-2/3 border h-full rounded-lg"
            />
            <img
              src={Image3}
              className=" relative md:right-10 sm:right-5 opacity-70 w-1/3 border h-full rounded-lg"
            />
          </div>
          <div className="md:w-1/2 sm:w-full flex flex-col  gap-4">
            <h1
              className=" sm:block md:hidden md:text-2xl"
              style={{ fontFamily: "Gilroy-Bold" }}
            >
              Track your progress with <br /> our advanced site
            </h1>
            <p className="text-sm">
              We share all your work progress along with improvement points
              making sure you stay in demand.
            </p>
            <a
              href="#"
              className="text-custom_blue"
              style={{ fontFamily: "Gilroy-Bold" }}
            >
              Start a free trial
            </a>
          </div>
        </div>
        <div className="flex md:flex-row sm:flex-col justify-between items-center gap-10 ">
          <img src={Image4} className=" md:w-1/2 sm:w-full h-full " />
          <div className="md:w-1/2 sm:w-full flex flex-col  gap-4">
            <h1 className=" md:text-2xl" style={{ fontFamily: "Gilroy-Bold" }}>
              Track your progress with <br /> our advanced site
            </h1>
            <p className="text-sm">
              We share all your work progress along with improvement points
              making sure you stay in demand.
            </p>
            <a
              href="#"
              className="text-custom_blue"
              style={{ fontFamily: "Gilroy-Bold" }}
            >
              Start a free trial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
