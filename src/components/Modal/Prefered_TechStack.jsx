import React from "react";

export default function Prefered_TechStack({ next, prev }) {
  return (
    <div className=" flex flex-col h-auto justify-center  mx-20 mt-20 gap-2">
      <h1 className="text-xl font-semibold  ">Tell us more about yourself.</h1>
      <h1 className="text-sm  text-gray-500 font-medium">
        What tools would you use for your buisness requirement ?
      </h1>
      <div className="grid grid-cols-3 gap-5   mt-10  ">
        <button className="flex items-center justify-center border border-gray-200 max-w-36 shadow-md">
          <h1 className=" text-center p-5">React JS</h1>
        </button>
        <button className=" flex items-center justify-center border border-gray-200  max-w-36 shadow-md ">
          <h1 className=" text-center p-5 ">Node JS</h1>
        </button>
        <button className=" flex items-center justify-center border border-gray-200  max-w-36 shadow-md ">
          <h1 className=" text-center p-5 ">Java</h1>
        </button>
        <button className="flex items-center justify-center border border-gray-200 max-w-36 shadow-md">
          <h1 className=" text-center p-5">Docker</h1>
        </button>
        <button className=" flex items-center justify-center border border-gray-200  max-w-36 shadow-md ">
          <h1 className=" text-center p-5 ">Jenkins</h1>
        </button>
        <button className=" flex items-center justify-center border border-gray-200  max-w-36 shadow-md ">
          <h1 className=" text-center p-5 ">MongoDB</h1>
        </button>
      </div>
      <div className="flex justify-between gap-20">
        <button
          onClick={prev}
          className="w-1/3 h-10 mt-10 bg-custom_purple_dark text-white rounded-lg"
        >
          Back
        </button>
        <button
          onClick={next}
          className="w-1/3 h-10 mt-10 bg-custom_purple_dark text-white rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}
