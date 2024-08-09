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
    <div>
      {isopen && (
        <div className="flex   min-h-screen max-h-screen bg-opacity-70 bg-gray-900 ">
          <div className="m-10 mx-36 p-4 flex justify-center border border-slate-300 rounded-3xl bg-white">
            <div className="w-1/2">
              <div className="flex justify-between px-10 p-4">
                <a href="/" className="-m-1.5 p-1.5">
                  <img src={logo} className="w-15 h-10" />
                </a>
                <button
                  onClick={handleOnClose}
                  className="font-semibold
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
            <div className="w-1/2 flex flex-col gap-5 h-auto m p-20  bg-custom_purple_dark rounded-3xl ">
              <h1 className=" text-left  text-3xl text-white  font-medium ">
                A simple way to manage your buisness requirements.
              </h1>
              <div className=" flex ">
                <img src="" className=" w-5/6 rounded-xl" />
                <img
                  src=""
                  className="relative right-20 top-20 w-1 h-3/5 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
