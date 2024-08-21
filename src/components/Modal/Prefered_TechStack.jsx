import React from "react";

import Vue from "../../logos/Vue.svg";
import Nodejs from "../../logos/Nodejs.svg";
import react from "../../logos/react.svg";
import Angular from "../../logos/Angular.svg";
import HTML5 from "../../logos/HTML5.svg";
import Mern from "../../logos/Mern.svg";

import CustomButton from "../CustomComponents/CustomButton";

export default function Prefered_TechStack({ next, prev }) {
  return (
    <div className=" flex flex-col  justify-center p-5 gap-2">
      <h1
        className="md:text-xl sm:text-lg  "
        style={{ fontFamily: "Gilroy-Bold" }}
      >
        Tell us more about yourself.
      </h1>
      <h1 className="md:text-sm sm:text-xs  text-gray-500 ">
        What tools would you use for your buisness requirement ?
      </h1>
      <div className="grid grid-cols-3 gap-2 py-5    ">
        <button className="flex flex-col p-2 rounded-lg items-center justify-center border border-gray-200  ">
          <img src={react} className="h-10 w-fit" />
          <h1 className=" text-center md:text-sm text-xs ">React JS</h1>
        </button>
        <button className=" flex flex-col p-2 rounded-lg items-center justify-center border border-gray-200  max-w-36  ">
          <img src={Mern} className="h-10 w-fit" />
          <h1 className=" text-center md:text-sm text-xs  ">Mern</h1>
        </button>
        <button className=" flex flex-col p-2 rounded-lg items-center justify-center border border-gray-200  max-w-36  ">
          <img src={Nodejs} className="h-10 w-fit" />
          <h1 className=" text-center md:text-sm text-xs  ">NodeJs</h1>
        </button>
        <button className="flex flex-col p-2 rounded-lg items-center justify-center border border-gray-200 max-w-36 ">
          <img src={Angular} className="h-10 w-fit" />
          <h1 className=" text-center md:text-sm text-xs ">Angular</h1>
        </button>
        <button className=" flex flex-col p-2 rounded-lg items-center justify-center border border-gray-200  max-w-36  ">
          <img src={Vue} className="h-10 w-fit" />
          <h1 className=" text-center md:text-sm text-xs  ">Vue</h1>
        </button>
        <button className=" flex flex-col p-2 rounded-lg items-center justify-center border border-gray-200  max-w-36  ">
          <img src={HTML5} className="h-10 w-fit" />
          <h1 className=" text-center md:text-sm text-xs  ">HTML5</h1>
        </button>
      </div>
      <div className="flex justify-between gap-20">
        <CustomButton onclick={prev} label={"Back"} />
        <CustomButton onclick={next} label={"Next"} />
      </div>
    </div>
  );
}
