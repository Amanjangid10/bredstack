import React, { useState } from "react";
import ForDevelopers_Companies from "./ForDevelopers_Companies";
import logo from "../../assets/logo.png";
import Prefered_TechStack from "./Prefered_TechStack";
import Cloud_Service from "./Cloud_Service";
import Submitted from "./Submitted";

export default function Modal({ isopen, onclose }) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };
  const handlesubmit = () => {
    setStep(null);
    setIsSubmitted(true);
  };
  const handleOnClose = () => {
    setStep(1);
    setIsSubmitted(false);
    onclose();
  };

  return (
    <>
      {isopen && (
        <div className="flex justify-center items-center w-screen min-h-screen bg-opacity-70 bg-gray-900 md:p-0 sm:p-2 ">
          <div className="flex md:flex-row sm:flex-col border border-slate-300 rounded-xl bg-white p-2 lg:max-w-3xl  md:max-w-xl  ">
            <div className="md:w-[60%]">
              <div className="flex justify-between p-5">
                <a href="/" className="-m-1.5 p-1.5">
                  <img src={logo} className="w-15 h-10" />
                </a>
                <button
                  style={{ fontFamily: "Gilroy-Bold" }}
                  onClick={handleOnClose}
                  className=" md:text-sm sm:text-xs
                "
                >
                  Close
                </button>
              </div>
              {step === 1 && (
                <ForDevelopers_Companies next={handleNext} prev={handlePrev} />
              )}
              {step === 2 && (
                <Prefered_TechStack next={handleNext} prev={handlePrev} />
              )}
              {step === 3 && (
                <Cloud_Service submit={handlesubmit} prev={handlePrev} />
              )}
              {isSubmitted && <Submitted onclose={handleOnClose} />}
            </div>
            <div className="md:w-[40%] flex flex-col gap-5 h-auto lg:p-20 md:p-8 sm:p-5  bg-custom_blue rounded-xl ">
              <h1 className=" md:text-left  sm:text-center  lg:text-3xl md:text-2xl sm:text-xl text-white">
                A simple way to manage your buisness requirements.
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
