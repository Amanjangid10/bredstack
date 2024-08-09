import React from "react";

import person from "../../assets/person.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import person5 from "../../assets/person5.png";
import drive from "../../logos/drive.png";
import product1 from "../../logos/product1.png";
import product2 from "../../logos/product2.png";
import product3 from "../../logos/product3.png";

export default function DevSection() {
  return (
    <div
      className="h-full py-20  flex items-center justify-around gap-10  "
      style={{ backgroundImage: `url(require('/mapdots.png))` }}
    >
      <div className="  flex gap-20  items-center justify-evenly">
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
      </div>
    </div>
  );
}
