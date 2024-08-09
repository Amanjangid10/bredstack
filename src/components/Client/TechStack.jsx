import React from "react";

export default function TechStack({ tech }) {
  return (
    <div className="  grid grid-cols-5  justify-center gap-2  m-10 p-5  ">
      {tech.map((item, i) => {
        return (
          <div key={i}>
            <div className="p-5 flex flex-col gap-1 justify-center items-center border  shadow-lg text-center min-w-28 min-h-28 hover:scale-105 cursor-pointer  bg-white  rounded-lg">
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