import React from "react";
import CustomButton from "../CustomComponents/CustomButton";

export default function ConnectEmail() {
  return (
    <div className=" my-20 flex justify-center md:my-20 sm:my-10 ">
      <div className=" flex flex-col items-center lg:gap-8  md:w-1/2  md:gap-8 sm:gap-4 sm:mx-5">
        <h1
          className="text-center lg:text-2xl sm:text-xl flex flex-col gap-2 "
          style={{ fontFamily: "Gilroy-Bold" }}
        >
          <p className=" text-nowrap lg:text-4xl md:text-3xl sm:text-2xl ">
            Get Our Latest Updates
          </p>
        </h1>
        <p className="  text-gray-600 text-center text-nowrap  lg:text-md md:text-sm sm:text-xs sm:text-wrap">
          With lots of unique blocks, you can easily build <br /> a your digital
          venture up for efficient working of your organisation.
        </p>
        <div className=" w- flex items-center justify-start lg:gap-4 md:gap-2 sm:gap-2">
          <input
            type="email"
            className="border pl-10 pr-3 w-full rounded-lg lg:h-8 md:text-sm sm:h-8 sm:text-xs"
            placeholder="Enter your email here  "
          />
          <CustomButton label={"Subscribe"} />
        </div>
        <p className="  text-gray-600 text-center text-nowrap  lg:text-md md:text-sm sm:text-xs sm:text-wrap">
          We’ll never share your details with third parties. <br /> View our
          Privacy Policy for more info.
        </p>
      </div>
    </div>
  );
}
