import React from "react";
import { WalletCards } from "lucide-react";
import { Workflow } from "lucide-react";

import insights_subnav_img from "../../../assets/insights_subnav_img.png";
import payments from "../../../logos/payments.svg";
import integrated from "../../../logos/integrated.svg";

export default function Content() {
  return (
    <div className="relative px-10 pt-2 md:px-10">
      <div className="flex justify-around  mx-20 p-10 gap-8">
        <div className=" w-1/2  block   rounded-lg">
          <div className=" bg-white flex justify-center rounded-lg item-center ">
            <img src={insights_subnav_img} className="rounded-lg " />
          </div>
        </div>
        <div className="flex flex-col text-left w-1/2 gap-3">
          <div className=" w-fit bg-white rounded-md font-semibold ">
            <h1 className=" px-2 py-1 ">EASY ADMIN</h1>
          </div>
          <h1 className="text-4xl  text-white text-left mt-4 font-bold p-0">
            Take the pain out of company admin
          </h1>
          <p className="text-slate-300 text-sm mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            odit quibusdam architecto, eum delectus unde officia, fugit,
          </p>
          <div className="bg-gray-200 w-full h-1 rounded-lg mt-5"></div>
          <div className="flex bg-[#9144f4]  justify-around mt-3 p-2 rounded-lg">
            <div className=" flex gap-2">
              <img src={payments} className="h-10" />
              <div className="flex flex-col gap-4">
                <h1 className="text-lg text-white   font-bold">Easy payment</h1>
                <p className="text-sm  text-slate-100">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src={integrated} className="h-10" />
              <div className="flex flex-col gap-4">
                <h1 className="text-lg  text-white font-bold">
                  Fully integrated
                </h1>
                <p className="text-sm text-slate-100">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
