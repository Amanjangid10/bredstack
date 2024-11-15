import React, { useState } from "react";
import ai_img from "../../assets/ai_img.png";
import analytics from "../../assets/analytics.png";
import { logo } from "./constants";
import Marquee from "react-fast-marquee";

export default function Client() {
  return (
    <div className="flex justify-center py-10 sm:px-5  ">
      <div className=" lg:max-w-7xl lg:px-28 md:max-w-2xl sm:max-w-full ">
        <div className="flex justify-center lg:mx-28 lg:gap-20 md:gap-8 sm:gap-6 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
          <Marquee>
            {logo.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    src={item}
                    className="opacity-50 lg:h-20 lg:w-40 lg:mx-10 md:h-12 md:w-28 sm:h-10 sm:w-32  "
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
        <div
          className="flex md:flex-row sm:flex-col justify-between items-center xl:px-0 lg:px-28 gap-4 lg:mt-16 md:mt-12 sm:mt-8  "
          style={{ fontFamily: "Gilroy-Bold" }}
        >
          <div className="flex gap-2 md:w-1/2 sm:w-full p-5 items-center justify-around  rounded-lg bg-custom_blue">
            <div className="w-1/2 h-full text-left flex flex-col justify-between">
              <h1 className="lg:text-2xl md:text-md text-white ">
                AI Vetted Developers
              </h1>
              <p className="text-slate-300 md:text-sm sm:text-xs"></p>
            </div>
            <img
              src={ai_img}
              className=" w-1/2 h-full min-w-0 border rounded-lg  "
            />
          </div>
          <div className="flex gap-2 md:w-1/2 sm:w-full  p-5 items-center justify-around  rounded-lg bg-custom_bluelight">
            <div className="w-1/2 h-full text-left flex flex-col justify-between">
              <h1 className="lg:text-2xl md:text-md ">Expert Tech Team</h1>
            </div>
            <img
              src={analytics}
              className="w-1/2 min-w-0 border  rounded-lg "
            />
          </div>
        </div>
        {/* <div className="flex flex-col justify-around gap-6 mx-10 p-10 bg-white ">
          <h1 className="text-5xl text-center text-black font-bold">
            Discover Diverse Tech Talents in One Place.
          </h1>
          <div className="flex gap-4">
            <div className="w-1/3 flex flex-col">
              <div className="flex items-center justify-center  gap-10 ">
                <div className="flex  item-center  text-nowrap  text-lg text-black flex-col  ">
                  <div className="flex justify-start items-center gap-5">
                    <div className="w-8 h-8  flex justify-center items-center rounded-full border shadow-lg  border-slate-600">
                      <div
                        className={`w-6 h-6 rounded-full ${
                          active === "front" ? "bg-custom_purple_dark" : " "
                        }`}
                      ></div>
                    </div>
                    <button
                      onClick={() => setActive("front")}
                      className={`h-10 text-left  hover:scale-105 font-semibold  hover:text-custom_purple_dark  ${
                        active === "front" ? "text-custom_purple_dark " : ""
                      } `}
                    >
                      Front-End Development
                    </button>
                  </div>
                  <div className="w-1  h-10 bg-gray-400  ml-3.5  rounded-lg  "></div>
                  <div className="flex justify-start items-center gap-5">
                    <div className="w-8 h-8 2  flex justify-center items-center rounded-full border border-slate-600">
                      <div
                        className={`w-6 h-6 rounded-full ${
                          active === "back" ? "bg-custom_purple_dark" : " "
                        }`}
                      ></div>
                    </div>
                    <button
                      onClick={() => setActive("back")}
                      className={`h-12 text-left hover:scale-105 font-semibold hover:text-custom_purple_dark  ${
                        active === "back" ? "text-custom_purple_dark " : ""
                      } `}
                    >
                      Back-End Development
                    </button>
                  </div>
                  <div className="w-1  h-10 bg-slate-400 ml-3.5  rounded-lg  "></div>
                  <div className="flex justify-start items-center gap-5">
                    <div className="w-8 h-8 2  flex justify-center items-center rounded-full border border-slate-600">
                      <div
                        className={`w-6 h-6 rounded-full ${
                          active === "app" ? "bg-custom_purple_dark" : " "
                        }`}
                      ></div>
                    </div>
                    <button
                      onClick={() => setActive("app")}
                      className={`h-12 text-left hover:scale-105 font-semibold   hover:text-custom_purple_dark  ${
                        active === "app" ? "text-custom_purple_dark  " : ""
                      } `}
                    >
                      App Development
                    </button>
                  </div>
                  <div className="w-1  h-10 bg-slate-400 ml-3.5 rounded-lg "></div>
                  <div className="flex justify-start items-center gap-5">
                    <div className="w-8 h-8 2  flex justify-center items-center rounded-full border border-slate-600">
                      <div
                        className={`w-6 h-6 rounded-full ${
                          active === "software" ? "bg-custom_purple_dark" : " "
                        }`}
                      ></div>
                    </div>
                    <button
                      onClick={() => setActive("software")}
                      className={`h-12 text-left hover:scale-105 font-semibold  hover:text-custom_purple_dark ${
                        active === "software" ? "text-custom_purple_dark " : ""
                      } `}
                    >
                      Software Development
                    </button>
                  </div>
                  <div className="w-1  h-10 bg-slate-400 ml-3.5 rounded-lg "></div>
                  <div className="flex justify-start items-center gap-5">
                    <div className="w-8 h-8 2  flex justify-center items-center rounded-full border border-slate-600">
                      <div
                        className={`w-6 h-6 rounded-full ${
                          active === "devops" ? "bg-custom_purple_dark" : " "
                        }`}
                      ></div>
                    </div>
                    <button
                      onClick={() => setActive("devops")}
                      className={`h-12 text-left hover:scale-105 font-semibold hover:text-custom_purple_dark ${
                        active === "devops" ? "text-custom_purple_dark " : ""
                      } `}
                    >
                      DevOps
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-2/3  ">
              {active === "front" && (
                <>
                  <TechStack tech={front} />
                </>
              )}
              {active === "back" && (
                <>
                  <TechStack tech={back} />
                </>
              )}
              {active === "software" && (
                <>
                  <TechStack tech={software} />
                </>
              )}
              {active === "app" && (
                <>
                  <TechStack tech={app} />
                </>
              )}
              {active === "devops" && (
                <>
                  <TechStack tech={devops} />
                </>
              )}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
