import React from "react";
import Image1 from "./constants/Image1.png";
import Image2 from "./constants/Image2.png";

import person from "../../assets/person.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import person5 from "../../assets/person5.png";
import drive from "../../logos/drive.png";
import product1 from "../../logos/product1.png";
import product2 from "../../logos/product2.png";
import product3 from "../../logos/product3.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DevSection() {
  return (
    <div className="flex flex-col justify-center items-center my-20 gap-5   ">
      <div className="flex flex-col items-center gap-2">
        <h1
          className="md:text-5xl sm:text-2xl "
          style={{ fontFamily: "Gilroy-Bold" }}
        >
          Meet our team{" "}
        </h1>
        <p className="text-slate-500">Every skill you need for your needs.</p>
        <div className="md:hidden sm:flex justify-center gap-5">
          <button className="md:p-4 sm:p-2 text-center bg-custom_bluelight rounded-full">
            <ChevronLeft />
          </button>
          <button className="md:p-4 sm:p-2 text-center bg-custom_bluelight rounded-full">
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="  flex flex-col justify-center items-center  lg:max-w-7xl lg:px-28 md:px-10 sm:px-5 ">
        <div className=" sm:hidden md:flex justify-around items-center opacity-70">
          <img
            src={Image1}
            className=" relative  top-10 lg:w-1/6 md:w-1/6 sm:w-10 h-fit  rounded-3xl"
          />
          <img
            src={Image2}
            className="relative top-10 lg:w-1/6 md:w-1/6 sm:w-10 h-fit  rounded-3xl"
          />
        </div>
        <div className=" flex justify-between items-center lg:max-w-7xl">
          <img
            src={Image1}
            className=" sm:hidden md:block lg:w-1/5 md:w-1/5 h-fit opacity-70 rounded-3xl"
          />

          <div className="z-10 p-2 bg-white  rounded-3xl md:w-2/5   shadow-2xl border-2 border-slate-200 ">
            <img src={Image1} className="w-full h-auto rounded-3xl" />
            <div className="text-left p-2 ">
              <h1 style={{ fontFamily: "Gilroy-Bold" }}>Shreya</h1>
              <p className="text-sm">Python developer</p>
              <p className="text-sm mt-4">
                8+ years of experience in edtech industry
              </p>
              <p className="text-sm bg-slate-300 px-2 py-1 w-fit rounded-md">
                PYTHON | HTML | CSS
              </p>
            </div>
          </div>
          <img
            src={Image2}
            className=" sm:hidden md:block relative right-[5%] bottom-[10%] lg:w-1/4 md:w-1/4   h-fit opacity-70  rounded-3xl"
          />
        </div>
        <div className="sm:hidden md:flex justify-around items-center opacity-70">
          <img
            src={Image1}
            className="relative bottom-[40%] lg:w-1/6 md:w-1/6 sm:w-32 h-fit  rounded-3xl"
          />
          <img
            src={Image2}
            className="relative bottom-[30%] lg:w-1/5 md:w-1/6 sm:w-28 h-fit  rounded-3xl"
          />
        </div>
      </div>
      {/* <div className="flex gap-20 items-center justify-evenly">
        <div className=" w-1/3 flex flex-col gap-32 ">
          <div className="flex justify-center items-center ">
            <div className="flex ">
              <img
                src={product1}
                className=" relative right-20 top-10  w-12 h-12 rounded-full shadow-xl "
              />
              <img
                src={person5}
                className="relative rounded-full  w-20 h-20  animate-wiggle-more animate-infinite"
              />
            </div>
          </div>
          <div>
            <img
              src={person3}
              className=" relative right-40 top-0 w-24 h-24 rounded-full shadow-xl "
            />

            <img
              src={drive}
              className=" relative  w-12 h-12 rounded-full shadow-xl "
            />
          </div>
          <img
            src={person3}
            className="relative w-16 h-16 rounded-full animate-bounce animate-infinite"
          />
        </div>
        <div className="  flex flex-col items-center gap-10 ">
          <h1 className="text-4xl  font-bold text-nowrap text-center">
            Connecting resources to fit <br /> your buisness needs.
          </h1>
          <div className=" flex items-center justify-start gap-x-6">
            <a
              href="#"
              className="rounded-full border border-custom_purple_dark bg-custom_purple_dark px-7 py-3 text-md font-semibold text-white shadow-md hover:bg-purple-900 "
            >
              Get Started
            </a>
            <a
              href="#"
              className="rounded-full border border-custom_purple_dark bg-white px-7 py-3 text-md font-semibold text-custom_purple_dark shadow-md hover:bg-gray-200 "
            >
              Book A Meeting
            </a>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-32 ">
          <div className="flex ">
            <img
              src={person4}
              className="relative  w-16 h-16 rounded-full animate-bounce animate-infinite "
            />
            <img
              src={product2}
              className=" relative left-20 top-20  w-12 h-12 rounded-full shadow-xl "
            />
          </div>
          <div>
            <img
              src={product3}
              className=" relative  w-12 h-12 rounded-full shadow-xl "
            />
            <img
              src={person3}
              className=" relative left-40 w-24 h-24 rounded-full shadow-xl "
            />
          </div>
          <img
            src={person}
            className="relative w-20 h-20 rounded-full animate-wiggle-more animate-infinite "
          />
        </div>
      </div> */}
    </div>
  );
}
