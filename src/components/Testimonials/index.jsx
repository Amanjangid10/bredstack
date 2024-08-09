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
    <section className="flex justify-center py-12 px-20 sm:py-16 lg:py-20 bg-white">
      <div className="w-2/3 flex items-center border  p-20 gap-10 rounded-3xl ">
        <button onClick={moveLeft}>
          <ChevronLeft />
        </button>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl ">“</h1>
          <div className="flex flex-col justify-center  gap-5">
            <h1 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our people are saying
            </h1>
            <div className="w-auto h-0.5 bg-gray-200"></div>
          </div>
          <div className="flex justify-center mt-10  ">
            <div className="flex flex-col gap-5   ">
              <div>
                <h1 className="text-center text-gray-">
                  {testimonials[current].content}
                </h1>
              </div>
              <div className="flex flex-col items-center gap-1 text-sm">
                <img src={testimonials[current].img} className="w-10 h-10" />
                <h1>{testimonials[current].name}</h1>
                <h1>{testimonials[current].designation}</h1>
              </div>
            </div>
          </div>
        </div>
        <button onClick={MoveRight}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
