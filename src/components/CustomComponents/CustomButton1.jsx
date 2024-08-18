import React from "react";

export default function CustomButton1({ onclick, label }) {
  return (
    <button
      onClick={onclick}
      className="flex justify-center items-center  rounded-lg bg-white text-custom_blue border border-white text-nowrap md:text-sm px-5 py-2  sm:text-xs "
      style={{ fontFamily: "Gilroy-Bold" }}
    >
      {label}
    </button>
  );
}
