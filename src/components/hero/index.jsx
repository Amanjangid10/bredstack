import React, { useState } from "react";

import Modal from "../Modal";
import UserModal from "../userModal";
import Image from "./constants/Image.png";
import CustomButton from "../CustomComponents/CustomButton";

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="fixed z-20 top-0 bg-opacity-30 ">
        <UserModal isopen={isModalOpen} onclose={closeModal} />
      </div>

      <div className="relative bg-custom_blue_dark text-white flex flex-col items-center justify-center gap-10 pt-20 md:pb-40 md:mb-60 sm:pb-40 sm:mb-20   ">
        <div className=" flex flex-col items-center md:w-1/2 lg:gap-8 md:gap-8 sm:gap-4 sm:mx-5">
          <h1
            className="text-center lg:text-2xl sm:text-xl flex flex-col gap-2 "
            style={{ fontFamily: "Gilroy-Bold" }}
          >
            <p className=" text-nowrap lg:text-5xl md:text-4xl sm:text-3xl ">
              Connecting Talent with <br /> Opportunity{" "}
            </p>

            {/* <span>
              <TypeAnimation
                sequence={["Engineers", 1000, "Developers", 1000]}
                wrapper="span"
                speed={(45, "keyStrokeDelayInMs", 300)}
                deletionSpeed={(45, "keyStrokeDelayInMs", 200)}
                repeat={Infinity}
              />
            </span> */}
          </h1>
          <p className="  text-gray-300 text-center text-nowrap  lg:text-lg md:text-sm sm:text-xs sm:text-wrap">
            At HireDost, we empower job seekers by connecting them directly with{" "}
            <br /> professionals who provide trusted referrals and guidance. Job
            seekers gain <br />
            valuable insights into roles, while referrers are rewarded for
            helping place top <br /> talent. Together, we create a pathway for
            job seekers to find meaningful <br /> opportunities and for
            referrers to contribute to hiring success.
          </p>
          <div className=" flex items-center justify-start lg:gap-6 md:gap-2 sm:gap-2">
            <CustomButton label={"Get Started"} onclick={openModal} />
            <CustomButton label={"Learn more"} />
          </div>
          {/* <div className=" relative flex items-center text-gray-500 focus-within:text-gray-600">
            <input
              type="search"
              className="border pl-10 pr-3 w-full rounded-2xl lg:h-10 md:h-8 md:text-sm"
              placeholder="Search your service here "
            />
            <Search className="absolute ml-3 pointer-events-none" />
          </div> */}
          {/* <div className=" flex items-center justify-start  ">
            <img
              src={person}
              className="relative z-1 h-12 border-4 border-white rounded-full "
            />
            <img
              src={person2}
              className="relative z-2 h-12 right-4  border-4 border-white rounded-full"
            />
            <img
              src={person3}
              className="relative z-3 h-12 right-8 border-4 border-white rounded-full  "
            />
            <img
              src={person4}
              className="relative z-4  h-12 right-12 border-4 border-white rounded-full"
            />
            <img
              src={person5}
              className="relative z-5 h-12 right-16 border-4 border-white rounded-full"
            />
          </div>
          <div className="text-left md:text-sm ">
            Trusted by over 1000+ clients.
          </div> */}
        </div>
        <div className=" absolute md:top-[55%] sm:top-[60%] lg:max-w-7xl lg:mx-28 md:mx-10 sm:mx-5 sm:mt-10 rounded-3xl overflow-hidden">
          <img
            src={
              "https://cdn.prod.website-files.com/62775a91cc3db44c787149de/663551bc283c663f6f39ae5c_Section3_JobInsights.webp "
            }
            className="min-w-0 rounded-3xl "
          />
        </div>
      </div>
      {/* <div className=" hidden w-1/2 md:flex justify-center items-center bg-custom_purple_dark  rounded-md md:p-6 ">
            <div className=" w-full bg-white text-center rounded-md md:flex md:flex-col md:gap-6 lg:p-10 md:p-6   ">
              <h1 className=" text-center font-bold lg:text-3xl md:text-xl">
                Connect With Us.
              </h1>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  className="border border-gray-400 w-full rounded-lg  pl-2 lg:h-8 md:h-6 md:text-sm"
                  placeholder="Name"
                />
                <input
                  type="phone"
                  className="border border-gray-400  w-full rounded-lg  pl-2 lg:h-8 md:h-6 md:text-sm "
                  placeholder="Phone No."
                />
                <input
                  type="text"
                  className="border border-gray-400 w-full rounded-lg pl-2 lg:h-8 md:h-6  md:text-sm"
                  placeholder="Email"
                />
                <button className=" bg-custom_purple_dark hover:bg-purple-900 text-white font-medium rounded-lg lg:text-md md:text-sm lg:py-3 md:py-1 lg:px-7 md:px-5 ">
                  Request A Call
                </button>

                <h1 className=" text-gray-400 md:text-sm">OR</h1>

                <button
                  onClick={openModal}
                  className=" bg-white border border-custom_purple_dark text-custom_purple_dark hover:bg-gray-200 font-medium rounded-lg lg:text-md md:text-sm lg:py-3 md:py-1 lg:px-7 md:px-5 "
                >
                  Get A Quote
                </button>
              </div>
            </div>
          </div> */}
    </>
  );
}
