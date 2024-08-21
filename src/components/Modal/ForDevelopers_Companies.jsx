import React from "react";

import organization from "./img/organization.png";
import developer from "./img/developer.png";
import CustomButton from "../CustomComponents/CustomButton";

export default function ForDevelopers_Companies({ next, prev }) {
  return (
    <div className=" flex flex-col h-auto justify-center md:items-center md:gap-5 sm:gap-2 p-5">
      <h1
        className="md:text-xl sm:text-lg  "
        style={{ fontFamily: "Gilroy-Bold" }}
      >
        How are you planning to use BredStack ?
      </h1>
      <h1 className="md:text-sm sm:text-xs text-left  text-gray-500 ">
        We provide best solutions for your needs.{" "}
      </h1>

      <div className="flex justify-center gap-5 pt-5 ">
        <div className="w-1/2 flex flex-col items-center justify-center border border-gray-300 max-w-36 rounded-md p-2 gap-1 ">
          <img src={organization} className="h-10 w-fit" />
          <h1 className=" text-xs ">Organisations</h1>
        </div>
        <div className="w-1/2 flex flex-col items-center  justify-center border border-gray-300  max-w-36 rounded-md p-2 gap-1 ">
          <img src={developer} className="h-10 w-fit " />
          <h1 className=" text-xs">Developers</h1>
        </div>
      </div>
      <div className="flex w-full justify-end pt-5 ">
        {/* <button
          onClick={next}
          className="w-1/3 h-10 text-white bg-custom_blue rounded-lg"
        >
          Next
        </button> */}
        <CustomButton onclick={next} label={"Next"} />
      </div>
    </div>
  );
}
