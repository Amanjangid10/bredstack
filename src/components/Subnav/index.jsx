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
    <div className="bg-custom_blue_dark md:flex md:justify-center">
      <div className="  py-10 lg:max-w-7xl  lg:px-28 md:px-10 sm:px-5 ">
        <nav className="max-w-full overflow-x-auto px-10">
          <ul className="flex items-center md:justify-between whitespace-nowrap">
            <li>
              <button
                ref={(e) => (buttonRefs.current[ref[0]] = e)}
                onClick={() => setActive(ref[0])}
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
                ref={(e) => (buttonRefs.current[ref[1]] = e)}
                onClick={() => setActive(ref[1])}
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
                ref={(e) => (buttonRefs.current[ref[2]] = e)}
                onClick={() => setActive(ref[2])}
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
                ref={(e) => (buttonRefs.current[ref[3]] = e)}
                onClick={() => setActive(ref[3])}
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
                ref={(e) => (buttonRefs.current[ref[4]] = e)}
                onClick={() => setActive(ref[4])}
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
