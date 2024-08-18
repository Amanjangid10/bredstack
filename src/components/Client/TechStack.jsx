import React from "react";

export default function TechStack({ tech }) {
  return (
    <div className=" grid lg:grid-cols-5 justify-center items-center   gap-2 p-2  ">
      {tech.map((item, i) => {
        return (
          <div key={i}>
            <div className="p-2 flex flex-col gap-1 justify-center items-center border text-center min-w-auto min-h-auto hover:scale-105 cursor-pointer bg-white  rounded-lg">
              <img src={item.img} className=" h-12" />
              <h1 className="font-normal text-sm text-center text-nowrap">
                {item.title}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}
