import React, { useEffect, useRef, useState } from "react";
import Frontend from "./Content/Frontend";
import Backend from "./Content/Backend";
import AppDev from "./Content/AppDev";
import Software from "./Content/Software";
import Devops from "./Content/Devops";

function Subnav() {
  const ref = ["frontend", "backend", "app", "software", "devops"];

  const [active, setActive] = useState(ref[0]);

  const buttonRefs = useRef([]);

  // useEffect(() => {
  //   console.log(ref[0]);
  //   const interval = setInterval(() => {
  //     if (buttonRefs.current[active]) {
  //       buttonRefs.current[active].click();
  //     }

  //     setActive((prevIndex) =>
  //       prevIndex === buttonRefs.current.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 2000);

  //   return
  // }, [active]);

  return (
    <div className="md:flex justify-center md:p-10 sm:p-5 bg-custom_bluelight">
      <div className=" bg-white p-5 flex flex-col gap-5 rounded-lg ">
        <nav className="max-w-full overflow-x-auto ">
          <ul className="flex md:justify-between items-center md:gap-0 sm:gap-10  whitespace-nowrap">
            <li className="md:w-1/5 text-center">
              <button
                ref={(e) => (buttonRefs.current[ref[0]] = e)}
                onClick={() => setActive(ref[0])}
                style={{ fontFamily: "Gilroy-Bold" }}
                className={` md:text-md sm:text-sm text-center   hover:scale-105   ${
                  active === "frontend" ? "text-custom_black" : "text-gray-500"
                }`}
              >
                FrontEnd <br /> Development
              </button>
            </li>
            <li className=" md:w-1/5 text-center">
              <button
                ref={(e) => (buttonRefs.current[ref[1]] = e)}
                onClick={() => setActive(ref[1])}
                style={{ fontFamily: "Gilroy-Bold" }}
                className={` md:text-sm sm:text-sm text-center   hover:scale-105   ${
                  active === "backend" ? "text-custom_black" : "text-gray-500 "
                }`}
              >
                BackEnd <br /> Development
              </button>
            </li>
            <li className=" md:w-1/5 text-center">
              <button
                ref={(e) => (buttonRefs.current[ref[2]] = e)}
                onClick={() => setActive(ref[2])}
                style={{ fontFamily: "Gilroy-Bold" }}
                className={` md:text-sm sm:text-sm text-center   hover:scale-105   ${
                  active === "app" ? "text-custom_black" : "text-gray-500 "
                }`}
              >
                App <br /> Development
              </button>
            </li>
            <li className=" md:w-1/5 text-center">
              <button
                ref={(e) => (buttonRefs.current[ref[3]] = e)}
                onClick={() => setActive(ref[3])}
                style={{ fontFamily: "Gilroy-Bold" }}
                className={` md:text-sm sm:text-sm text-center   hover:scale-105   ${
                  active === "software" ? "text-custom_black" : "text-gray-500 "
                }`}
              >
                Software <br /> Development{" "}
              </button>
            </li>
            <li className="md:w-1/5 text-center">
              <button
                ref={(e) => (buttonRefs.current[ref[4]] = e)}
                onClick={() => setActive(ref[4])}
                style={{ fontFamily: "Gilroy-Bold" }}
                className={` md:text-sm sm:text-sm text-center    hover:scale-105   ${
                  active === "devops" ? "text-custom_black" : "text-gray-500 "
                }`}
              >
                Devops{" "}
              </button>
            </li>
          </ul>
        </nav>
        <div className=" sm:hidden md:flex md:justify-evenly  h-0.5 w-full bg-gray-200">
          <div
            className={`md:w-1/5 sm:w-full text-center ${
              active === "frontend" ? "bg-custom_blue" : ""
            }    h-0.5 `}
          ></div>
          <div
            className={`md:w-1/5 sm:w-full text-center ${
              active === "backend" ? "bg-custom_blue" : ""
            }    h-0.5 `}
          ></div>
          <div
            className={`md:w-1/5 sm:w-full text-center ${
              active === "app" ? "bg-custom_blue" : ""
            }    h-0.5 `}
          ></div>
          <div
            className={`md:w-1/5 sm:w-full text-center ${
              active === "software" ? "bg-custom_blue" : ""
            }    h-0.5 `}
          ></div>
          <div
            className={`md:w-1/5 sm:w-full text-center ${
              active === "devops" ? "bg-custom_blue" : ""
            }    h-0.5 `}
          ></div>
        </div>
        <div className=" p-2">
          {active === ref[0] && <Frontend />}
          {active === ref[1] && <Backend />}
          {active === ref[2] && <AppDev />}
          {active === ref[3] && <Software />}
          {active === ref[4] && <Devops />}
        </div>
      </div>
    </div>
  );
}
export default Subnav;
