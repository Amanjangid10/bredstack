import React, { useState } from "react";
import logo from "../../assets/logo.png";
import google from "../../assets/google.png";
import loginimage from "../../assets/loginimage.png";
import CustomButton from "../../components/CustomComponents/CustomButton";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SignUp() {
  const [toggleSignin, setTogglesignin] = useState("false");

  const togglebtn = () => {
    setTogglesignin(!toggleSignin);
  };
  const handleForgetPassword = (e) => {
    e.preventDefault();
  };

  const handleSubmit = () => {};

  return (
    <div className="flex  min-h-screen max-h-screen bg-gray-300">
      <div className="mx-32 my-5 p-2 flex justify-center border border-slate-300 rounded-2xl bg-white">
        <div className="w-[60%] flex flex-col  lg:gap-20  ">
          <div className="flex ">
            <a href="/" className="-m-1.5 p-1.5">
              <img src={logo} className="w-15 h-10" />
            </a>
          </div>
          <div className="flex justify-center ">
            <div className=" w-1/2 flex flex-col  justify-center gap-2 ">
              <h1 className="text-2xl font-semibold  ">Lets Get Started.</h1>
              <h1 className="text-sm  text-gray-500 font-medium">
                Login using email and password here .
              </h1>

              <div className=" ">
                <div className="flex  flex-col   gap-3  pt-3">
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
                      className="border border-gray-300 pl-2   h-8  w-full rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label htmlFor="password" className="text-sm">
                        Password
                      </label>
                      <button
                        onClick={handleForgetPassword}
                        className="text-sm "
                      >
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
                </div>
                {!toggleSignin ? (
                  <CustomButton
                    onclick={handleSubmit}
                    type={"submit"}
                    label={"Sign Up"}
                  />
                ) : (
                  <CustomButton
                    onclick={handleSubmit}
                    type={"submit"}
                    label={"Sign In"}
                  />
                )}
                <div className="flex flex-col justify-center">
                  <button className="  p-2   flex justify-center items-center gap-2 border border-slate-200 rounded-lg ">
                    <img src={google} className="h-5" />
                    <h1 className="text-center text-md">log In with Google</h1>
                  </button>
                  <button className="  p-2   flex justify-center items-center gap-2 border border-slate-200 rounded-lg ">
                    <GitHubIcon />
                    <h1 className="text-center text-md">log In with GitHub</h1>
                  </button>
                </div>
                <div className="flex items-center text-sm justify-center mt-2">
                  {!toggleSignin ? (
                    <h1>
                      Already have an account ?
                      <button onClick={togglebtn}> Sign In</button>
                    </h1>
                  ) : (
                    <h1>
                      Don't have an account ?
                      <button onClick={togglebtn}> Sign Up</button>
                    </h1>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] flex flex-col gap-5 h-auto m p-20  bg-custom_blue rounded-2xl ">
          <h1 className=" text-left  text-3xl   font-medium ">
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
