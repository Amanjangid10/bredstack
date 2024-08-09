import React from "react";
import ai_img from "../../assets/ai_img.png";
import analytics from "../../assets/analytics.png";

export default function Getstarted() {
  return (
    <>
      <div className="flex justify-around gap-3 mx-16 p-10 ">
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
      </div>
      <div className="flex justify-center bg-custom_purple_dark p-20">
        <div className=" flex justify-center item-center w-1/2">
          <div className="flex flex-col justify-center item-center px- gap-16">
            <h1 className="flex justify-center text-center text-4xl font-bold text-white">
              You've got this far. <br />
              Ready to get started your <br />
              buisness venture ?
            </h1>

            <div className="flex justify-around gap-20">
              <a
                href="#"
                className="w-1/2 rounded-full text-center bg-white  px-3.5 py-2.5 text-sm font-semibold text-black shadow-lg "
              >
                Plan and Pricing
              </a>
              <a
                href="#"
                className="w-1/2 rounded-full text-center bg-custom_purple_dark border border-white px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg "
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
