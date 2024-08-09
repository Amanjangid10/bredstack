import React, { useState } from "react";

import Modal from "../Modal";
import person from "../../assets/person.png";
import person2 from "../../assets/person2.jpeg";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import person5 from "../../assets/person5.png";

import { Search } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

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
        <Modal isopen={isModalOpen} onclose={closeModal} />
      </div>

      <div className="relative p-10 z-10 min-h-full   bg-white shadow-sm">
        <div className="flex  md:justify-around  mx-32 gap-20 py-10">
          <div className=" w-1/2 flex flex-col gap-6 text-left   ">
            <h1 className="text-2xl tracking-normal font-bold text-gray-900 lg:text-2xl sm:text-1xl">
              <p className="text-5xl">Build your own team </p>
              <span> from top 1% </span>
              <span>
                <TypeAnimation
                  sequence={["Engineers", 1000, "Developers", 1000]}
                  wrapper="span"
                  speed={(45, "keyStrokeDelayInMs", 300)}
                  deletionSpeed={(45, "keyStrokeDelayInMs", 200)}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className=" text-lg leading-8 text-gray-600">
              At Bredstack we helps your buisness to scale.
            </p>
            <div className=" relative flex items-center text-gray-500 focus-within:text-gray-600">
              <input
                type="search"
                className="border pl-10 pr-3 h-10  w-full rounded-2xl"
                placeholder="Search your service here "
              />
              <Search className="absolute ml-3 pointer-events-none  " />
            </div>
            <div className=" flex items-center justify-start gap-x-6">
              <a
                href="#"
                className="rounded-full border border-custom_purple_dark bg-custom_purple_dark px-7 py-3 text-md font-semibold text-white shadow-md hover:bg-purple-900 "
              >
                Get Started
              </a>
              <a
                href="#"
                className="rounded-full border border-custom_purple_dark bg-white px-7 py-3 text-md font-semibold text-custom_purple_dark shadow-md hover:bg-gray-200 "
              >
                Book A Meeting
              </a>
            </div>
            <div className=" flex items-center justify-start mt-10 ">
              <img
                src={person}
                className="relative z-1 h-20 border-4 border-white rounded-full "
              />
              <img
                src={person2}
                className="relative z-2 h-20 right-4  border-4 border-white rounded-full"
              />
              <img
                src={person3}
                className="relative z-3 h-20 right-8 border-4 border-white rounded-full shadow-lg "
              />
              <img
                src={person4}
                className="relative z-4  h-20 right-12 border-4 border-white rounded-full"
              />
              <img
                src={person5}
                className="relative z-5 h-20 right-16 border-4 border-white rounded-full"
              />
            </div>
            <div className="text-left text-xl  font-bold">
              Trusted by over 1000+ clients.
            </div>
          </div>
          <div className="w-1/2 bg-custom_purple_dark  rounded-md shadow-md ">
            <div className="  flex flex-col gap-8 text-center my-10 mx-16  p-8 bg-white rounded-md">
              <h1 className="text-3xl font-bold text-center">
                Connect With Us.
              </h1>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  className="border border-gray-400 pl-2  h-8  w-full rounded-lg"
                  placeholder="Name"
                />
                <input
                  type="phone"
                  className="border border-gray-400 pl-2  h-8  w-full rounded-lg"
                  placeholder="Phone No."
                />
                <input
                  type="text"
                  className="border border-gray-400 pl-2 h-8  w-full rounded-lg"
                  placeholder="Email"
                />
                <button className="mt-5 h-8  bg-custom_purple_dark hover:bg-purple-900 text-white font-medium rounded-lg ">
                  Request A Call
                </button>

                <h1 className="mt-2  text-gray-400 font-normal">OR</h1>

                <button
                  onClick={openModal}
                  className="mt-2 h-8  bg-white border-2 border-custom_purple_dark text-custom_purple_dark hover:bg-gray-200 font-medium rounded-lg "
                >
                  Get A Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
