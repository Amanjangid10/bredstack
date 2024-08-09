import React, { useState } from "react";
import ai_img from "../../assets/ai_img.png";
import analytics from "../../assets/analytics.png";
import { logo } from "./constants";
import TechStack from "./TechStack";
import { front, back, app, devops, software } from "./Data";

export default function Client() {
  const [active, setActive] = useState("front");
  return (
    <div className="flex flex-col  gap-10">
      <div className=" bg-gray-100 min-h-0">
        <div className=" flex justify-center  py-20 px-28 ">
          <div className="w-full  flex flex-nowrap justify-center items-center  gap-10 px-20 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] ">
            {logo.map((item, index) => {
              console.log(item);
              return (
                <div key={index}>
                  <img src={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="  mx-20 my-10  rounded-lg ">
        <div className="flex justify-around gap-3 mx-16 p-10 ">
          <div className="flex w-1/2 items-center justify-around  shadow-lg rounded-lg bg-custom_purple_dark ">
            <div className="text-left p-5">
              <h1 className="text-4xl font-semibold text-white ">
                AI Vetted Developers
              </h1>
              <p className="text-white">Content goes here </p>
            </div>

            <img
              src={ai_img}
              className=" min-w-0 p-2 m-5 rounded-xl shadow-sm "
            />
          </div>
          <div className="flex w-1/2 items-center justify-around shadow-lg p-2 rounded-lg  bg-[#1f084c]    ">
            <div className="text-left p-5">
              <h1 className="text-4xl text-white  font-semibold">
                Expert Tech Team
              </h1>
              <p className="text-white">Content goes here </p>
            </div>
            <img
              src={analytics}
              className="min-w-0 p-2 m-1 rounded-xl shadow-sm"
            />
          </div>
        </div>
        <div className="flex flex-col justify-around gap-6  mx-20 p-10 bg-white shadow-lg">
          <h1 className="text-5xl text-center text-black font-bold">
            Discover Diverse Tech Talents in One Place.
          </h1>
          <div className="flex">
            <div className="w-1/3 m flex flex-col  m-10 p-5 ">
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
            <div className=" w-2/3 flex justify-around item-center rounded-lg   ">
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
        </div>
      </div>
    </div>
  );
}
