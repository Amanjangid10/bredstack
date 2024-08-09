import React, { useState } from "react";
import Content from "./Content";

function Subnav() {
  const [active, setActive] = useState("insights");

  return (
    <div className="bg-white p-20 ">
      <div className=" bg-[#1f084c] mx-10  p-5 rounded-lg ">
        <nav class="mx-20  px-20">
          <div className="">
            <div className="flex justify-center items-center text-gray-500 gap-6">
              <div className="m-1 p-2 ">
                <button
                  onClick={() => setActive("insights")}
                  className={`text-md  font-semibold hover:scale-105 hover:text-white  ${
                    active === "insights" ? "text-white" : "text-slate-500"
                  }`}
                >
                  Insights
                </button>
              </div>
              <div className="m-1 p-2">
                <button
                  onClick={() => setActive("shareMeeting")}
                  className={`text-md font-semibold hover:scale-105 hover:text-white  ${
                    active === "shareMeeting" ? "text-white" : "text-slate-500 "
                  }`}
                >
                  Share Meeting
                </button>
              </div>
              <div className="m-1 p-2">
                <button
                  onClick={() => setActive("shareMeeting")}
                  className={`text-md font-semibold hover:scale-105 hover:text-white  ${
                    active === "shareMeeting" ? "text-white" : "text-slate-500 "
                  }`}
                >
                  Share Meeting
                </button>
              </div>
              <div className="m-1 p-2">
                <button
                  onClick={() => setActive("shareMeeting")}
                  className={`text-md  font-semibold hover:scale-105 hover:text-white  ${
                    active === "shareMeeting" ? "text-white" : "text-slate-500 "
                  }`}
                >
                  Share Meeting
                </button>
              </div>
              <div className="m-1 p-2">
                <button
                  onClick={() => setActive("shareMeeting")}
                  className={`text-md  font-semibold hover:scale-105 hover:text-white  ${
                    active === "shareMeeting" ? "text-white" : "text-slate-500 "
                  }`}
                >
                  Share Meeting
                </button>
              </div>
              <div className="m-1 p-2">
                <button
                  onClick={() => setActive("shareMeeting")}
                  className={`text-md  font-semibold hover:scale-105 hover:text-white  ${
                    active === "shareMeeting" ? "text-white" : "text-slate-500 "
                  }`}
                >
                  Share Meeting
                </button>
              </div>
            </div>
            <div className="w-full h-1 bg-white rounded-md"></div>
          </div>
        </nav>
        {active === "insights" && <Content />}
      </div>
    </div>
  );
}
export default Subnav;
