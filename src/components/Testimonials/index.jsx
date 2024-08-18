import React, { useState } from "react";
import { testimonials } from "./Data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const MoveRight = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const moveLeft = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="flex justify-center">
      <section className="flex flex-col items-center justify-center gap-10 md:my-20 sm:my-10  lg:max-w-7xl lg:px-28  md:px-10 sm:px-5">
        <div className="flex w-full items-center justify-between">
          <h1
            className="text-center md:text-5xl sm:text-2xl  "
            style={{ fontFamily: "Gilroy-bold" }}
          >
            Trusted by our clients
          </h1>
          <div className="flex justify-center gap-5">
            <button className="md:p-4 sm:p-2 text-center bg-custom_bluelight rounded-full">
              <ChevronLeft />
            </button>
            <button className="md:p-4 sm:p-2 text-center bg-custom_bluelight rounded-full">
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className=" flex gap-10   ">
          <div className="flex gap-10  rounded-lg py-5px-2">
            <div className="md:w-1/2 sm:w-full min-h-80 flex flex-col justify-between  p-5 rounded-xl border border-t-custom_blue border-t-4 border-gray-200  ">
              <div>
                <p className="text-2xl  text-gray-500">
                  {testimonials[current].content}
                </p>
              </div>
              <div className="flex items-center gap-5">
                <img
                  src={testimonials[current].img}
                  className="h-14 w-14 rounded-full"
                />
                <div>
                  <h1 style={{ fontFamily: "Gilroy-Bold" }}>
                    {testimonials[current].name}
                  </h1>
                  <p className="text-custom_blue text-sm mt-1">
                    {testimonials[current].designation}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2  min-h-80 sm:hidden md:flex flex-col justify-between  p-5 rounded-xl border border-t-custom_blue border-t-4 border-gray-200  ">
              <div>
                <p className="text-2xl  text-gray-500">
                  {testimonials[current + 1].content}
                </p>
              </div>
              <div className="flex items-center gap-5">
                <img
                  src={testimonials[current + 1].img}
                  className="h-14 w-14 rounded-full"
                />
                <div>
                  <h1 style={{ fontFamily: "Gilroy-Bold" }}>
                    {testimonials[current + 1].name}
                  </h1>
                  <p className="text-custom_blue text-sm mt-1">
                    {testimonials[current + 1].designation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
