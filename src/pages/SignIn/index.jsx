import React, { useState } from "react";
import logo from "../../assets/logo.png";
import google from "../../assets/google.png";
import loginimage from "../../assets/loginimage.png";

export default function SignUp() {
  const [toggleSignin, setTogglesignin] = useState("false");

  const togglebtn = () => {
    setTogglesignin(!toggleSignin);
  };
  const handleForgetPassword = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex  min-h-screen max-h-screen bg-gray-300">
      <div className="mx-32 my-5 p-2 flex justify-center border border-slate-300 rounded-2xl bg-white">
        <div className="w-3/5   ">
          <div className="flex px-10 p-4">
            <a href="/" className="-m-1.5 p-1.5">
              <img src={logo} className="w-15 h-10" />
            </a>
          </div>
          <div className=" flex flex-col h-auto justify-center mx-32 mt-10 gap-2">
            <h1 className="text-2xl font-semibold  ">Get Started Now.</h1>
            <h1 className="text-sm  text-gray-500 font-medium">
              Begin your journey with us.
            </h1>

            <button className=" w-fit p-1 mt-2   flex items-center gap-2 border border-slate-200 rounded-md ">
              <img src={google} className="h-4" />
              <h1 className="text-center text-sm">log In with Google</h1>
            </button>

            <div className="flex flex-col min-w-0  ">
              <form className="flex  flex-col   gap-3  pt-3">
                <div>
                  {!toggleSignin && (
                    <div className="flex gap-2">
                      <div>
                        <label htmlFor="first" className="text-sm ">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first"
                          className="border border-gray-300 pl-2 h-8  w-full rounded-lg"
                        />
                      </div>
                      <div>
                        <label htmlFor="last" className="text-sm ">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last"
                          className="border border-gray-300 pl-2 h-8 w-full rounded-lg"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm ">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="border border-gray-300 pl-2   h-8  w-full rounded-md"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm">
                      Password
                    </label>
                    <button onClick={handleForgetPassword} className="text-sm ">
                      Forgot Password ?
                    </button>
                  </div>

                  <input
                    type="text"
                    id="password"
                    className="border border-gray-300 pl-2  h-8  w-full rounded-lg"
                  />
                </div>
                {!toggleSignin && (
                  <div>
                    <label htmlFor="confirmpassword" className="text-sm ">
                      Confirm Password
                    </label>
                    <input
                      type="text"
                      id="confirmpassword"
                      className="border border-gray-300 pl-2  h-8 w-full rounded-lg"
                    />
                  </div>
                )}

                <div className="flex items-center  gap-2">
                  <input type="checkbox" />
                  <h1 className="text-center  text-sm">
                    I agree to terms and conditions.
                  </h1>
                </div>

                <div className="flex justify-center mt-2">
                  {!toggleSignin ? (
                    <input
                      type="text"
                      value="Sign Up"
                      className="  h-8 w-full cursor-pointer  text-center  bg-custom_purple_dark hover:bg-purple-900 text-white  font-medium rounded-full"
                    />
                  ) : (
                    <input
                      type="text"
                      value="Sign In"
                      className="  h-10 w-full cursor-pointer  text-center  bg-custom_purple_dark hover:bg-purple-900 text-white  font-medium rounded-full"
                    />
                  )}
                </div>
              </form>
              <div className="flex items-center text-sm justify-center mt-2">
                <h1>
                  {!toggleSignin
                    ? "Already have an account ?"
                    : "Don't have an account ? "}
                </h1>
                {!toggleSignin ? (
                  <button onClick={togglebtn}> Sign In </button>
                ) : (
                  <button onClick={togglebtn}> Sign Up</button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5 flex flex-col gap-5 h-auto m p-20  bg-custom_purple_dark rounded-2xl ">
          <h1 className=" text-left  text-3xl text-white  font-medium ">
            A simple way to manage your buisness requirements.
          </h1>
          <div className=" flex ">
            <img src={loginimage} className=" w-5/6 rounded-xl" />
            <img
              src={loginimage}
              className="relative right-20 top-20 w-1 h-3/5 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
