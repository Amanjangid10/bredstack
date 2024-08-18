import React from "react";

export default function CustomButton({ onclick, label }) {
  return (
    <button
      onClick={onclick}
      className="flex justify-center items-center  border border-white  rounded-lg bg-custom_blue text-white text-nowrap md:text-sm px-5 py-2  sm:text-xs "
      style={{ fontFamily: "Gilroy-Bold" }}
    >
      {label}
    </button>
  );
}
