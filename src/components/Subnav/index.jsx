import React, { useState } from "react";
import Content from "./Content";

function Subnav() {
  const [active, setActive] = useState("frontend");

  return (
    <div className=" bg-custom_blue_dark py-10 lg:max-w-7xl lg:px-28 md:px-10 sm:px-5 ">
      <nav className="max-w-full overflow-x-auto px-10">
        <ul className="flex  gap-10 items-center md:justify-center whitespace-nowrap">
          <li>
            <button
              onClick={() => setActive("frontend")}
              style={{ fontFamily: "Gilroy-Bold" }}
              className={` md:text-md sm:text-sm   hover:scale-105   ${
                active === "frontend" ? "text-white" : "text-gray-500"
              }`}
            >
              FrontEnd <br /> Development
            </button>
          </li>
          <li className="">
            <button
              onClick={() => setActive("backend")}
              style={{ fontFamily: "Gilroy-Bold" }}
              className={` md:text-sm sm:text-sm  hover:scale-105   ${
                active === "backend" ? "text-white" : "text-gray-500 "
              }`}
            >
              BackEnd <br /> Development
            </button>
          </li>
          <li className="">
            <button
              onClick={() => setActive("app")}
              style={{ fontFamily: "Gilroy-Bold" }}
              className={` md:text-sm sm:text-sm  hover:scale-105   ${
                active === "app" ? "text-white" : "text-gray-500 "
              }`}
            >
              App <br /> Development
            </button>
          </li>
          <li className="">
            <button
              onClick={() => setActive("software")}
              style={{ fontFamily: "Gilroy-Bold" }}
              className={` md:text-sm sm:text-sm   hover:scale-105   ${
                active === "software" ? "text-white" : "text-gray-500 "
              }`}
            >
              Software <br /> Development{" "}
            </button>
          </li>
          <li className="">
            <button
              onClick={() => setActive("devops")}
              style={{ fontFamily: "Gilroy-Bold" }}
              className={` md:text-sm sm:text-sm   hover:scale-105   ${
                active === "devops" ? "text-white" : "text-gray-500 "
              }`}
            >
              Devops{" "}
            </button>
          </li>
        </ul>
      </nav>
      <div className="mt-10">
        {active === "frontend" && <Content />}
        {active === "backend" && <Content />}
        {active === "app" && <Content />}
        {active === "software" && <Content />}
        {active === "devops" && <Content />}
      </div>
    </div>
  );
}
export default Subnav;
