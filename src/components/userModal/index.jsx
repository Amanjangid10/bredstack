import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import logo from "../../assets/logo.png";
import Submitted from "./Submitted.jsx";
import axios from "axios";
import CustomButton from "../CustomComponents/CustomButton.jsx";

function UserModal({ isopen, onclose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:3000/api/create",
        formData
      );
      if (response.status === 201) {
        toast.success("Welcome aboard");
        setIsSubmitted(!isSubmitted);
        setFormData({
          name: "",
          email: "",
          phone: "",
        });
      }
    } catch (error) {
      toast.error("User already exists");
      console.log(error);
      console.log("somthing wrong while submitting data");
    }
  };

  const handleOnClose = () => {
    onclose();
    setIsSubmitted(!isSubmitted);
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
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
                  className=" md:text-sm sm:text-xs"
                >
                  Close
                </button>
              </div>
              <Toaster />
              {!isSubmitted && (
                <form
                  onSubmit={handlesubmit}
                  className="flex flex-col h-auto justify-center px-20 md:gap-2 sm:gap-2 p-5 "
                >
                  <h1
                    className="text-center  text-sm"
                    style={{ fontFamily: "Gilroy-Bold" }}
                  >
                    Fill Your Details here{" "}
                  </h1>
                  <div className="flex flex-col text-gray-500 focus-within:text-black ">
                    <label htmlFor="name" className="px-0.5 text-xs">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border px-2 w-full rounded-lg lg:h-8 md:h-8 md:text-sm "
                      required
                    />
                  </div>
                  <div className="flex flex-col text-gray-500 focus-within:text-black ">
                    <label htmlFor="email" className="px-0.5 text-xs">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                      className="border px-2 w-full rounded-lg lg:h-8 md:h-8 md:text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col text-gray-500 focus-within:text-black ">
                    <label htmlFor="phone" className="px-0.5 text-xs">
                      Contact No.
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      onChange={handleChange}
                      value={formData.phone}
                      className="border px-2 w-full rounded-lg lg:h-8 md:h-8 md:text-sm"
                      required
                    />
                  </div>
                  <div className="flex justify-center ">
                    <CustomButton type={"submit"} label={"Submit"} />
                  </div>
                </form>
              )}

              {isSubmitted && (
                <>
                  <Submitted onclose={handleOnClose} />
                </>
              )}
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

export default UserModal;
