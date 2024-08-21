import React from "react";

import Jenkins from "../../logos/Jenkins.svg";
import Jira from "../../logos/Jira.svg";
import Kafka from "../../logos/Kafka.svg";
import Kubernetes from "../../logos/Kubernetes.svg";
import AWS from "../../logos/AWS.svg";
import Azure from "../../logos/Azure.svg";

import CustomButton from "../CustomComponents/CustomButton";

export default function Cloud_Service({ submit, prev }) {
  return (
    // <div className=" flex flex-col h-auto justify-center  mx-20 mt-20 gap-2">
    //   <h1 className="text-xl font-semibold  ">
    //     Which Cloud integration would you prefer ?
    //   </h1>
    //   <h1 className="text-sm  text-gray-500 font-medium">
    //     Choose according to your needs.
    //   </h1>

    //   <div className="grid grid-cols-3 gap-5   mt-10  ">
    //     <button className="flex items-center justify-center border border-gray-200 max-w-36 shadow-md">
    //       <h1 className=" text-center p-5">AWS</h1>
    //     </button>
    //     <button className=" flex items-center justify-center border border-gray-200  max-w-36 shadow-md ">
    //       <h1 className=" text-center p-5 ">Azure</h1>
    //     </button>
    //     <button className=" flex items-center justify-center border border-gray-200  max-w-36 shadow-md ">
    //       <h1 className=" text-center p-5 ">GCP</h1>
    //     </button>
    //     <button className="flex items-center justify-center border border-gray-200 max-w-36 shadow-md">
    //       <h1 className=" text-center p-5">Docker</h1>
    //     </button>
    //     <button className=" flex items-center justify-center border border-gray-200  max-w-36 shadow-md ">
    //       <h1 className=" text-center p-5 ">Teraform</h1>
    //     </button>
    //     <button className=" flex items-center justify-center border border-gray-200  max-w-36 shadow-md ">
    //       <h1 className=" text-center p-5 ">Kubernetes</h1>
    //     </button>
    //   </div>
    //   <div className="flex justify-between gap-20">
    //     <button
    //       onClick={prev}
    //       className="w-1/3 h-10 mt-10 bg-custom_purple_dark text-white rounded-lg"
    //     >
    //       Back
    //     </button>
    //     <button
    //       onClick={submit}
    //       className="w-1/3 h-10 mt-10 bg-custom_purple_dark text-white rounded-lg"
    //     >
    //       Submit
    //     </button>
    //   </div>
    // </div>
    <div className=" flex flex-col  justify-center p-5 gap-2">
      <h1
        className="md:text-xl sm:text-lg  "
        style={{ fontFamily: "Gilroy-Bold" }}
      >
        Tell us more about yourself.
      </h1>
      <h1 className="md:text-sm sm:text-xs  text-gray-500 ">
        What tools would you use for your buisness requirement ?
      </h1>
      <div className="grid grid-cols-3 gap-2 py-5    ">
        <button className="flex flex-col p-2 rounded-lg items-center justify-center border border-gray-200  ">
          <img src={Jira} className="h-10 w-fit" />
          <h1 className=" text-center md:text-sm text-xs ">Jira</h1>
        </button>
        <button className=" flex flex-col p-2 rounded-lg items-center justify-center border border-gray-200  max-w-36  ">
          <img src={Jenkins} className="h-10 w-fit" />
          <h1 className=" text-center md:text-sm text-xs  ">Jenkins</h1>
        </button>
        <button className=" flex flex-col p-2 rounded-lg items-center justify-center border border-gray-200  max-w-36  ">
          <img src={AWS} className="h-10 w-fit" />
          <h1 className=" text-center md:text-sm text-xs  ">AWS</h1>
        </button>
        <button className="flex flex-col p-2 rounded-lg items-center justify-center border border-gray-200 max-w-36 ">
          <img src={Azure} className="h-10 w-fit" />
          <h1 className=" text-center md:text-sm text-xs ">Azure</h1>
        </button>
        <button className=" flex flex-col p-2 rounded-lg items-center justify-center border border-gray-200  max-w-36  ">
          <img src={Kafka} className="h-10 w-fit" />
          <h1 className=" text-center md:text-sm text-xs  ">Kafka</h1>
        </button>
        <button className=" flex flex-col p-2 rounded-lg items-center justify-center border border-gray-200  max-w-36  ">
          <img src={Kubernetes} className="h-10 w-fit" />
          <h1 className=" text-center md:text-sm text-xs  ">Kubernetes</h1>
        </button>
      </div>
      <div className="flex justify-between gap-20">
        <CustomButton onclick={prev} label={"Back"} />
        <CustomButton onclick={submit} label={"Submit"} />
      </div>
    </div>
  );
}
