import React from "react";
import CustomButton from "../CustomComponents/CustomButton";
import { useNavigate } from "react-router-dom";
import CustomButton1 from "../CustomComponents/CustomButton1";

export default function Getstarted() {
  const navigate = useNavigate("");
  return (
    <>
      {/* <div className="flex justify-around gap-3 mx-16 p-10 ">
        <div className="flex w-1/2 items-center justify-around  shadow-lg rounded-lg bg-custom_purple_dark ">
          <div className="  flex flex-col gap-5 text-left p-5">
            <h1 className="text-4xl font-semibold text-white ">
              For developers
            </h1>
            <button className=" w-1/2 rounded-full text-center bg-white  px-3.5 py-2.5 text-sm font-semibold text-black shadow-lg">
              Sign Up
            </button>
          </div>

          <img
            src={ai_img}
            className=" min-w-0 p-2 m-5 rounded-xl shadow-sm "
          />
        </div>
        <div className="flex w-1/2 items-center justify-around shadow-lg p-2 rounded-lg  bg-[#1f084c]    ">
          <div className=" flex flex-col gap-5 text-left p-5">
            <h1 className="text-4xl text-white  font-semibold">
              For corporates{" "}
            </h1>
            <button className=" w-1/2 rounded-full text-center bg-white  px-3.5 py-2.5 text-sm font-semibold text-black shadow-lg">
              Sign Up
            </button>
          </div>
          <img
            src={analytics}
            className="min-w-0 p-2 m-1 rounded-xl shadow-sm"
          />
        </div>
      </div> */}
      <div className="flex justify-center bg-custom_blue ">
        <div className=" flex justify-center item-center lg:max-w-7xl lg:px-28 md:px-10 md:py-10 sm:w-full sm:p-5 ">
          <div className="flex md:flex-row sm:flex-col   justify-center item-center md:gap-16 sm:gap-5">
            <h1 className="flex justify-center text-nowrap lg:text-3xl md:text-2xl md:text-left sm:text-center q font-bold text-white">
              You've got this far. <br />
              Ready to get started your Journey.
            </h1>
            <div className="flex justify-around items-center md:gap-10 sm:gap-5">
              <CustomButton1 label={"Plan and Pricing"} />
              <CustomButton label={"Get Started"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
