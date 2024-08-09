import { ChevronDown } from "lucide-react";
import React from "react";

export default function Faq() {
  return (
    <div className="flex flex-col justify-center items-center gap-20 mx-56 my-20 px-36 py-10 ">
      <div>
        <h1 className="text-4xl font-bold ">Things you probably wonder</h1>
      </div>
      <div className="flex flex-col  gap-10">
        <div className="flex gap-20 p-5 bg-gray-100 rounded-lg ">
          <div className="flex gap-20">
            <div className="flex flex-col gap-5 ">
              <h1 className="text-xl  font-semibold">
                Frequently asked question 1
              </h1>
              <p className="text-md text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                est incidunt, doloribus consectetur ipsam nesciunt dolorum rerum
                officiis voluptate a eos dolores voluptas repellendus ipsum,
                consequuntur optio suscipit vero. Ullam.
              </p>
            </div>

            <button className="bg-white rounded-full w-fit h-fit  p-2">
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
