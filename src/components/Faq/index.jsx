import { ChevronDown } from "lucide-react";
import React from "react";

export default function Faq() {
  return (
    <div className="flex justify-center bg-custom_blue_dark text-white">
      <div className="flex flex-col justify-center items-center md:gap-10 sm:gap-5 my-20 lg:max-w-7xl lg:px-28 md:px-10 ">
        <div>
          <h1
            className="md:text-3xl sm:text-xl"
            style={{ fontFamily: "Gilroy-Bold" }}
          >
            Things you probably wonder
          </h1>
        </div>
        <div className="flex flex-col  md:gap-10 sm:gap-5">
          <div className="flex gap-20 md:p-5 sm:p-2 bg-gray-100 rounded-lg ">
            <div className="flex items-start md:gap-20 sm:gap-2">
              <div className="flex flex-col md:gap-5 sm:gap-2 ">
                <h1
                  className=" md:text-lg sm:text-sm text-nowrap text-black"
                  style={{ fontFamily: "Gilroy-Bold" }}
                >
                  Frequently asked question 1
                </h1>
                <p className="md:text-sm sm:text-xs text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Libero est incidunt, doloribus consectetur ipsam nesciunt
                  dolorum rerum officiis voluptate a eos dolores voluptas
                  repellendus ipsum, consequuntur optio suscipit vero. Ullam.
                </p>
              </div>
              <button className="">
                <ChevronDown size={20} color="black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
