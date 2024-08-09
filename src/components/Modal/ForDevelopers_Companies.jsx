import React from "react";

export default function ForDevelopers_Companies({ next, prev }) {
  return (
    <div className=" flex flex-col h-auto justify-center items-center mx-20 mt-20 gap-5">
      <h1 className="text-xl font-semibold  ">
        How are you planning to use BredStack ?
      </h1>
      <h1 className="text-sm px-2 text-gray-500 font-medium">
        We provide best solutions for your needs.{" "}
      </h1>

      <div className="flex justify-center gap-5  h-32 mt-10  ">
        <div className="flex items-center justify-center border border-gray-300 max-w-36 rounded-md">
          <h1 className=" text-center p-5">For Organisations</h1>
        </div>
        <div className=" flex items-center justify-center border border-gray-300  max-w-36 rounded-md ">
          <h1 className=" text-center p-5 ">For Developers</h1>
        </div>
      </div>
      <div className="flex w-full justify-end ">
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
