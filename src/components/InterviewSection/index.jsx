import React from "react";
import img from "./constants/img.png";
import notification from "./constants/notification.png";

export default function InterviewSection() {
  return (
    <div className="flex justify-center items-center my-10">
      <div className=" flex flex-col justify-center items-center md:gap-10 sm:gap-5 lg:max-w-7xl lg:px-28 md:px-10 sm:px-5 ">
        <div className="flex  flex-col justify-center items-center  md:gap-5 sm:gap-2 ">
          <h1
            className="md:text-3xl sm:text-xl"
            style={{ fontFamily: "Gilroy-Bold" }}
          >
            Find jobs with 3 easy steps
          </h1>
          <p className="text-center text-gray-500 md:text-sm sm:text-xs">
            With lots of unique blocks, you can easily build a page without
            coding. <br /> Build your next landing page.
          </p>
        </div>
        <div className="flex md:flex-row sm:flex-col sm:items-center p-2 md:gap-10 sm:gap-5">
          <div className="relative w-2/3">
            <img src={img} className=" rounded-lg" />
            <img src={notification} className="absolute  bottom-10 w-3/5  " />
          </div>
          <div className="flex flex-col justify-center  items-start gap-5">
            <div className="flex gap-5">
              <div className=" min-w-8 max-w-8 min-h-8 max-h-8 text-white rounded-full flex justify-center items-center bg-custom_blue">
                1
              </div>
              <div className="flex flex-col gap-2">
                <h1 style={{ fontFamily: "Gilroy-Bold" }}>Search for a job</h1>
                <p className="md:text-sm sm:text-xs text-gray-500">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className=" min-w-8 max-w-8 min-h-8 max-h-8 text-white rounded-full flex justify-center items-center bg-custom_blue">
                2
              </div>
              <div className="flex flex-col gap-2">
                <h1 style={{ fontFamily: "Gilroy-Bold" }}>
                  Apply within our website
                </h1>
                <p className="md:text-sm sm:text-xs text-gray-500">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className=" min-w-8 max-w-8 min-h-8 max-h-8 text-white rounded-full flex justify-center items-center bg-custom_blue">
                3
              </div>
              <div className="flex flex-col gap-2">
                <h1 style={{ fontFamily: "Gilroy-Bold" }}>
                  Get interview call
                </h1>
                <p className="md:text-sm sm:text-xs text-gray-500">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
