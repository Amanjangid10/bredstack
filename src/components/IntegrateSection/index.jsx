import React from "react";
import slack from "../../assets/slack.png";
import google from "../../assets/google.png";
import twitter from "../../assets/twitter.png";
import webflow from "../../assets/webflow.png";
import discord from "../../assets/discord.png";
import instagram from "../../assets/instagram.png";
import wordpress from "../../assets/wordpress.png";
import product from "../../assets/product.png";
import CustomButton from "../CustomComponents/CustomButton";

export default function IntegrateSection() {
  return (
    <div className="flex justify-center bg-custom_bluelight my-20 md:p-10 sm:p-5 ">
      <div className="flex flex-col gap-5 bg-white rounded-xl lg:max-w-7xl p-5 sm:w-full ">
        <div className="bg-custom_bluelight rounded-lg ">
          <h1
            className=" sm:hidden md:block px-2 py-1  text-sm "
            style={{ fontFamily: "Gilroy-Bold" }}
          >
            INTEGRATION
          </h1>
        </div>
        <div className="flex md:flex-row sm:flex-col justify-between items-center  md:gap-10  sm:gap-5">
          <h1
            className=" text-left text-nowrap lg:text-4xl md:text-4xl sm:text-3xl "
            style={{ fontFamily: "Gilroy-Bold" }}
          >
            Integrated with <br /> tools you love
          </h1>
          <h1 className=" text-gray-500 sm:text-wrap sm:text-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut unde,
            repudiandae eveniet similique tempora modi quae culpa.
          </h1>
          <CustomButton label={"Learn more"} />
        </div>
        <div className="flex md:flex-row sm:flex-col gap-2 justify-between w-full">
          <div className="flex flex-col md:md:w-1/5 p-2 gap-2  border-2 border-gray-100  rounded-lg">
            <img src={google} alt="tech1" className="w-10" />
            <div className="text-left">
              <p style={{ fontFamily: "Gilroy-Bold" }}>Google</p>
              <p className="text-xs text-gray-400">
                Empowering the world with information at your fingertips
              </p>
            </div>
          </div>
          <div className="flex  md:flex-col justify-between gap-2 ">
            <div className="flex md:h-1/2 md:w-full sm:w-1/2 sm:flex-col md:flex-row p-2   gap-2 border-2 border-gray-100  rounded-lg">
              <img src={webflow} alt="tech1" className="h-8 w-fit" />
              <div className="text-left">
                <p className="font-bold">Webflow</p>
                <p className="text-xs text-gray-400">
                  Design, build, and launch without code.
                </p>
              </div>
            </div>
            <div className="flex md:h-1/2 md:w-full  sm:w-1/2 sm:flex-col md:flex-row  p-2 gap-2 border-2 border-gray-100  rounded-lg">
              <img src={twitter} alt="tech1" className="h-8 w-fit" />
              <div className="text-left">
                <p className="font-bold">Twitter</p>
                <p className="text-xs text-gray-400">Join the conversation.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-1/5 p-2 gap-2  border-2 border-gray-100  rounded-lg">
            <img src={slack} alt="tech1" className="w-10" />
            <div className="text-left">
              <p style={{ fontFamily: "Gilroy-Bold" }}>Slack</p>
              <p className="text-xs text-gray-400">Where work happens.</p>
            </div>
          </div>

          <div className="flex md:flex-col sm:flex-row justify-between  ">
            <div className="flex md:h-1/2 md:w-full  sm:w-1/2 md:flex-row sm:flex-col  p-2 gap-2 border-2 border-gray-100  rounded-lg">
              <img src={discord} alt="tech1" className="h-10 w-fit" />
              <div className="text-left">
                <p style={{ fontFamily: "Gilroy-Bold" }}>Discord</p>
                <p className="text-xs text-gray-400">
                  Your place to talk and hang out.
                </p>
              </div>
            </div>
            <div className="flex  md:h-1/2 md:w-full  sm:w-1/2 md:flex-row sm:flex-col p-2 gap-2 border-2 border-gray-100  rounded-lg">
              <img src={instagram} alt="tech1" className="h-10 w-fit" />
              <div className="text-left">
                <p style={{ fontFamily: "Gilroy-Bold" }}>Instagram</p>
                <p className="text-xs text-gray-400">
                  Capture and share the world's moments.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-1/5  p-2 gap-2 border-2 border-gray-100  rounded-lg">
            <img src={wordpress} alt="tech1" className="w-12" />
            <div className="text-left">
              <p style={{ fontFamily: "Gilroy-Bold" }}>Wordpress</p>
              <p className="text-xs  text-gray-400">
                Create, Connect, and Grow with WordPress.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative top-5 w-fit z-10 flex items-center  gap-2 rounded-lg ml-5 py-2 px-4 bg-custom_bluelight ">
            <img src={product} alt="Product hunt" className="w-8 min" />
            <h1 className="text-center " style={{ fontFamily: "Gilroy-Bold" }}>
              Product hunt{" "}
            </h1>
          </div>
          <div className=" flex justify-between md:flex-row sm:flex-col md:p-10 sm:p-5 md:gap-36 sm:gap-10   bg-custom_blue rounded-lg">
            <h1 className="text-left text-nowrap text-white font-bold md:text-2xl sm:text-lg md:w-1/4">
              We help real people <br /> to do more with money
            </h1>
            <div className="flex justify-between text-white md:w-3/4 sm:w-full gap-2 ">
              <div className="flex flex-col justify-center ">
                <h1 className="lg:text-3xl ">98%</h1>
                <p className=" lg:text-sm sm:text-xs">Client satisfaction</p>
              </div>
              <div className="flex flex-col justify-center ">
                <h1 className="lg:text-3xl ">30%</h1>
                <p className=" lg:text-sm sm:text-xs">Decrease sequences</p>
              </div>
              <div className="flex flex-col justify-center ">
                <h1 className="lg:text-3xl ">7.6M</h1>
                <p className=" lg:text-sm sm:text-xs">Money flows</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
